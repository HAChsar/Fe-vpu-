import React from "react";
import Navbar from './navbar';
import Footer from "./footer";
import "./application.css";
import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from "react";
import imageR1 from "./resumeimg1.jpeg";
import imageR2 from "./resumeimg2.png";
import imageR3 from "./resumeimg2(op).jpeg";
import imageR4 from "./resumeimg3.png";
import imageR5 from "./resumeimg3(op).jpeg";

import Footer1 from "./footer(home)";
const Application = () =>
{
    const navigate=useNavigate();
    const im = [
      { id: 1, image: imageR1 },
      { id: 2, image: imageR2 },
      { id: 3, image: imageR3 },
      { id :4, image: imageR4},
      { id :5, image: imageR5},
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          goToNextSlide();
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval);
      }, [currentIndex]);
    
      const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % im.length;
        setCurrentIndex(nextIndex);
      };
    
      const goToPrevSlide = () => {
        const prevIndex = (currentIndex - 1 + im.length) % im.length;
        setCurrentIndex(prevIndex);
      };
    return(
    <>
     <div>
    <Navbar/>
    </div>
    <br></br><br></br><br></br><br></br>
    
    <div className="resappli">
    <div className="appbox">
        <div className="appb1">
        <p><em>"Welcome!<br></br>Start building your resume with AI assistance."</em></p>
        <div className="bt1">
        <button type='submit' onClick={()=>navigate("/resume")}><em>Start Building</em></button>
        </div>
        </div>  
    </div><br></br>
    <div className="carousel-container">
        
      <div className="carousel">
        {im.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <img src={slide.image} alt={`Slide ${index + 1}`} className="d-block w-100" width={600} height={295}/>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {im.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
           
          ></span>
        ))}
      </div>
    </div>
</div>
    <Footer1/>
   
    </>
   );
};
export default Application;