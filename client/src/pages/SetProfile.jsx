import React, { useEffect, useState } from 'react';
import setProfileStyle from './setProfile.module.css';
import { avatarImages } from '../../public/js/avatarImages';
import axios from 'axios';
import { dpRouter } from '../utils/APIRoutes';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SetProfile() {
    const [profile, setProfile] = useState('image/Avatar/boy_01.jpeg');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    const toastOptions = {
        position: 'bottom-right',
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
    };

    const handledSubmit = async () => {
        try {
            if (selectedIndex === null) {
                toast.error('Please select an avatar', toastOptions);
                return;
            }

            // const pix = { profile };
            const user = JSON.parse(localStorage.getItem('Chat-app-User'));
            if (!user) {
                navigate('/login');
                return;
            }

            const { data } = await axios.post(`${dpRouter}/${user._id}`, {avatarImage: profile,});
            
            if (data.isSet) {
                user.isAvatarImageSet = true;
                user.avatarImage = { profile };
                localStorage.setItem('Chat-app-User', JSON.stringify(user));
                navigate('/');
            } else {
                toast.error('Error setting avatar. Please try again', toastOptions);
            }
        } catch (error) {
            console.error('Error setting avatar:', error);
            toast.error('An unexpected error occurred. Please try again.', toastOptions);
        }
    };

    const handleProfile = (src, index) => {
        setProfile(src);
        setSelectedIndex(index);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('Chat-app-User'));
        if (user && user.avatarImage) {
            setProfile(user.avatarImage.profile);
            const index = avatarImages.findIndex(image => image === user.avatarImage.profile);
            if (index !== -1) {
                setSelectedIndex(index);
            }
        } else {
            setProfile('/image/Avatar/boy_01.jpeg');
        }
    }, []);

    // useEffect(()=>{
    //     if(localStorage.getItem("Chat-app-User")){
    //         navigate('/login');
    //     }
    // },[])

    return (
        <div className={setProfileStyle.setProfileContainer}>
            <div className={setProfileStyle.setProfileHeading}>
                <h1>Choose your Profile</h1>
            </div>
            <div className={setProfileStyle.setProfileSetProfile}>
                <img className={setProfileStyle.setProfileProfileImage} src={profile} alt="Profile Image" />
            </div>
            <div className={setProfileStyle.setProfileAvatarContainer}>
                <div className={setProfileStyle.setProfileInnerContainer}>
                    {avatarImages.map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            alt="Avatar Image"
                            className={`${setProfileStyle.setProfileSetProfileImage} ${selectedIndex === index ? setProfileStyle.setProfileSetProfileImageborder : ''}`}
                            onClick={() => handleProfile(image, index)}
                        />
                    ))}
                </div>
                <div className={setProfileStyle.setProfileButtonContainer}>
                    <button className={setProfileStyle.setProfileBtnSelect} onClick={handledSubmit}>Select as Profile Picture</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
