import React from 'react';
import Link from 'next/link';
import {FaFacebook, FaLinkedinIn, FaTwitter, FaInstagramSquare} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer className="border-t border-blu-600 border-neutral-200 bg-white mt-20  px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4 text-blue-800">
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col text-xs font-medium mt-4 space-y-2 text-sm">
              <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Help area
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Contact
                </Link>
              
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Search
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Interest rates and prices
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Jobs & Careers
                </Link>

                
              </nav>
            </div>
            <div>
              <p className="font-medium">Sponsorship</p>
              <nav className="flex flex-col text-xs font-medium mt-4 space-y-2 text-sm ">
                <Link
                  href="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  zoo
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Zurich bike

                </Link>
                <Link
                  href="/purewater"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                 ZKB Zurich Run Cup
                </Link>
                <Link
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  ZVV night network
                </Link>

                <Link
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Zurich hiking trails
                </Link>

                <Link
                  href="/printing"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Our commitments
                </Link>

                
               
              </nav>
            </div>
            <div>
              <p className="font-medium">Newsletter</p>
              <nav className="flex flex-col text-xs font-medium mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Customer magazine ZH
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  property
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  prevention
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Pension funds currently
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                frankly precaution
            
                </Link>


                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                
                >
                SMEs currently
            
                </Link>

                
              </nav>
            </div>
            <div>
              <p className="font-medium">Partner</p>
              <nav className="flex text-xs font-medium flex-col mt-4 space-y-2 text-sm ">
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  AXA

                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Banking Advisory Center
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Furniture
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Pfandbrief headquarters
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                 Swiss Foundation
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Technopark® Zurich
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Technopark® Winterthur
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Valiant
                </Link>
                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  Association of Swiss Cantonal Banks
                </Link>

                <Link
                  href="/"
                  className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit"
                >
                  VISECA
                </Link>
              </nav>
            </div>


            <div>
            <p className="max-w-xs mt-4 font-bold text-blue-800">
              Follow Us!
            </p>
            <div className="flex mt-2 space-x-6 text-blue-600">
              <Link
                href=""
                target="_blank"
              >
                <FaFacebook size={20} className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
             
              <Link
                href=""
                target="_blank"
              >
                <FaLinkedinIn size={20} className="hover:text-blue-400 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="" target="_blank">
                <FaTwitter size={20} className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href=""
                target="_blank"
              >
                <FaInstagramSquare size={20} className="hover:text-blue-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>

            <p className="leading-loose tracking-tighter  leading-normal mt-8 text-xs text-blue-600">
        </p>
          </div>

            


           


          </div>
        </div>
        
      </div>


      <section className="w-full border-t md:grid grid-cols-2 gap-4 border-blue-500 bg-white ">
        <div className="mt-4">
        <p className="leading-loose tracking-tighter line-clamp-3 leading-normal text-xs text-blue-600">© Zürcher Kantonalbank 1995 - 2024</p>         
        </div>


           <div className='mt-4'>
                        <ul className=' items-center cursor-pointer  text-xs justify-center md:flex md:space-x-10 md:space-y-0'>
                          <li className='text-blue-600  hover:text-blue-400'>Cookie settings</li>
                          <li className='text-blue-600 hover:text-blue-400'>Legal</li>
                          <li className='text-blue-600 hover:text-blue-400'>data protection</li>
                          <li className='text-blue-600 hover:text-blue-400'>Cookie and tracking policy</li>
                          <li className='text-blue-600 hover:text-blue-400'>General information</li>
                        </ul>
                      </div>
      </section>
    </footer>
  );
};

export default Footer;
