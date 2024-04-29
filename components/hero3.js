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
      
      <div>
        
        <h3 className="text-lg text-blue-600 font-semibold mb-2">{title}</h3>
        <FaArrowRight className="text-blue-500 translate-x-20" size={20}/>
        <section className="border-t border-blue-200 bg-black1 ">
        
      </section>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col lg:flex-row">
        <div className="relative w-full flex-1">
          <img
            src='/img2.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-blue-700 text-3xl md:text-4xl font-bold text-center lg:text-left">
            Umwelt und Mobilität
            </h2>
            <p className="text-blue-600">Wir setzen uns für Natur und Umwelt ein und fördern das Umweltbewusstsein der jungen ‎Generation. Dabei engagieren wir uns besonders für naturnahe Erlebniswelten und nachhaltige Mobilität.</p>
          </div>
          <ServiceCard
            imgSrc='/svg/rhino.svg'
            title="Zoo Zürich"
            desc="Have you relocated to Germany for just a few weeks, months or years? With a demanding job, and a busy life you may not have enough time to learn German."
          />
          <ServiceCard
            imgSrc='/svg/rhino.svg'
            title="ZVV-Nachtnetz"
            desc="But do not worry - you can choose an English-speaking home cleaner at no extra cost. We have a no long-term contracts policy, even for regular cleaning services. Simply book a home cleaning service whenever you need one."
          />

<ServiceCard
            imgSrc='/svg/rhino.svg'
            title="Weitere Engagements"
            desc="But do not worry - you can choose an English-speaking home cleaner at no extra cost. We have a no long-term contracts policy, even for regular cleaning services. Simply book a home cleaning service whenever you need one."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
