import { FaUser } from "react-icons/fa";
//import { ToastContainer, Toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";
import Link from "next/link";
// import Layout from "../../components/Layout";
import styles from "../../styles/AuthForm.module.css";
// import FadeUp from "../../animations/FadeUp";
// import { Bounce } from "react-awesome-reveal";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { useRouter } from "next/router";

// import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const router = useRouter();
const emailRef = useRef(null);
const passwordRef = useRef(null)
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });
  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);
  const handelePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3000/api/devices/auth/login', {
          method: "POST",
          body:JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value
          }),
          headers: {
            "Content-Type": "application/json"
          }

        });
         const data = await response.json()
        router.push('/')
       

    }
  

  return (
    
       
        <div className={styles.auth}>
          <h1>
            <FaUser /> Log In
          </h1>
       
          <form onSubmit={handleLogin}>
        
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  
                />
              
              </div>
           
              <div>
                <label htmlFor="password">Employee ID</label>
                <input
                  type={passwordEye === false ? "password" : "text"}
                  id="password"
                 ref={passwordRef}
                  className="w-full rounded-lg"
                />
               
              </div>
          
              <input type="submit" value="Login" className="btn" />
          
          </form>

          <p>
            <Link href="/account/register">Register</Link>
          </p>
        </div>
    
  );
}
