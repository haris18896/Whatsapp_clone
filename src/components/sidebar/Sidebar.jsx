import React from 'react';
import './Sidebar.css';

import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

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
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>


        </div>
    )
}

export default Sidebar
