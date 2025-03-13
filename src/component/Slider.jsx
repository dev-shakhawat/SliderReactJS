import React, { useEffect, useRef, useState } from "react";

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
  
console.log(currentSlider);


  return (
    <div className="relative mt-[100px] ">
      <div className="relative max-w-[1000px] overflow-hidden m-auto   ">
      <div ref={SliderBoxRef} className="slides flex transition-[.4s] h-[500px]" style={{ transform: `translateX(-${currentSlider * 100}%)` , transition: "1s"}}>
          {/* slider items */}
          <div className="item min-w-[100%] h-full   ">
            <img src="images/one.jpg" alt="one" />
          </div>
          <div className="item grid place-items-center min-w-[100%] h-full  ">
            <h2>I will become a world famous hacker, insha-Allah.</h2>
          </div>
          <div className="item min-w-[100%] h-full ">
            <img src="images/two.jpg" alt="two" />
          </div>
          <div className="item min-w-[100%] h-full ">
            <img src="images/three.jpg" alt="three" />
          </div>
        </div>
      </div>
      {/* slider arrows */}
      <button
      onClick={()=> UpdateSlider(currentSlider - 1)}
        type="button"
        className="prevArrow absolute left-[-7%]  cursor-pointer w-[50px] h-[50px] bg-[#ffa725] text-[#f1f1f1] rounded-[50%] border-[none] top-[45%]"
      >
        ❮
      </button>
      <button
      onClick={()=> UpdateSlider(currentSlider + 1)}
        type="button"
        className="nextArrow absolute right-[-7%] cursor-pointer w-[50px] h-[50px] bg-[#ffa725] text-[#f1f1f1] rounded-[50%] border-[none] top-[45%]"
      >
        ❯
      </button>

      {/* slider dots */}
      <div className="dots p-[10px] flex justify-center gap-[10px]   ">
        {slideItem.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer w-2.5 h-2.5  ${currentSlider == index ? "bg-yellow-500" : "bg-black"} rounded-[50%]`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
