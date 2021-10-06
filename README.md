# Whatsapp_clone

```js
// /src/Chat.js
import React from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Chat() {
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
                <p className="chat__message">
                    <span className="chat__name">Haris</span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Haris</span>

                    This is a message

                    <span className="chat__timestamp ">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Haris</span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

        </div>
    )
}


export default Chat
```

```css
.chat{
    display: flex;
    flex-direction: column;
    /* 65% of the area */
    flex: 0.65;
}

.chat__header{
    display: flex;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid lightblue;
}

.chat__headerInfo{
    flex: 1;
    padding-left: 20px;
}

.chat__headerInfo > h3{
    margin-bottom: 3px;
    font-weight: 500;
}

.chat__headerInfo > p{
    color: gray;
}


.chat__body{
    flex: 1;
    padding: 30px;
    background-image: url("https://res.cloudinary.com/practicaldev/image/fetch/s--WAKqnINn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tw0nawnvo0zpgm5nx4fp.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: scroll;

}

.chat__message{
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 20px;
    /* display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 80%;
    word-wrap: break-word; */
}

.chat__timestamp{
    margin-left: 10px;
    font-size: xx-small;
}

.chat__name{
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;   
}

.chat__receiver{
    margin-left: auto;
    background-color: #75d69a;
}
```










