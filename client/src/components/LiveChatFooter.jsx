import React, { useState } from 'react'
import liveChatFooterStyle from './liveChatFooter.module.css'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoAttachSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";

export default function LiveChatFooter() {
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <div className={liveChatFooterStyle.liveChatFooterContainer}>

            <div className={`${liveChatFooterStyle.liveChatFooterEmoj} ${liveChatFooterStyle.liveChatFooterIcon}`}>
                <MdOutlineEmojiEmotions />
            </div>

            <div className={`${liveChatFooterStyle.liveChatFooterAttach} ${liveChatFooterStyle.liveChatFooterIcon}`}>
                <IoAttachSharp />
            </div>

            <textarea className={liveChatFooterStyle.liveChatFooterTextBox} value={message} onChange={handleChange} placeholder='Type a message' rows="1"></textarea>
            
            {message.trim().length === 0 ?
                (<div className={`${liveChatFooterStyle.liveChatFooterSendbtn} ${liveChatFooterStyle.liveChatFooterIcon}`}><FaMicrophone /></div>) :
                (<div className={`${liveChatFooterStyle.liveChatFooterSendbtn} ${liveChatFooterStyle.liveChatFooterIcon}`}><IoSend /></div>)
            }
        </div>
    )
}
