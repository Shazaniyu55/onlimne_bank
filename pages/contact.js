import ContactHero4 from '@/components/contacthero';
import Radio from '@/components/radio';
import React from 'react'


function Contact(){

    return(
        <div className='m-4 p-4'>

            <p className='text-sm font-bold text-center  text-blue-700'>Contact options for media, talent and sponsorship</p>


            <div className='mt-4'>
            <h1 className='text-4xl md:text-9xl font-bold text-center text-blue-700'>Find the right contact</h1>



            <p className='text-sm font-bold text-center mt-10 text-blue-700'>Do you have a media inquiry, would you like to apply to us or are you interested in our sponsorship?</p>

                <div className='grid grid-col-4 grid-flow-col gap-4 mt-10'>
                    {/* first grid */}
             
                    <h1 className='text-4xl md:text-4xl font-bold text-center text-blue-700'>media</h1>
                   <ContactHero4/>
                   <Radio/>
              


                </div>
                
            </div>
        </div>
    );
}

export default Contact;