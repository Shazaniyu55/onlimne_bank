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

const ContactHero4 = () => {
  return (
      <div className="flex items-center flex-col-reverse lg:flex-row">
        
         
          <ServiceCard
            imgSrc='/svg/mask.svg'
            title="Smart Features"
            desc="Have you relocated to Germany for just a few weeks, months or years? With a demanding job, and a busy life you may not have enough time to learn German."
          />
     




      </div>


  );
};

export default ContactHero4;
