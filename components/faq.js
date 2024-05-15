import { Table } from 'flowbite-react';
import React, { useState } from 'react';



const Faq = () => {
  return (
    <section
    className="bg-white p-10  md:w-4/5 md:px-10 md:pb-8 md:pt-10 rounded-lg md:flex justify-between flex-col"
  >
    
    <div className="w-full ">
      <p className="text-4xl md:text-8xl font-bold text-center text-blue-700">
      Telefonische Services

      </p>
    </div>
    <div className="md:w-3/4">
    
      <details
        className="mt-8 border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none text-blue-600 font-semibold md:relative text-sm cursor-pointer pr-7"
          >Who to call?
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </summary>

                <table className='items-center w-full bg-transparent border-collapse'>
                    <thead>
                        <tr>
                            <th className='text-sm text-blue-600'>Services</th>

                            <th className='text-sm text-blue-600'>Telephone</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th className='text-sm text-blue-600'>Kurt wagner</th>
                            <th className='text-sm text-blue-600'>+234 9074235667</th>
                        </tr>
                    </tbody>
                    
                </table>
        {/* <div className='md:grid grid-col-4 grid-flow-col gap-4'>
        <p className="text-xs pt-3">
       Services
          
        </p>


        <p className="text-xs pt-3">
          Telephone
          
        </p>

        </div> */}
       
      </details>


      


      
      
      
    </div>
  </section>
  );
};

export default Faq;
