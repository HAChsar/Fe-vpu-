import React ,{useEffect} from "react";
import './navbar.css';
import logo from "../vpu.png"
import loginImage from '../login.png';
import { useNavigate } from "react-router-dom";
const Navbar = ({ name }) =>{

  const navigate=useNavigate()
  useEffect(() => {
    const display = document.getElementById('displaynav');
    if (display) {
      display.value ="Harsha";
    }
  }, []);
  return (
    <div className="header">
      <div className="logo">
        <img onClick={() => navigate('/')} src={logo} alt="React Logo" />
      </div>
      <div className="interview">
        <p onClick={()=>navigate('/interview')}>Interview</p>
      </div>
      <div className="resume">
        <p onClick={() => navigate('/resume')}>Resume-Building</p>
      </div>
      
      <div className="login">
      <input id='displaynav'readOnly/>
      <img onClick={() => navigate('/login')} src={loginImage} alt="loginlogo" />
      </div>
      
    
    </div> 

     
  );
};

export default Navbar
