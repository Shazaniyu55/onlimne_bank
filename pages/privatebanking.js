"use client";
import {FaArrowRight} from 'react-icons/fa'
import React from "react";
import AdainNavBar from "@/components/navbar";
import Footer from '@/components/footer';
import ImageSlider from '@/components/imageslider';

function PrivateBanking(){

    const ServiceCard = ({ imgSrc }) => {
        return (
          <div className='md:flex justify-end mt-8'>
          <div className="md:flex items-center space-x-4 text-blue-700">
            
      
            <div className='mt-4'>
              <h1 className='text-4xl p-4 text-blue-900 font-bold'>Moving out of switzerland</h1>
              <p className='text-blue-600 text-2xl m-4'>
                        
            We remain your local bank. Continue to<br/> rely on the comprehensive range of<br/> products and services offered by our<br/> universal bank from a distance.



              </p>
              <div className='flex mt-4'>
              <p className='m-4'>Get to know service</p>
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

    return(
        <>

        <AdainNavBar imageSrc="/svg/logo.svg"/>

            

            <div className="md:flex justify-center items-center mt-20">
           
           <div className="md:container  bg-white m-10 p-4 -translate-x-10">
           <h1 className="text-5xl md:text-5xl font-bold text-blue-800 text-center lg:text-left">Private banking</h1>
              <p className="text-blue-800 text-2xl md:m-4 md:p-4">Our focus is on you and your financial wishes. As the market-leading Zurich universal<br/> bank with an AAA rating, we are your reliable partner in all financial areas.</p>
           </div>


          
       </div>



       <div className="grid md:grid-cols-2 mt-20">
           
           <div className="md:container  bg-blue-900 m-10 p-4 -translate-x-10">
           <h1 className="text-5xl md:text-5xl font-bold text-white text-center lg:text-left">
           Experience our private banking
           </h1>
              <p className="text-white m-4 p-4">
                We not only offer you tailor-made solutions, but also an all-round special experience. Would you like to get to know our private banking offering?</p>

            <button className="bg-white w-80 text-blue-800 font-bold py-4 px-4 rounded">Discover now</button>
           </div>


           <div className="-translate-x-4">
               <img className="md:p-4 -translate-y-12" src="/white.jpeg" alt="" width="" height=""/>
           </div>
       </div>




       <div className="grid md:grid-cols-2 mt-20">

       <div className="translate-y-10 m-4">
               
               <h1 className="text-4xl md:text-4xl font-bold text-blue-900 text-center lg:text-left">Tailor-made solutions – for a lifetime</h1>

               <p className="text-blue-800 text-3xl mt-8">Our private banking team will provide you with comprehensive advice on questions relating to your wealth planning. We listen to you and work with you to develop solutions that are tailored to your phase of life and personal needs.</p>
           </div>
           
           <div className="md:container  bg-blue-900 m-10 p-4 -translate-x-10">
           <h1 className="text-5xl md:text-5xl font-bold text-white text-center lg:text-left">
           Private banking advice

           </h1>
              <p className="text-white m-4 p-4">
                                    
                    Our relationship managers are at your disposal and look forward to getting to know you.

                    </p>

                    <button className="bg-white w-80 text-blue-800 font-bold py-4 px-4 rounded">Make contact</button>
           </div>


          
       </div>

       <div className="mt-8 flex justify-center items-center ">
        
         
          <ServiceCard
            imgSrc='/fewhite.jpeg'
            title="Media contacts"
           
          />





      </div>



      {/* slider */}


      <ImageSlider/>
                

        <Footer/>
        
        </>
    );
}

export default PrivateBanking;