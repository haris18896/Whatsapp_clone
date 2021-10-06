# Whatsapp_clone

for the real time messaging we will be using , `mongoDB change stream, and Pusher`


* for getting it in the middle of the screen
```css
/* src/App.css */
.app{
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #dadbd3;
}
```

```css
/* /src/sidebar.css */
.sidebar{
    display: flex;
    flex-direction: column;
    /* 35% of the area */
    flex: 0.35;
}
```
```css
/* /src/chat.css */
.sidebar{
    display: flex;
    flex-direction: column;
    /* 35% of the area */
    flex: 0.35;
}
```
This is how you divide the screen using flexbox

---
---

## `Sidebar Header`

here now we are going to add sidebar header.
```js
// /src/Sidebar.js
import React from 'react';
import './Sidebar.css';

import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Avatar, IconButton } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar
                src="https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/236438889_2943029059243957_3989747193712367152_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFTGcsqxzlhcLZ-Z9yYbNMISkLxDgQKaKlKQvEOBApoqfQGjajpRdSolYKek4CtFCBkqa1FP4L_-4pF3I96VgF-&_nc_ohc=vxrijDhieUkAX8noyO2&tn=UhcRacfgE8lV9cMw&_nc_ht=scontent.flhe7-1.fna&oh=c51eb2c1e67300b609247be9d7570943&oe=6161BB59"
                fontSize="large"
                />

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon fontSize="large" />
                    </IconButton>
                </div>
 
            </div>


        </div>
    )
}

export default Sidebar
```
getting those items in line
```css
/* /src/sidebar.css */
.sidebar__header{
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    border-right: 1px solid lightgray;
}
```
making it good for small screens
```css
/* /src/sidebar.css */
.sidebar__headerRight{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    min-width: 10vw;
}

.sidebar__headerRight > .MuiSvgIcon-root{
    margin-right: 2vw;
    font-size: 24px !important;
}
```

### `Sidebar Search`
```js
// /src/Sidebar.js

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
```

```css
/* /src/Sidebar.css */
.sidebar__search{
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
}

.sidebar__searchContainer{
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    height: 35px;
    border-radius: 20px;
}

.sidebar__searchContainer > .MuiSvgIcon-root{
    color: gray;
    padding: 10px;
}

.sidebar__searchContainer > input {
    border: none;
    outline-width: 0;
    margin-left: 10px;
}
```

with the help of `outline-width:0;` property in `css` of the input it will disable the outline blue border when clicked in the input field.

---
---

### `Sidebar chats`
```js
// /src/SidebarChat.js
import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />

            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the last Message</p>
            </div>
        </div>
    )
}

export default SidebarChat

```

```css
/* /src/SidebarChat.css */
.sidebarChat{
    display: flex;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;
}

.sidebarChat:hover{
    background: #f6f6f6;
}

.sidebarChat__info > h2{
    font-size: 16px;
    margin-bottom: 8px;
}

.sidebarChat__info{
    margin-left: 15px;
}
```














