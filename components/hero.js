import React from "react";

function Hero(){
    return(
        <div className="md:grid md:grid-cols-2 gap-4 mt-20">
            <div className="md:container bg-blue-700 m-10 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">Our commitment</h1>
               <p className="text-white">Curtain up on our commitment to the canton of Zurich: With over 400 commitments, we take part in regional development and coexistence. Experience culture, sport and nature experiences in our beautiful canton with a discount of up to 50%.</p>
            </div>
        </div>
    );
}

export default Hero;