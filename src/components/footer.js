import React from 'react';
import './footer.css';
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate=useNavigate()
    return (
      <footer>
        <div className="footer1">
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={ () => navigate('/aboutus')}>About us</p>
        <p>Feedback</p>
        </div>
        <hr/>
        <p>© Copyright 2025 VprepU-AI Quadminds Pvt Ltd. All Rights Reserved.</p>
      </footer>
    );
  }