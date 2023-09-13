import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import bgIMG from '../../assets/bgIMG3.jpg';
import { meetTheTeam } from './data';

import "./Carousel.scss"

const Carousel = () => {
    const [defaultImage, setDefaultImage] = useState({});
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: bgIMG,
      }));
    };

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <div className="Team">
      <Slider {...settings}>
        {meetTheTeam.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-top">
              <img
                src={
                  defaultImage[item.name] === item.name
                    ? defaultImage.linkDefault
                    : item.img
                }
                alt={item.name}
                onError={handleErrorImage}
              />
              <h1>{item.name}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.position}</h3>
              <span className="description">{item.description}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;