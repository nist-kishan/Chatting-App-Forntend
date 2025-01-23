import React from 'react'
import realChatStyle from "./realChat.module.css"
import LiveChat from "../components/LiveChat"

export default function RealChat({currentUser}) {
    return (
        <div className={realChatStyle.realChatContainer}>
            <div className={realChatStyle.realChatInnerContainer}>
                <LiveChat currentUser={currentUser}/>
            </div>
        </div>
    )
}
