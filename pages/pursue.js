"use client";
import {FaArrowRight} from 'react-icons/fa'
import Layouts from "@/components/layout";
import React from "react";
import AdainNavBar from "@/components/navbar";
import Footer from "@/components/dashboard/footers/footer";
import Image from 'next/image';
import ImageSlider from '@/components/imageslider';

function Pursue(){


    const ServiceCard = ({ imgSrc }) => {
        return (
          <div className='md:flex justify-center mt-8'>
          <div className="md:flex items-center space-x-4 text-blue-700">
          <img
              src={imgSrc}
              width="560px"
              height="560px"
              alt="features"
              className="p-4"
            />
      
            <div className='mt-4'>
              <h1 className='text-4xl p-4 text-blue-900 font-bold'>Webcast “Sustainability for SMEs”</h1>
              <p className='text-blue-600 text-2xl m-4'>How do the climate goals of large companies <br/>influence your company? And what<br/> regulatory requirements will you face in the<br/> future? Get an overview..</p>
              <div className='flex mt-4'>
              <p className='m-4'>register now for free</p>
              <FaArrowRight className="text-blue-500 w-4 cursor m-4" size={20}/>
      
              </div>
      
              </div>
      
             
           
           
          </div>
          </div>
        );
      };
      

      const ServiceCard2 = ({ imgSrc }) => {
        return (
          <div className='md:flex justify-center mt-8'>
          <div className="md:flex items-center space-x-4 text-blue-700">

         
            
      
            <div className='mt-4'>
              <h1 className='text-4xl p-4 text-blue-900 font-bold'>New newsletter “KMU aktuell”</h1>
              <p className='text-blue-600 text-2xl m-4'>The SME economic outlook in video format,<br/> selected blog articles and podcasts provide<br/> you with valuable knowledge and provide <br/>innovative ideas. You will also find out about<br/> events, initiatives and new offers.</p>
              <div className='flex mt-4'>
              <p className='m-4'>subscribe now</p>
              <FaArrowRight className="text-blue-500 w-4 cursor m-4" size={20}/>
      
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

      const ServiceCard3 = ({ imgSrc }) => {
        return (
          <div className='md:flex justify-center mt-8'>
          <div className="md:flex items-center space-x-4 text-blue-700">

         
          <img
              src={imgSrc}
              width="560px"
              height="560px"
              alt="features"
              className="p-4"
            />
      
            <div className='mt-4'>
              <h1 className='text-4xl p-4 text-blue-900 font-bold'>This is how your innovation project succeeds</h1>
              <p className='text-blue-600 text-2xl m-4'>Break new ground with your company. The<br/>cantonal business development agency has <br/> launched the “SMEs and Innovation” project<br/> together with us and other partners. With <br/>the aim of supporting SMEs in the canton of<br/> Zurich with their innovation projects.</p>
              <div className='flex mt-4'>
              <p className='m-4'>inform now</p>
              <FaArrowRight className="text-blue-500 w-4 cursor m-4" size={20}/>
      
              </div>
      
              </div>
      
             
           
           
          </div>
          </div>
        );
      };


    return(
        <>

        <Layouts  showNavbar={AdainNavBar} showFooter={Footer}>

            <ServiceCard 
            imgSrc="/work.jpeg"
            />

            <ServiceCard2  imgSrc="/team.jpeg"/>

            <ServiceCard3  imgSrc="/team2.jpeg"/>




            
<div className='md:flex justify-center items-center mt-8'>
<div className="md:container md:w-full bg-blue-100 md:m-10 p-4">

<div className="md:flex items-center space-x-10 text-blue-700">
<Image src="/svg/umbre2.svg" className="-translate-y-34" alt='chat-bubbles' width={450} height={450}/>

        <div className="flex-1">
        <h1 className='text-4xl md:text-4xl font-bold text-blue-700'>What interests you today?</h1>

        <div className="grid grid-cols-2 gap-4 mt-8">

        <p className="font-bold text-2xl">Accounts and Cards</p>
        <p className="font-bold text-2xl">Invest sustainably</p>
        <p className="font-bold text-2xl">eBanking</p>
        <p className="font-bold text-2xl">Contact and Services</p>

        <p className="font-bold text-2xl">Mortgages</p>
        <p className="font-bold text-2xl">Locations and branches</p>

        <p className="font-bold text-2xl">3rd pillar</p>
        <p className="font-bold text-2xl">Offers for families</p>

        <p className="font-bold text-2xl">Perks</p>

        </div>
        </div>
        </div>
           </div>
            </div>





            {/* container2 */}


            <div className='md:flex justify-end mt-8'>
            <div className="md:container md:w-full bg-blue-900 md:m-10 p-4">


<div className="md:flex items-center space-x-4 text-blue-700">
  <div className="flex-1">
    <h1 className="text-4xl md:text-4xl font-bold text-white">Count on us</h1>
    <p className="mt-4 text-2xl text-white">
    As a company, use our practical calculators and checklists.
    </p>

    <select className="m-4 p-4 border-4 border-white bg-blue-900 text-white">
        <option className="">What do you want to calculate</option>
        <option className="">Saving calculator</option>

        <option className="">Mortage calculator: Home buying</option>
        <option className="">Mortage calculator: Home buying</option>
        <option className="">Mortage calculator: Home buying</option>
        <option className="">Mortage calculator: Home buying</option>
        <option className="">Mortage calculator: Home buying</option>
        <option className="">Mortage calculator: Home buying</option>
    </select>
  </div>
        <Image src="/svg/umbre.svg" alt='chat-bubbles' width={450} height={450} className="flex-none"/>
</div>



          



               



            </div>
            </div>

            <ImageSlider/>

        </Layouts>
        
        </>
    );
}


export default Pursue