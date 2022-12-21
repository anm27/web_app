import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  adaptiveHeight: true,
  arrows: false,
};

const Slides = () => {
  return (
    <div className="mt-4 pt-2 p-0">
      <Slider {...settings}>
        <div className="relative text-center">
          <img
            src="https://www.thebalancemoney.com/thmb/hadTedIePLFb_eUh3jgeQo37WpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_woman-writing-laptop_476082-57ab432d3df78cf459975331.jpg"
            alt="Blog 1"
            className="h-128 w-full object-cover"
            style={{ opacity: 0.9 }}
          />
          <h1 className="absolute inset-x-0 top-4 text-white lg:text-6xl md:text-3xl sm:text-3xl xs:text-2xl font-bold">
            Enhance your business with rich content
          </h1>
        </div>
        <div className="relative text-center">
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1035462384_395932.jpg"
            alt="Blog 1"
            className="h-128 w-full object-cover"
          />
          <h1 className="absolute inset-x-0 top-4 text-white lg:text-6xl md:text-3xl sm:text-3xl xs:text-2xl font-bold">
            Enhance your business with rich content
          </h1>
        </div>
        <div className="relative text-center">
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1035462384_395932.jpg"
            alt="Blog 1"
            className="h-128 w-full object-cover"
          />
          <h1 className="absolute inset-x-0 top-4 text-white lg:text-6xl md:text-3xl sm:text-3xl xs:text-2xl font-bold">
            Enhance your business with rich content
          </h1>
        </div>
        <div className="relative text-center">
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1035462384_395932.jpg"
            alt="Blog 1"
            className="h-128 w-full object-cover"
          />
          <h1 className="absolute inset-x-0 top-4 text-white lg:text-6xl md:text-3xl sm:text-3xl xs:text-2xl font-bold">
            Enhance your business with rich content
          </h1>
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
