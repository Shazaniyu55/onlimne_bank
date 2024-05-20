"use client";
import {FaArrowRight} from 'react-icons/fa'


const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className='md:flex justify-end mt-8'>
    <div className="md:flex items-center space-x-4 text-blue-700">
       <img
        src={imgSrc}
        width="560px"
        height="560px"
        alt="features"
        className=""
      />

      <div className='mt-4'>
        <h1 className='text-4xl text-blue-900 font-bold'>Female Finance: That’s what matters</h1>
        <p className='text-blue-600 text-2xl'>Women are often faced with particular<br/> challenges when dealing with finances and<br/> provision. What is important about this? Set<br/> the course now and make the right decisions.</p>
        <div className='flex-1'>
        <FaArrowRight className="text-blue-500 w-10" size={20}/>

        </div>

        </div>
     
     
    </div>
    </div>
  );
};

const Hero8 = () => {
  return (
      <div className="mt-8 flex justify-center items-center ">
        
         
          <ServiceCard
            imgSrc='/niyu.jpeg'
            title="Media contacts"
           
          />





      </div>


  );
};

export default Hero8;
