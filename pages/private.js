import Layouts from "@/components/layout";
import React from "react"
import AdainNavBar from "@/components/navbar";
import Footer from "@/components/dashboard/footers/footer";
import Image from "next/image";



function Private(){

    return(
        <>

        <Layouts showNavbar={AdainNavBar} showFooter={Footer}>

<div className="grid md:grid-cols-2 mt-20">
  <div className="w-full bg-blue-700 m-10 p-4 flex -translate-x-10">
    <div className="flex-1 pr-10">
      <h1 className="text-4xl md:text-4xl font-bold text-white">
        Family is not always easily well,<br /> here we are.
      </h1>
      <p className="text-white mt-10">
        Dealing with money takes learning. As the local<br /> bank, we support parents and children. With the<br /> free ZKB Banking kids package, children aged 10<br /> and over learn how to handle money independently.
      </p>
    </div>
    <div className="flex-none w-1/3">
      <img className="md:p-4 -translate-x-12 w-full" src="/img1.jpeg" alt="zkb_img" width="500px" height="500px"/>
    </div>
  </div>
</div>


        {/* container1 */}

        <div className='md:flex justify-end mt-8'>
            <div className="md:container md:w-full bg-blue-100 md:m-10 p-4">


            <div className="grid md:grid-cols-2">
            <Image src="/svg/family.svg" className="-translate-y-34" alt='chat-bubbles' width={450} height={450}/>
            <h1 className='text-4xl md:text-4xl font-bold text-blue-700'>What interests you today?</h1>

              
            </div>  


          



               



            </div>
            </div>


            {/* container2 */}

            <div className='md:flex justify-end mt-8'>
            <div className="md:container md:w-full bg-blue-900 md:m-10 p-4">


            <div className="grid md:grid-cols-2">
            <h1 className='text-4xl md:text-4xl font-bold text-white'>Count on us</h1>


            <Image src="/svg/female.svg" className="" alt='chat-bubbles' width={450} height={450}/>

              
            </div>  


          



               



            </div>
            </div>


        </Layouts>

        </>
    );
}

export default Private;