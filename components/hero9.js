"use client";
import {FaArrowRight} from 'react-icons/fa'


const ServiceCard = ({ imgSrc }) => {
  return (
    <div className='md:flex justify-end mt-8'>
    <div className="md:flex items-center space-x-4 text-blue-700">
      

      <div className='mt-4'>
        <h1 className='text-4xl p-4 text-blue-900 font-bold'>Stock exchanges & markets</h1>
        <p className='text-blue-600 text-2xl m-4'>Current stock market, fund and currency<br/> prices with interactive charts, compact<br/> business news and much more.</p>
        <div className='flex mt-4'>
        <p className='m-4'>Call up finacial information</p>
        <FaArrowRight className="text-blue-500 w-10 cursor m-4" size={20}/>

        </div>

        </div>

        <img
        src={imgSrc}
        width="560px"
        height="560px"
        alt="features"
        className="p-4"
      />
     
     
    </div>
    </div>
  );
};

const Hero9 = () => {
  return (
      <div className="mt-8 flex justify-center items-center ">
        
         
          <ServiceCard
            imgSrc='/stock.jpeg'
            title="Media contacts"
           
          />





      </div>


  );
};

export default Hero9;
