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
