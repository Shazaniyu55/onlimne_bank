import React from 'react';



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

      {/* first faq */}
      <details
        className="mt-8 border border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none text-center text-blue-600 font-semibold md:relative text-sm cursor-pointer pr-7"
          >Block credit cards and prepaid cards
          <div
            className="absolute top-0 right-0 bg-blue rounded-full px-1 py-0.5 cursor-pointer visible open:invisible"
          >
            <svg
              class="h-5 w-4 text-blue-700"
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

                <table className='items-center mt-8 w-full bg-transparent border-collapse'>
                    <thead>
                        <tr>
                            <th className='text-sm text-blue-600'>Services</th>

                            <th className='text-sm text-blue-600'>Telephone</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th className='text-sm text-blue-600'>Blocking from within the country</th>
                            <th className='text-sm text-blue-600'>	058 958 83 83</th>
                        </tr>


                        <tr>
                            <th className='text-sm text-blue-600'>Blocking from abroad</th>
                            <th className='text-sm text-blue-600'>		+41 58 958 83 83</th>
                        </tr>
                    </tbody>
                    
                </table>
       
       
      </details>


      {/* second faq */}

      <details
        className="border mt-8 border-white rounded pt-2 pb-3 md:px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300"
      >
        <summary
          className="list-none text-center text-blue-600 font-semibold md:relative text-sm cursor-pointer pr-7"
          >Block debit cards, account cards and car safe cards
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
                            <th className='text-sm text-blue-600'>Blocking from within the country</th>
                            <th className='text-sm text-blue-600'>	058 958 83 83</th>
                        </tr>


                        <tr>
                            <th className='text-sm text-blue-600'>Blocking from abroad</th>
                            <th className='text-sm text-blue-600'>		+41 58 958 83 83</th>
                        </tr>
                    </tbody>
                    
                </table>
       
       
      </details>


      
      
      
    </div>


  </section>
  );
};

export default Faq;
