import React, { useEffect, useState } from 'react'
import contactChatStyle from "./contactChat.module.css"
import ContactCard from './ContactCard'
import contactList from "../data/contactList.json"
import ChatHeader from './ChatHeader'


export default function ContactChat({handleCurrentUser}) {
  const [currentSelected, setCurrentSelected] = useState(null);
  
  const handleSearch=(item,contact)=>{
    item.toLowerCase().includes(contact.name.toLowerCase());
  }

  const handleSelectedUser = (contact, index) => {
    setCurrentSelected(index);
    handleCurrentUser(contact);
  }

  return (
    <>
      <div className={contactChatStyle.contactChatContainer}>
        <div className={contactChatStyle.contactChatFixed}>
          <ChatHeader handleSearch={handleSearch} contact={contactList}/>
        </div>
        <div className={contactChatStyle.contactChatScroll}>
          {
            contactList.map((contact, index) => (
              <ContactCard
                className={`${contactChatStyle.ContactCard}`}
                key={index} contact={contact} index={index} currentSelected={currentSelected}
                onClick={() => handleSelectedUser(contact, index)}
              />
            ))};
        </div>
      </div>
    </>
  )
}
