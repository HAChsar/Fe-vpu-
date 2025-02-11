import React, { useState } from "react";
import imageR1 from "./resumeimg1.jpeg";
import imageR2 from "./resumeimg2(op).jpeg";
import imageR3 from "./resumeimg3(op).jpeg";

const im=
[
    {id:1,image:imageR1},{id:2,image:imageR2},{id:3,image:imageR3},
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % im.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + items.length) % im.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel">
       <div>
      {im?.map((im, index) => (
        <div key={index}>
        <img src={im.image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      </div>
      <button onClick={goToPrevSlide}>Previous</button>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;