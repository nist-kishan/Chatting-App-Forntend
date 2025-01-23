import React, { useState } from 'react';
import chatHeaderStyle from './chatHeader.module.css';
import { BsFilterRight } from 'react-icons/bs';
import { IoMdLogOut } from "react-icons/io";
import { BiEdit } from 'react-icons/bi';
import axios from "axios"

export default function ChatHeader({handleSearch,contact}) {
    const [item,setItem]=useState(null);
    const handleChange=(e)=>{
        setItem(e.target.value);
        handleSearch(item,contact);
    };

    const handleLogOut = () => {
        localStorage.removeItem("Chat-app-User");
        window.location.href = "/login";
    };

    
    
    return (
        <div className={chatHeaderStyle.chatHeaderContainer}>
            <div className={chatHeaderStyle.chatHeaderSection}>
                <h1>Chat</h1>
                <div className={chatHeaderStyle.chatHeaderIcons}>
                    <BiEdit className={chatHeaderStyle.chatHeaderEdit} />
                    <BsFilterRight />
                    <IoMdLogOut onClick={handleLogOut}/>
                </div>
            </div>

            <div className={chatHeaderStyle.chatHeaderSearchBox}>
                <input className={chatHeaderStyle.chatHeaderUserBox} type="text" placeholder='Start or search a new chat' onChange={handleChange}/>
            </div>
        </div>
    )
}
