import React from 'react'
import liveChatStyle from "./liveChatContent.module.css"
export default function LiveChatSender({ chat }) {
  return (
    <div className={liveChatStyle.liveChatContentSenderContainer}>
      <div className={liveChatStyle.liveChatContentSender}>
      <p>{ chat.message || "No message available"}</p>
      </div>
    </div>
  )
}
