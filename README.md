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









