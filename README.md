# Whatsapp_clone

## `Sync front end to backend`

`npm i pusher-js`

```js
// /src/App.js
function App() {

  useEffect(() => {
    const pusher = new Pusher('5656d95bb85395c320d8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  },[]);
```

### `Fetching New messages`

```js
// /src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9000'
});

export default instance;
```

showing messages in the console, that how many messages has been fetched from the endpoint.

```js
// src/App.js
//.....
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // for fetching
    axios.get('/messages/sync')
      .then(response => {
      setMessages(response.data);
    });
  },[]);


  useEffect(() => {
    const pusher = new Pusher('5656d95bb85395c320d8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
    });
  },[]);

  console.log(messages);

  return (

  //.....

```

Now when `Pusher` notify us of the `messages`, we say `keep all the current messages but also include the new one` 

`setMessages([...messages, newMessage])` 

```js
// /src/App.js
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // for fetching
    axios.get('/messages/sync')
      .then(response => {
      setMessages(response.data);
    });
  },[]);


  useEffect(() => {
    const pusher = new Pusher('5656d95bb85395c320d8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
  },[messages]);

  console.log(messages);
  ```

  at this point it will only show the new message, but we want to show all the messages. and for that we will have to add the `messages` as the dependency to the `useEffect` hook. which is already added.

  so every time messages changes it runs the code in the `useEffect` which is this code
  ```js
  // src/App.js
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
```

so know we have to add a clean up function to the `useEffect` hook.

```js
// /src/App.js
  useEffect(() => {
    const pusher = new Pusher('5656d95bb85395c320d8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);
```

Now it's not jumping on us again and again.

so what happens here is that, when you don't `unSubscribe` from the channel the browser will be listening to every user and will say listening listening listening, without the cleaning function the `alert` in the `useEffect` will show again and again.

now add the `received` to the `server.js` file in the `Pusher`

```js
// /backend/server.js
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            });
```

now we can remove that anoying `alert` from the `useEffect` hook.
```js
// /src/App.js
import React,{ useEffect, useState } from 'react'
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // for fetching
    axios.get('/messages/sync')
      .then(response => {
      setMessages(response.data);
    });
  },[]);


  useEffect(() => {
    const pusher = new Pusher('5656d95bb85395c320d8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );  
}

export default App;
```


### `rendering the messages on the front end`
we are passing a prop to the `<chat messages={messages} />` component.


now we can go to the `Chat.js` component and distructure the `messages` prop.
```jsx
// /src/components/chat/Chat.js
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                         {message.message}
                        <span className="chat__timestamp">
                            {new Date().toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
```

---
---







