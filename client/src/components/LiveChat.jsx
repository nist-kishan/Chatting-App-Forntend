import liveChatStyle from "./liveChat.module.css"
import LiveChatHeader from './LiveChatHeader'
import LiveChatFooter from './LiveChatFooter'
import LiveChatReceiver from './LiveChatReceiver'
import LiveChatSender from './LiveChatSender'
import { chatTest } from '../data/chatTest'

export default function LiveChat({currentUser}) {
  return (
    <div className={liveChatStyle.liveChatContainer}>
      <div className={liveChatStyle.liveChatHeader}>
        <LiveChatHeader currentUser={currentUser}/>
      </div>

      <div className={liveChatStyle.liveChatContent}>
        {
          chatTest.map((chats,index) => {
            return chats.sender === "Alice" ?
              (<LiveChatReceiver chat={chats} key={index} />) :
              (<LiveChatSender chat={chats} key={index} />)
          })
        }
      </div>

      <div className={liveChatStyle.liveChatFooter}>
        <LiveChatFooter />
      </div>
    </div>
  )
}
