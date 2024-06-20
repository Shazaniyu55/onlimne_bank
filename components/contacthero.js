"use client";
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'


const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className=" gap-3 sm:gap-10 lg:w-[90%]">
      <img
        src={imgSrc}
        width="60px"
        height="60px"
        alt="features"
        className=""
      />
      
      <div className=''>
        
        <h3 className="text-lg text-blue-600 font-semibold">{title}</h3>
        <p className='text-blue-800'>We are available to journalists to provide<br/> information and information. <br/>Also subscribe to our ad hoc announcements.</p>
        <div className='flex justify-start'>
        <FaArrowRight className="text-blue-500 w-10" size={20}/>

        </div>
     
      </div>
    </div>
  );
};

const ContactHero4 = () => {
  return (
      <div className="mt-8 flex items-center flex-col-reverse lg:flex-row">
        
         
          <ServiceCard
            imgSrc='/svg/micro.svg'
            title="Media contacts"
           
          />
     




      </div>


  );
};

export default ContactHero4;
