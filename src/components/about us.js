import React from "react";
import "./about us.css"; // Importing the stylesheet for styling
import img1 from './jeet.jpg';
import img2 from './Pavani_phott.jpg';
import img3 from  './harsha_photo.jpg';
import img4 from './vinay_photo.jpg';
import { useNavigate } from "react-router-dom";

import logo from "../vpu(wt).png";
const AboutUs = () => {
  const navigate=useNavigate();
  return (
    <div className="about-us">
           <div className='logoin' style={{position:"fixed"}}>
  <img onClick={() => navigate('/')} src={logo} alt="React Logo" /><br></br><br></br>
  </div>
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are dedicated to providing the best
          services to our customers. Our team is passionate about innovation,
          excellence, and creating value.
        </p>
        <p>
          Founded in 2024, our mission is to make a positive impact in the
          industry by delivering high-quality solutions tailored to the needs of
          our customers.
        </p>
      </header>
      <section className="team-section">
        <h1>Our Team</h1>
        <div className="team-members">
          <div className="team-member">
            <img src={img1} alt="member" width={100}/>
            
            <p>PRASENJIT<br></br>Frontend/Database</p>
          </div>
          <div className="team-member">
          <img src={img2} alt="member" width={100}/>
          <a href="https://portfolio-two-drab-31.vercel.app/" target="blank"> <p>PAVANI<br></br>Backend Developer</p></a>

            
            </div>
            <div className="team-member">
            <img src={img3} alt="team_member" width={150} height={216}/>
            
            <a href="https://harshaportfolio-two.vercel.app/" target="blank"><p>HARSHA<br></br>Frontend Developer</p></a>
            </div>
            <div className="team-member">
            <img src={img4} alt="team-member" width={150} height={216}/>
                <h2></h2>
            <p>VINAY<br></br>Frontend developer</p>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default AboutUs;
