import React, { useState } from 'react'
import contactCardStyle from "./contactCard.module.css"
export default function ContactCard({ contact,index,currentSelected,onClick}) {
    
    const { name, profile_picture, timestamp, message } = contact;
    
    return (
        <>
            <div className={`${contactCardStyle.contactCardContainer} ${index===currentSelected?contactCardStyle.contactNormal : contactCardStyle.contactCardGradient}`}
            onClick={onClick}>
                <div className={contactCardStyle.contactCardImage}>
                    <img src={profile_picture} alt="dp" />
                </div>
                <div className={contactCardStyle.contactCardInfo}>
                    <p className={contactCardStyle.contactCardName}>{name}</p>
                    <p className={contactCardStyle.contactCardMessage}>{message}</p>
                </div>
                <div className={contactCardStyle.contactCardTimestamp}>
                    <p>{timestamp}</p>
                </div>
            </div>
        </>
    )
}
