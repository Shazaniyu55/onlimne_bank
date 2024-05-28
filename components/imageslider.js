import React, { useState } from 'react';

const images = [
  '/fewhite.jpeg',
  '/img1.jpeg',
  '/img2.jpeg',
  // Add more image paths here
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div className="md:grid grid-cols-2 gap-4 mt-8">


        <div>
            <h1 className="text-5xl font-bold text-blue-800 m-4 p-4">Blog posts that are interesting to you.</h1>
        </div>

    
    
  
    <div className="relative w-full max-w-lg ml-auto">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 outline-none border-none h-12 w-12 z-10 text-white flex cursor-pointer text-2xl bg-blue-900 items-center justify-center rounded-full shadow-md  hover:text-white"
      >
        <i className="fas fa-arrow-left"></i>
      </button>

      <div className="overflow-hidden">
        <ul className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <li key={index} className="flex-none w-full">
              <img className="w-full h-80 object-cover" src={image}  alt={`Slide ${index}`} />
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 outline-none border-none h-12 w-12 z-10 text-white flex cursor-pointer text-2xl bg-blue-900 items-center justify-center rounded-full shadow-md  hover:text-white"
      >
        <i className="fas fa-arrow-right"></i>
      </button>

      <div className="flex justify-center mt-4">
        <div className="w-1/2 h-1 bg-blue-200 relative">
          <div
            className="h-full bg-blue-900 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>

    </div>

    </>
  );
};

export default ImageSlider;
