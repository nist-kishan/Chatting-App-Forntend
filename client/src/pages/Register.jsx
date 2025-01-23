import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerStyle from './Register.module.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { registerRoute } from '../utils/APIRoutes';

export default function Register() {
    const navigate = useNavigate();
    const [regdata, regsetData] = useState({
        fullname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            try {
                const { fullname, username, email, password } = regdata;
                const { data } = await axios.post(registerRoute, {
                    fullname,
                    username,
                    email,
                    password,
                });

                if (data.status === false) {
                    toast.error(data.msg, toastOptions)
                }
                else if (data.status === true) {
                    localStorage.setItem("Chat-app-User", JSON.stringify(data.user))
                    navigate('/dp')
                }
            } catch (error) {
                toast.error("Registration failed. Please try again later.", toastOptions);
            }
        };
    }


    const handleValidation = () => {
        const { password, confirmPassword, username } = regdata;


        if (password !== confirmPassword) {
            toast.error('Password and Confirm Password should be same', toastOptions);
            return false;
        }
        else if (username.length < 4) {
            toast.error('Username should be greater than 8 characters', toastOptions);
            return false;
        }
        else if (password.length <= 8) {
            toast.error('Password should be greater than 8 charaters', toastOptions)
            return false;
        }
        return true;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        regsetData((prevData) => ({
            ...prevData,
            [name]: value

        }));
    };

    useEffect(() => {
        if (localStorage.getItem("Chat-app-User")) {
            navigate('/dp')
        }
    }, []);

    return (

        <>
            <div className={registerStyle.containerBackground}></div>
            <div className={registerStyle.registerStylesContainer}>
                <form onSubmit={(event) => handleSubmit(event)} className={registerStyle.registerStylesForm}>
                    <div className={registerStyle.registerStylesHeading}>Registration form</div>

                    <label htmlFor="fullname">Full Name</label>
                    <input className={registerStyle.registerInputBox} type="text" name="fullname" placeholder="Enter your Name" value={regdata.fullname} onChange={(e) => handleChange(e)} required />

                    <label htmlFor="username">Username</label>
                    <input className={registerStyle.registerInputBox} type="text" name="username" placeholder="Enter your Name" value={regdata.username} onChange={(e) => handleChange(e)} required />

                    <label htmlFor="email">Email</label>
                    <input className={registerStyle.registerInputBox} type="email" name="email" placeholder="Enter your Email" value={regdata.email} onChange={(e) => handleChange(e)} required />

                    <label htmlFor="password">Password</label>
                    <input className={registerStyle.registerInputBox} type="password" name="password" placeholder="Enter your Password" value={regdata.password} onChange={(e) => handleChange(e)} required />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className={registerStyle.registerInputBox} type="password" name="confirmPassword" placeholder="Confirm your Password" value={regdata.confirmPassword} onChange={(e) => handleChange(e)} required />

                    <button type="submit">Register</button>

                    <div className={registerStyle.message}>
                        <em>If you already have an account, click on login</em>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
