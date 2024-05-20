import Layouts from "@/components/layout";
import React from "react"
import AdainNavBar from "@/components/navbar";
import Footer from "@/components/dashboard/footers/footer";
import Image from "next/image";
import Hero8 from "@/components/hero8";
import Hero9 from "@/components/hero9";



function Private(){

    return(
        <>

        <Layouts showNavbar={AdainNavBar} showFooter={Footer}>

                <div className='md:flex justify-end mt-20 w-full'>
                  <div className="md:container bg-blue-900 md:m-10 p-4">


                <div className="md:flex items-center space-x-4 text-blue-700">
                  <div className="md:flex-1">
                  <h1 className="text-4xl md:text-4xl font-bold text-white">
                        Family is not always easily well,<br /> here we are.
                      </h1>
                      
                      <p className="text-white mt-10">
                        Dealing with money takes learning. As the local<br /> bank, we support parents and children. With the<br /> free ZKB Banking kids package, children aged 10<br /> and over learn how to handle money independently.
                      </p>

                      <button className="border-4 border-white m-10 p-4 text-white">Learn More</button>
                  </div>


                  


                 

                  <div className="md:relative w-full flex-1">
                  <Image src="/img1.jpeg" alt='chat-bubbles' width={450} height={450} className="object-cover  w-full flex-none"/>

                  </div>
                </div>


                </div>
              </div>


              <Hero8/>


        {/* container1 */}

<div className='md:flex justify-end mt-8'>
<div className="md:container md:w-full bg-blue-100 md:m-10 p-4">

<div className="md:flex items-center space-x-4 text-blue-700">
<Image src="/svg/family.svg" className="-translate-y-34" alt='chat-bubbles' width={450} height={450}/>
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
    <p className="mt-4 text-4xl text-white">
      Whether taxes, pensions or mortgages: with our practical calculators you will have an overview in just a few clicks.
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
          <Image src="/svg/female.svg" alt='chat-bubbles' width={450} height={450} className="flex-none"/>
</div>



          



               



            </div>
            </div>


            <Hero9/>


        </Layouts>

        </>
    );
}

export default Private;