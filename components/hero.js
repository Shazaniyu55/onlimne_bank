import React from "react";

function Hero(){
    return(
        <div className="grid md:grid-cols-2 mt-20 ">
            <div className="md:container  bg-blue-700 m-10 p-4 -translate-x-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">Our commitment</h1>
               <p className="text-white">Curtain up on our commitment to the canton of Zurich: With over 400 commitments, we take part in regional development and coexistence. Experience culture, sport and nature experiences in our beautiful canton with a discount of up to 50%.</p>
            </div>


            <div className="-translate-x-4">
                <img className="md:p-4 -translate-y-12" src="/img1.jpeg" alt="" width="" height=""/>
            </div>
        </div>
    );
}

export default Hero;