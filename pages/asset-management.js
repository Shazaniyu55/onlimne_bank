import React from "react";
import AdainNavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {FaArrowRight} from 'react-icons/fa'



function Access(){

    const ServiceCard1 = ({ imgSrc, title, desc }) => {
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

      //render items
    return(
        <>

        <AdainNavBar imageSrc="/svg/logo.svg"/>
        <div className="grid md:grid-cols-2 mt-20">
           
           <div className="md:container  bg-blue-900 m-10 p-4 -translate-x-10">
           <h1 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">The partner for institutional investors</h1>
              <p className="text-white">As a leading Swiss asset manager, we offer all institutional asset management services for financial service providers, companies, foundations and pension funds. We call this #sustainablyfitinvesting.</p>
           </div>


           <div className="-translate-x-4">
               <img className="md:p-4 -translate-y-12" src="/cycle.jpeg" alt="" width="" height=""/>
           </div>
       </div>



       <div className="md:container w-full p-4 bg-white ">
                <h1 className="text-3xl md:text-4xl text-black p-10 font-bold text-center lg:text-center text-blue-700">Partnership is a matter of trust</h1>
                <p className="md:text-center text-blue-600 text-xl leading-normal">
                Talk to us about your investment needs and the strategic direction of your assets. Our<br/> goal is to offer you efficient solutions for your portfolio. For long-term asset growth, <br/>we balance expected returns and risks and take your sustainability requirements into<br/> account.
                </p>
            </div>




            <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="relative w-full flex-1">
          <img
            src='/cliff.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
                  Sustainability pays off
            </h2>
            <p className="text-blue-600">
            Invest sustainably and with foresight. This will help your<br/> performance and put you at the forefront of the journey<br/> towards a sustainable future.
            </p>
          </div>
          <ServiceCard1
            imgSrc='/svg/eye.svg'
            title=" View overview"
          />
          <ServiceCard1
            imgSrc='/svg/stock.svg'
            title="Capital market"
          />

        
        </div>
      </div>
    </section>


        <Footer/>

        </>
    )
}

export default Access