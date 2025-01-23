import React from 'react'
import liveChatContentstyle from "./liveChatContent.module.css"
export default function LiveChatReceiver({ chat }) {
  return (
    <div className={liveChatContentstyle.liveChatContentReceiverContainer}>
      <div className={liveChatContentstyle.liveChatContentReceiver}>
      <p>{chat.message || "No message available"}</p>

      </div>
    </div>
  )
}
