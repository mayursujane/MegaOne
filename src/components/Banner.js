import React from "react";
import Banner1 from './banner-1.jpg'
import Banner2 from './banner-2.png'
import Banner3 from './banner-3.png'
import "./Banner.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Feature from "./Feature";
export default function Banner()
{


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(
      <div className="mo_banner_wrap">
            <Slider {...settings}>
                <div>
                  <img src={Banner1} alt="Slide 1" />
                </div>
                <div>
                  <img src={Banner2} alt="Slide 2" />
                </div>
                <div>
                  <img src={Banner3} alt="Slide 2" />
                </div>
            </Slider>
      </div>
    );
}

