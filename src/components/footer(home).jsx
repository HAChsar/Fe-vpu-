import React from 'react';
import './footer.css';
import { useNavigate } from "react-router-dom";
export default function Footer1() {
  const navigate=useNavigate()
    return (
      <footer>
        <div className="footer1">
        <p onClick={ () => navigate('/aboutus')}>About us</p>
        <p onClick={()=> navigate('/feedback')}>Feedback</p>
        </div>
        <hr/>
        <p style={{padding:"10px"}}>© Copyright 2025 VprepU-AI Quadminds Pvt Ltd. All Rights Reserved.</p>
      </footer>
    );
  }