import React from 'react'
import liveChatHeaderStyle from "./liveChatHeader.module.css"
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function LiveChatHeader({selectedContact,currentUser}) {
    const {name, profile_picture, timestamp}=currentUser;
    return (
        <div className={liveChatHeaderStyle.liveChatHeaderContainer}>
            <div className={liveChatHeaderStyle.liveChatHeaderInnerContainer}>

                <div className={liveChatHeaderStyle.liveChatHeaderImage}>
                    <img src={profile_picture} alt="dp" />
                </div>

                <div className={liveChatHeaderStyle.liveChatHeaderInfo}>
                    <p className={liveChatHeaderStyle.liveChatHeaderName}>{name}</p>
                    <em>Last seen {timestamp}</em>
                </div>

            </div>

            <div className={liveChatHeaderStyle.liveChatHeaderIcons}>

                <div className={liveChatHeaderStyle.liveChatHeaderVideo}>
                    <FaVideo className={`${liveChatHeaderStyle.liveChatHeaderIcon}`} />
                </div>

                <div className={liveChatHeaderStyle.liveChatHeaderCall}>
                    <IoCall className={`${liveChatHeaderStyle.liveChatHeaderIcon}`} />
                </div>

                <div className={liveChatHeaderStyle.liveChatHeaderSearch}>
                    <IoSearch className={`${liveChatHeaderStyle.liveChatHeaderIcon}`} />
                </div>

            </div>
        </div>
    )
}
