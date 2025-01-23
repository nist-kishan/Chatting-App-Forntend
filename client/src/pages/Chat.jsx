import React, { useEffect, useState } from 'react'
import chatStyle from './chat.module.css'
import RealChat from '../components/RealChat'
import ContactChat from '../components/ContactChat'
import LiveChatNoChat from '../components/LiveChatNoChat'
import {useNavigate} from 'react-router-dom'

export default function Chat() {
  const navigate=useNavigate();
  const [currentUser, setCurrentUser] = useState(
    {
      name: "",
      gender: "",
      timestamp: "",
      profile_picture: "",
      message: "",
    }
  );

  const handleCurrentUser=(contact)=>{
    setCurrentUser(contact)
  }

  useEffect(()=>{
    const isLogIn=()=>{
      const user=localStorage.getItem("Chat-app-User");
      if(!user){
        navigate('/login');
      }
      else{
        if(JSON.parse(user).avatarImage){
          navigate('/');
        }
        else{
          navigate('/dp');
        }
      }
    }
    isLogIn();
  },[navigate])

  return (
    <div className={chatStyle.chatContainer}>
      <div className={chatStyle.chatInnerContainer}>
        <div className={chatStyle.chatContact}><ContactChat handleCurrentUser={handleCurrentUser}/></div>
        <div className={chatStyle.chatLiveChat}>
        {currentUser.name!==""?(<RealChat currentUser={currentUser}/>):(<LiveChatNoChat/>)}</div>
      </div>
    </div>
  )
}
