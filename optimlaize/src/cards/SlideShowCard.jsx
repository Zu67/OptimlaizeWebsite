import React, { useState } from "react";

const SlideShowCard = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-1/2 overflow-hidden mx-20 rounded-[20px] bg-grey shadow hover:shadow-2lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="min-w-full p-20 " key={index}>
            <h2 className="text-2xl mb-4">{slide.title}</h2>
            <p>{slide.introduction}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <button className="bg-gray-800 text-white p-2" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="bg-gray-800 text-white p-2" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SlideShowCard;
