import React from 'react';
import Footer from '@/components/footer';
import AdainNavBar from '@/components/navbar';
import {FaArrowRight} from 'react-icons/fa'
import Image from 'next/image';


function About(){

  const ServiceCard = ({ imgSrc, title, desc }) => {
    return (
      <div className='md:flex justify-end mt-8'>
      <div className="md:flex items-center space-x-4 text-blue-700">
         <img
          src={imgSrc}
          width="560px"
          height="560px"
          alt="features"
          className="p-4"
        />
  
        <div className='mt-4'>
          <h1 className='text-4xl text-blue-900 font-bold'>Female Finance: That’s what matters</h1>
          <p className='text-blue-600 text-2xl m-4'>Women are often faced with particular<br/> challenges when dealing with finances and<br/> provision. What is important about this? Set<br/> the course now and make the right decisions.</p>
          <div className='flex mt-4'>
          <p className='m-4'>Find out our tips</p>
          <FaArrowRight className="text-blue-500 w-10 cursor m-4" size={20}/>
  
          </div>
  
          </div>
       
       
      </div>
      </div>
    );
  };

    return(
        // <Layouts  showNavbar={AdainNavBar} showFooter={Footer}>

        <>
            <AdainNavBar backgroundColor="blue-700" imageSrc="/zkb.svg"/>
            <div className='md:flex justify-end mt-10 w-full'>
                  <div className="md:container w-full bg-blue-900 md:m-10 p-4">


                <div className="md:flex items-center space-x-4 text-blue-700">
                  <div className="md:flex-1">
                  <h1 className="text-4xl md:text-4xl font-bold text-white">
                  Pro Juventute
                      </h1>
                      
                      <p className="text-white mt-10">
                     
                        As Pro Juventute's main partner for media literacy,<br/> we want to support parents. Our partnership<br/> enables free parent events in the canton of Zurich. <br/>Everyone benefits from this.
                      </p>

                      <button className="border-4 border-white m-10 p-4 text-white">Learn More</button>
                  </div>


                  


                 

                  <div className="md:relative w-full flex-1">
                  <Image src="/cute.jpeg" alt='chat-bubbles' width={450} height={450} className="object-cover  w-full flex-none"/>

                  </div>
                </div>


                </div>
              </div>


              <ServiceCard
            imgSrc='/niyu.jpeg'
            title="Media contacts"
           
          />


          <Footer />

              </>
            
        // </Layouts>
    );
}

export default About;