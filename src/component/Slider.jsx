import React, { useEffect, useRef, useState } from "react";
import "./slider.css"

const Slider = () => {
  const SliderBoxRef = useRef(null);
  const [slideItem, setSlideItem] = useState([]);
  const [countSlide, setCountSlide] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    let slideitemarr = Array.from(SliderBoxRef.current.children)
    setSlideItem(slideitemarr);
    setCountSlide(slideitemarr.length)
  }, []);

  // Update Slider
  const UpdateSlider = (index) => {
    if(index >= countSlide) setCurrentSlider(0);
    else if(index < 0) setCurrentSlider(countSlide -1) ;
    else setCurrentSlider(index);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      UpdateSlider(currentSlider + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlider]);

  return (
    <div className="relative mt-8 md:mt-16 lg:mt-[100px] px-4 sm:px-6 lg:px-0">
      <div className="relative max-w-full lg:max-w-[1000px] overflow-hidden m-auto">
        <div 
          ref={SliderBoxRef} 
          className="slides flex transition-[.4s] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          style={{ 
            transform: `translateX(-${currentSlider * 100}%)`, 
            transition: "0.5s ease-in-out" 
          }}
        >
          {/* slider items */}
          <div className="item min-w-[100%] h-full relative">
            <img 
              src="images/one.jpg" 
              alt="one" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                Beautiful Landscape
              </h2>
            </div>
          </div>
          
          <div className="item grid place-items-center min-w-[100%] h-full bg-gradient-to-r from-blue-500 to-purple-600">
            <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center px-4 sm:px-8">
              I will become a world famous hacker, insha-Allah.
            </h2>
          </div>
          
          <div className="item min-w-[100%] h-full relative">
            <img 
              src="images/two.jpg" 
              alt="two" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                Amazing Nature
              </h2>
            </div>
          </div>
          
          <div className="item min-w-[100%] h-full relative">
            <img 
              src="images/three.jpg" 
              alt="three" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center px-4">
                Wonderful Scenery
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* slider arrows */}
      <button
        onClick={() => UpdateSlider(currentSlider - 1)}
        type="button"
        className="prevArrow absolute left-2 sm:left-4 md:left-[-7%] cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#ffa725] hover:bg-[#e6951f] text-white rounded-full border-none top-1/2 transform -translate-y-1/2 flex items-center justify-center transition-all duration-200 shadow-lg"
      >
        <span className="text-sm sm:text-base md:text-lg">❮</span>
      </button>
      
      <button
        onClick={() => UpdateSlider(currentSlider + 1)}
        type="button"
        className="nextArrow absolute right-2 sm:right-4 md:right-[-7%] cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#ffa725] hover:bg-[#e6951f] text-white rounded-full border-none top-1/2 transform -translate-y-1/2 flex items-center justify-center transition-all duration-200 shadow-lg"
      >
        <span className="text-sm sm:text-base md:text-lg">❯</span>
      </button>

      {/* slider dots */}
      <div className="dots p-3 sm:p-4 flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {slideItem.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlider(index)}
            className={`cursor-pointer w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 transition-all duration-300 ${
              currentSlider === index 
                ? "bg-yellow-500 scale-125" 
                : "bg-gray-400 hover:bg-gray-600"
            } rounded-full`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default Slider;
