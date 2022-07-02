import React,{useState} from 'react'
import "./loginform.css"
import { Routes, Route, Link } from "react-router-dom";

export default function Loginform() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [allentry, setallentry] = useState([]);

    const submitted=function(de){
        de.preventDefault()   
        const newentry={email:email,password:password}
      
        setallentry([...allentry,newentry])
    }
  return (
    <>
  
    <div className='formdiv' >
      
   <form  className="formd" action="" onSubmit={submitted}>
    <h1>Welcome</h1>

    <div className='emaildiv'>
      
        <input  required type="email" name='email' className='emailpass' value={email} onChange={(e)=>setemail(e.target.value)} placeholder="  Username" autoComplete='off' />
    </div>
    <div className='passworddiv'>
       
        <input required type="password" name='password' className='emailpass' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="  Password" autoComplete='off'/>
    </div>
    <div className="button-container">
         
    <button type='submit'className='signin'>Sign-In</button>
       
    </div>

    <p>If you don't have any  account, <Link to="/signup">Sign up here.</Link></p>
    
   </form>
    </div>
    </>
  )
}
