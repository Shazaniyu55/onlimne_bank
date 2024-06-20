"use client";
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'


const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
    <img
      src={imgSrc}
      width="60px"
      height="60px"
      alt="features"
      className=""
    />
    
    <div className='flex-1'>
      
      <h3 className="text-lg text-blue-600 font-semibold">{title}</h3>
      <div className='flex justify-end'>
      <FaArrowRight className="text-blue-500 " size={20}/>

      </div>
    <section className="border-t border-blue-200 bg-black1 w-full">

    </section>
    </div>
  </div>
  );
};

const Hero6 = () => {
  return (
    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-3xl md:text-4xl font-bold text-center lg:text-left">
            Research and education
            </h2>
            <p className="text-blue-600">We are committed to entrepreneurial innovation and promote promising ideas and projects. In this way, we are helping to ensure that Zurich remains a nationally and internationally prosperous research and education location.</p>
          </div>
          <ServiceCard
            imgSrc='/svg/lab.svg'
            title="Excellence Foundation of the University of Zurich"
            
          />
          <ServiceCard
            imgSrc='/svg/sky.svg'
            title="Zurich Center for Creative Economies (ZCCE)"
           
          />

      <ServiceCard
            imgSrc='/svg/certi.svg'
            title="Further engagements"
            
          />


        </div>

        <div className="relative w-full flex-1">
          <img
            src='/img4.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>

      </div>


    </section>
  );
};

export default Hero6;
