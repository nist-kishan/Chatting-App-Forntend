import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { loginRouter } from '../utils/APIRoutes';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const { username, password } = data;
        const response = await axios.post(loginRouter, { username, password });
        const values = response.data;

        if (values.status === false) {
          toast.error(values.msg, toastOptions)
        }
        else if (values.status === true) {
          localStorage.setItem("Chat-app-User", JSON.stringify(values.user))
          navigate('/')
        }
      } catch (error) {
        toast.error("Login failed. Please try again later.", toastOptions);
      }
    }

  }
  const validation = () => {
    const { username, password } = data;
    if (username === '') {
      toast.error("Enter your email and password", toastOptions);
      return false;
    }
    else if (password === "") {
      toast.error('Please enter your password', toastOptions)
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("Chat-app-User")) {
      navigate('/')
    }
  },[])
  return (
    <>
      <div className={styles.containerBackground}></div>

      <div className={styles.container}>
        <form onSubmit={handleLogin}>
          <div className={styles.heading}>Login</div>

          <div className={styles.innerContainer}>
            <label htmlFor="username">Username/Email</label>
            <input type="text" name="username" placeholder="Enter your Username/Email" value={data.username} onChange={handleChange} required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your Password" value={data.password} onChange={handleChange} required />
          </div>

          <button type="submit">Login</button>

          <div className={styles.message}>
            <em>If you don't have an account, click on Register</em>
            <Link to="/register">
              <button type="button">Register</button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
