"use client";


const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <img
        src={imgSrc}
        width="60px"
        height="60px"
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Hero6 = () => {
  return (
    <section className="relative  container px-5 md:px-16 mx-auto mt-10">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">

            <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
            Kultur und Szene
            </h2>
            <p>Wir engagieren uns in den Bereichen Theater, Musik, Film und Kino, Literatur sowie Brauchtum. Dabei fühlen wir uns insbesondere etablierten Kulturinstitutionen und Zürcher Traditionen verbunden.</p>
          </div>
          <ServiceCard
            imgSrc='/svg/rhino.svg'
            title="Smart Features"
            desc="Have you relocated to Germany for just a few weeks, months or years? With a demanding job, and a busy life you may not have enough time to learn German."
          />
          <ServiceCard
            imgSrc='/svg/rhino.svg'
            title="Secure Contents"
            desc="But do not worry - you can choose an English-speaking home cleaner at no extra cost. We have a no long-term contracts policy, even for regular cleaning services. Simply book a home cleaning service whenever you need one."
          />

      <ServiceCard
            imgSrc='/svg/rhino.svg'
            title="Secure Contents"
            desc="But do not worry - you can choose an English-speaking home cleaner at no extra cost. We have a no long-term contracts policy, even for regular cleaning services. Simply book a home cleaning service whenever you need one."
          />


        </div>

        <div className="relative w-full flex-1">
          <img
            src='/img4.jpeg'
            width="300px"
            height="300px"
            alt="video banner"
            className="object-cover w-full"
          />
          
        </div>

      </div>


    </section>
  );
};

export default Hero6;
