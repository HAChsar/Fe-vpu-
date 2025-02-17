import React from 'react';
import Slider from 'react-slick';

const data = [
  { img: './resumeimg1.jpeg' },
  { img: './resumeimg2(op).jpeg' }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slides = () => {
  return (
    <div>
      <ul>
        {data.map((d, index) => (
          <li key={index}>
            <img src={d.img} alt="" width={500} height={300} />
          </li>
        ))}
      </ul>
      <Slider {...settings}>
        <div className='reimg'>
          {data.map((d, index) => (
            <img key={index} src={d.img} alt="" width={500} height={300} />
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
