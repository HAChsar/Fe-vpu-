import React from 'react'
import './login.css';
import logo from "../vpu(wt).png";
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import Image from '../Profiling-amico.png';
const Login = () =>  {
  const navigate=useNavigate()
  return (
    <div className='loginpage'>
       <div className='logoin'>
  <img onClick={() => navigate('/')} src={logo} alt="React Logo" />
  </div><br></br><br></br><br></br>
    <div className='box1'>   
<div className='flx'>
  
  <div className="form">

  <title>Form Validation</title>
  <p><l>Sign in to VprepU</l></p>
  <form className="signup-form">
    <input type="email" id="email" placeholder="Enter your email" required="" />
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      required=""
    />
    <div className="lbt">
    <button type='submit'onClick={() => navigate('/')}>Sign in</button>
    </div>
    
  </form><br></br>
   <p onClick={() => navigate('/register')}> New to VprepU ?<i>Register</i></p>
   <br></br><br></br>
  </div>
  <div className="ig1">
  <img src={Image} width={400} height={250} alt="img"/>
  </div>
  </div>   
 </div> 
 </div>   
  );
}
export default Login;



