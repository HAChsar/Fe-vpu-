import React from "react";
import Navbar from './navbar';
import Footer from "./footer";
import "./application.css";
import { useNavigate } from "react-router-dom";


import Footer1 from "./footer(home)";
const Application = () =>
{
    const navigate=useNavigate()
    return(
    <>
     <div>
    <Navbar/>
    </div>
    <br></br><br></br><br></br><br></br>
    <div className="appbox">
        <div className="appb1">
        <p><em>"Welcome!<br></br>Start building your resume with AI assistance."</em></p>
        <div className="bt1">
        <button type='submit' onClick={()=>navigate("/resume")}><em>Start Building</em></button>
        </div>
        </div>  
    </div>

  
    <Footer1/>
   
    </>
   );
};
export default Application;