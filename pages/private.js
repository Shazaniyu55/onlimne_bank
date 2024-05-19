import Layouts from "@/components/layout";
import React from "react"
import AdainNavBar from "@/components/navbar";
import Footer from "@/components/dashboard/footers/footer";

function Private(){

    return(
        <>

        <Layouts showNavbar={AdainNavBar} showFooter={Footer}>

       <div className="grid md:grid-cols-2 mt-20 ">
            <div className="md:container w-full bg-blue-700 m-10 p-4 -translate-x-10">
            <h1 className="text-4xl md:text-4xl font-bold text-white">Family is not always easily
            well,<br/> here we are.
            
            </h1>
            <p className="text-white mt-10">
                Dealing with money takes learning.As the local<br/> bank, we support parents and children.with the<br/> free ZKB Banking kids package, children aged 10<br/> and over learn how to handle money independently.
               </p>

                <div className="translate-x-40">
                <img className="md:p-4 -translate-y-12" src="/img1.jpeg" alt="" width="" height=""/>


                </div>


            </div>


           
        </div>

        </Layouts>

        </>
    );
}

export default Private;