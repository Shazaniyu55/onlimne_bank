import ContactHero4 from '@/components/contacthero';
import Radio from '@/components/radio';
import React from 'react'


function Contact(){

    return(
        <div className='m-4 p-4'>

            <p className='text-sm font-bold text-center  text-blue-700'>Contact options for media, talent and sponsorship</p>


            <div className='mt-4'>
            <h1 className='text-4xl md:text-8xl font-bold text-center text-blue-700'>Find the right contact</h1>



            <p className='text-sm font-bold text-center mt-10 text-blue-700'>Do you have a media inquiry, would you like to apply to us or are you interested in our sponsorship?</p>

                <div className='md:grid grid-col-4 grid-flow-col gap-4 mt-10'>
                    {/* first grid */}
             
                    <h1 className='text-4xl md:text-4xl font-bold text-blue-700'>media</h1>
                   <ContactHero4/>
                   <Radio/>
              


                </div>
                
            </div>

            {/* next container */}

            <div className='md:flex justify-end'>
            <div className="md:container bg-blue-200 m-10 p-4">
            <h1 className='text-4xl md:text-8xl font-bold text-blue-700'>Do you have a general concern?</h1>
               <p className="text-blue-800 mt-4">Then contact us quickly and easily using the online form.</p>
            </div>
            </div>

           
        </div>
    );
}

export default Contact;