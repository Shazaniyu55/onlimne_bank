import React from 'react';
import AdainNavBar from '@/components/navbar';
import {FaArrowRight} from 'react-icons/fa'
import Footer from '@/components/footer';

function Institute(){

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
           
           <div className="md:container   bg-blue-700 m-10 p-4 -translate-x-10">
                    <h1 className="text-4xl md:text-4xl font-bold text-white text-center lg:text-left">Products and services for institutional investors</h1>
                        <p className="text-white">Zürcher Kantonalbank is a partner focused on long-term and trusting cooperation. We lead institutional clients to success with holistic products and first-class services.</p>
           </div>


           <div className="-translate-x-4">
               <img className="md:p-4 -translate-y-12" src="/inst1.jpeg" alt="" width="" height=""/>
           </div>
       </div>


       

       <div className="md:container md:w-full p-4 bg-white ">
        
                <h1 className="text-5xl md:text-5xl text-black p-10 font-bold text-center lg:text-center text-blue-700">Your contact person at eye level</h1>
                <p className="md:text-center text-blue-600 text-xl leading-normal">Whether you are a large company, canton or municipality, pension fund, foundation,<br/>asset manager or bank: we support you personally and offer you solutions tailored to your needs.<br/>You can rely on our proven processes, our innovative products, our inspiring advice and our award-winning research.</p>
            </div>

     


    




            {/* section for line */}

            <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="relative w-full flex-1">
          <img
            src='/work.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
            Large companies
            </h2>
            <p className="text-blue-600">
            Our experts will provide you with individual and first-class support.
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







            {/* second section */}


            <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
            Cantons and municipalities
            </h2>
            <p className="text-blue-600">
            As a universal and cantonal bank, we know your needs from A to Z.            </p>
          </div>
          <ServiceCard1
            imgSrc='/svg/eye.svg'
            title="  View overview"
          />
          <ServiceCard1
            imgSrc='/svg/growth.svg'
            title="Financing"
          />

         
        </div>

        <div className="relative w-full flex-1">
          <img
            src='/inst2.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
      </div>
    </section>



    {/* section3 */}

    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="relative w-full flex-1">
          <img
            src='/inst3.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
            Pension funds
            </h2>
            <p className="text-blue-600">
            We think and act long-term, offer very good services and market-driven performance.            </p>
          </div>
          <ServiceCard1
            imgSrc='/svg/eye.svg'
            title="View overview"
          />
          <ServiceCard1
            imgSrc='/svg/growth.svg'
            title="Custody service"
          />

        
        </div>
      </div>
    </section>


    {/* section 4 */}


    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
            Foundations
            </h2>
            <p className="text-blue-600">
            We provide comprehensive advice and support to foundations and other non-profit organizations.</p>
          </div>
          <ServiceCard1
            imgSrc='/svg/eye.svg'
            title=" View Overview"
          />
          <ServiceCard1
            imgSrc='/svg/growth.svg'
            title="Investment"
          />

        
        </div>

        <div className="relative w-full flex-1">
          <img
            src='/inst4.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
      </div>
    </section>

                {/* section 5 */}


                <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">

      <div className="relative w-full flex-1">
          <img
            src='/inst5.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

         

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
            Asset manager </h2>
            <p className="text-blue-600">
            Our experts provide independent asset managers with holistic and individual support.</p>
          </div>
          <ServiceCard1
            imgSrc='/svg/eye.svg'
            title=" Zurich Zoo"
          />
       

         <ServiceCard1
            imgSrc='/svg/certifi.svg'
            title="Trade"
          />
        </div>

       
      </div>
    </section>


    {/* section 6 */}



    
    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-5xl md:text-5xl font-bold text-center lg:text-left">
            banks and insurance companies
            </h2>
            <p className="text-blue-600">
            We round off our innovative services and products with personal support.</p>
          </div>
          <ServiceCard1
            imgSrc='/svg/eye.svg'
            title=" View Overview"
          />
          <ServiceCard1
            imgSrc='/svg/certifi.svg'
            title="Asset management"
          />

        
        </div>

        <div className="relative w-full flex-1">
          <img
            src='/inst6.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
      </div>
    </section>
                

            <Footer/>
            


            </>
        );
}

export default Institute;