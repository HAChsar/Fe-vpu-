import React ,{useEffect} from "react";
import './navbar.css';
import logo from "../vpu.png"
import loginImage from '../person.png';
import { useNavigate } from "react-router-dom";
const Navbar = ({ name }) =>{

  const navigate=useNavigate()
  useEffect(() => {
    const display = document.getElementById('displaynav');
   
    if (display) {
      display.value ='HARSHAVARDHAN';
    }
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img onClick={() => navigate('/')} src={logo} alt="React Logo"  />
      </div>
      <div className="interview">
        <p onClick={()=>navigate('/interview')}>Interview</p>
      </div>
      <div className="resume">
        <p onClick={() => navigate('/resume')}>Resume-Building</p>
      </div>
      
      <div onClick={() => navigate('/login') }className="login">
      <img  src={loginImage} alt="loginlogo" width={50} height={50}/>
      <input id='displaynav' readOnly/>
      </div>
    </div>  
  );
};

export default Navbar
