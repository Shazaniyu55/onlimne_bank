"use client";
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

const Hero5 = () => {
  return (
    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="relative w-full flex-1">
          <img
            src='/img6.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-3xl md:text-4xl font-bold text-center lg:text-left">
            sport and health
            </h2>
            <p className="text-blue-600">With us, Zurich stays on the move. We promote health and popular sports, paying particular attention to the areas of running, gymnastics and swinging.</p>
          </div>
          <ServiceCard
            imgSrc='/svg/shoe.svg'
            title="ZKB  Zurich Run Cup"
         
          />
          <ServiceCard
            imgSrc='/svg/smile.svg'
            title="ASVZ"
           
          />

<ServiceCard
            imgSrc='/svg/certi.svg'
            title="Futher Engagements"
          
          />
        </div>
      </div>
    </section>
  );
};

export default Hero5;
