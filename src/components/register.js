import React, { useState } from 'react'
import './register.css';
import logo from "../vpu(wt).png";
import { useNavigate } from "react-router-dom";
import Footer from './footer';
import axios from "axios";

const Reg= () =>  {
  const navigate=useNavigate()
  const [firstName,setFirstname]=useState("");
  const [lastName,setLastname]=useState("");
  const [dob,setDate]=useState("");
  const [gender,setGender]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phoneNumber,setPhonenumber]=useState("");
  const [role,setRole]=useState("");

  async function save(event)
  {
    event.preventDefault();
    try{
      const response=await axios.post("http://localhost:8080/home/register", {
        firstName:firstName,
        lastName:lastName,
        dob:dob,
        gender:gender,
        email:email,
        password:password,
        phoneNumber:phoneNumber,
        role:role,
      });
      return response
      alert("Registration Succesful");
    }catch(err)
    {
      alert(err);
    }
  }
 
  return (
    <div className='page'>
       <div className='logoin'>
  <img onClick={() => navigate('/')} src={logo} alt="React Logo" />
  </div><br></br><br></br><br></br>
    <div className='box'>   
  <title>Register</title>
  <div className="sign">
  <p><l>Register to VprepU.</l></p>
  <p onClick={() => navigate('/login')}><u>Have an account?</u></p>
  </div>
  <div className="sp">
  <form className="signup-form">
  <p style={{ display: 'inline' }}>First Name</p>
  <p style={{ display: 'inline', color: 'red' }}>*</p>
    <input type="firstname" id="name" placeholder="enter your first name" required=""
     value={firstName} onChange={(event)=> {setFirstname(event.target.value);}}/>

    <p style={{ display: 'inline' }}>Last Name</p>
    <p style={{ display: 'inline', color: 'red' }}>*</p>
    <input type="Lastname" id="name" placeholder="enter your Last name" required=""
    value={lastName} onChange={(event)=> {setLastname(event.target.value);}} />

    <p style={{ display: 'inline' }}>DOB</p>
  <p style={{ display: 'inline', color: 'red' }}>*</p>
    <input type="Date" id="date" placeholder="enter your date of birth" required="" 
    value={dob} onChange={(event) =>{setDate(event.target.value);}}/>

    
    <p style={{ display: 'inline' }}>Gender</p>
    <p style={{ display: 'inline', color: 'red' }}>*</p> <select id="gender" name="gender"
    value={gender} onChange={(event) =>{setGender(event.target.value);}}> 
    <option value="Male">Male</option> <option value="Female">Female</option>
    <option value="others">Others</option> 
    </select>
    <br></br><br></br>
  </form>
  
  <form className="signup-form1">
  <p style={{ display: 'inline' }}>Email</p>
  <p style={{ display: 'inline', color: 'red' }}>*</p>
    <input type="email" id="email" placeholder="enter your mail id"  required=""
    value={email} onChange={(event)=>{setEmail(event.target.value);}}/>

    <p style={{ display: 'inline' }}>Password</p>
    <p style={{ display: 'inline', color: 'red' }}>*</p>
    <input type="password" id="password" placeholder="enter your password" required=""
    value={password} onChange={(event)=>{setPassword(event.target.value);}} />

    <p style={{ display: 'inline' }}>Mobile no</p>
  <p style={{ display: 'inline', color: 'red' }}>*</p>
    <input type="Phonenumber" id="number" placeholder="enter your Mobile no" required=""
    value={phoneNumber} onChange={(event)=>{setPhonenumber(event.target.value);}}/>

  <p style={{ display: 'inline' }}>Role</p>
  <p style={{ display: 'inline', color: 'red' }}>*</p>
   <select id="Student" name="Student"
    value={role} onChange={(event)=>{setRole(event.target.value);}}> 
    <option value="Student">Student</option> 
    <option value="Fresher">Fresher</option> 
    <option value="Experienced">Experienced</option></select>
    <br></br><br></br>
  </form>
  </div>
  <div className='lbt1' style={{bottom:0}}>
    <button type='submit'onClick={save}>Continue</button>
    </div>
 </div> 

 </div>   
  );
}
export default Reg;



