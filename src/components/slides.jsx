import React, { useState, useEffect } from "react";
import imageR1 from "./resumeimg1.jpeg";
import imageR2 from "./resumeimg2(op).jpeg";
import imageR3 from "./resumeimg3(op).jpeg";


const im = [
  { id: 1, image: imageR1 },
  { id: 2, image: imageR2 },
  { id: 3, image: imageR3 },
];

const Carousel = () => {
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

  return (
    <div className="carousel-container">
      <div className="carousel">
        {im.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <img src={slide.image} alt={`Slide ${index + 1}`} className="d-block w-100" width={600} height={200}/>
            )}
          </div>
        ))}
      </div>
      <button className="btn btn-primary" onClick={goToPrevSlide}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
