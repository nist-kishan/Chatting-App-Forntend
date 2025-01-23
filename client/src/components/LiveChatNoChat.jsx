import React from 'react'
import liveChatNoChatStyle from "./liveChatNoChat.module.css"

export default function LiveChatNoChat() {
  return (
    <div className={liveChatNoChatStyle.liveChatNoChatContainer}>
      <div className={liveChatNoChatStyle.liveChatNoChatInnerContainer}>
      <img src="./image/AppIcon.png" alt="App-Logo" className={liveChatNoChatStyle.liveChatNoChatIcon}/>
        <h1>Please Click on any Chat Logs</h1>
        <em className={liveChatNoChatStyle.liveChatNoChatem}>You can connect with new people through his/her username/email</em><br />
        <em className={liveChatNoChatStyle.liveChatNoChatem}>Also you can chat with people</em>
      </div>
    </div>
  )
}
