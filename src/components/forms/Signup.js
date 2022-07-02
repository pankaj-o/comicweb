import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Signup() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  return (
    <>
      <div className="main">
        <form className=" signupform" action="">
          <h2>Create Account</h2>
          <div className="field">
            <input type="text" placeholder="Username" required 
            value='name' onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="field">
            <input type="email" placeholder=" E-mail Address" required value='email' onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          
          <div className="field">
            <input type="password" placeholder="Password" required value='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div className="field">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="signupdiv">
            <button className="signup">REGISTER</button>
          </div>

          <p>If you have already an account, <Link to="/signin">login here.</Link></p>
          
        </form>
      </div>
    </>
  );
}
