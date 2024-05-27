import React from 'react';
import Layouts from '@/components/layout';
import AdainNavBar from '@/components/navbar';
import Footer from '@/components/dashboard/footers/footer';
import Image from 'next/image';


function About(){

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

              </>
            
        // </Layouts>
    );
}

export default About;