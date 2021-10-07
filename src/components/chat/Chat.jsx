import React,{ useState } from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import axios from '../../axios.js'


function Chat({ messages}) {

    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

         axios.post('/messages/new', {
            message: input,
            name: "Haris",
            timestamp: "Just Now",
            received: true
        });

        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

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

            <div className="chat__footer">
                <EmojiEmotionsIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">
                        <SendIcon />
                    </button>
                    <MicIcon />
                </form>
            </div>

        </div>
    )
}


export default Chat
