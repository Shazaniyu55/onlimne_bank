import { useState } from 'react';
import Image from 'next/image';
import { FiPhone, FiHelpCircle, FiSearch, FiMapPin, FiDollarSign, FiCreditCard } from 'react-icons/fi'; // Import icons from react-icons
import Link from 'next/link';



function LoginBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  return (
    <nav className="transition-opacity duration-200 w-full top-0 h-25 fixed lg:mb-8 bg-white backdrop-blur-3xl opacity-100 z-50">
      {/* top container */}
      <div className={` flex justify-center items-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block ' : 'hidden'
            }`}>
        
      </div>

      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
        <div className={`mt-top-adjusted ${navbar ? 'adjust-left' : ''}`}>
          <div className="flex text-adainblack hover:text-estatelinkwhite items-center justify-between py-5">
            <a href="/" className="flex items-center">
              <Image src="/svg/ebank.svg" width={170} height={150} alt="Zürcher Logo" />
            </a>
            <div className="md:hidden text-adainblack hover:text-estatelinkwhite">
              <button className="text-adainblack hover:text-adainwhite pt-2 rounded-md" onClick={handleClick}>
                {navbar ? (
                  <svg
                    className="text-adainblack hover:text-adainwhite icon icon-tabler icon-tabler-letter-x"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                    <line x1="7" x2="17" y1="4" y2="20" />
                    <line x1="17" x2="7" y1="4" y2="20" />
                  </svg>
                ) : (
                  <div className="text-black hover:text-estatelinkwhite">
                    <svg
                      width="21"
                      height="8"
                      viewBox="0 0 21 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="21" height="2" fill="#1B1919" />
                      <rect y="3" width="21" height="2" fill="#1B1919" />
                      <rect y="6" width="21" height="2" fill="#1B1919" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-adainblack hover:text-adainwhite flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className=" space-x-4 text-lg">
              <ul className="md:px-20 mb-4 mt-2 items-center pr-20 font-medium text-sm... justify-center space-y-4 md:flex md:space-x-10 md:space-y-0">
                <li className={`text-sm text-blue-600 ${activeNavItem === 'about' ? 'active' : ''}`}>
                  <div className="flex items-center ">
                    <FiPhone className='mr-2' size={30}/> {/* Icon */}
                    <Link href="/price" onClick={() => handleClick('about')}>
                      Contact
                    </Link>
                  </div>
                </li>
                <li className={`text-sm text-blue-600 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                  <div className="flex items-center">
                    <FiHelpCircle className='mr-2' size={30}/> {/* Icon */}
                    <Link href="/about" onClick={() => handleClick('experiences')}>
                      Help
                    </Link>
                  </div>
                </li>
                <li className={`text-sm text-blue-600  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                  <div className="flex items-center">
                    <FiSearch className='mr-2' size={30}/> {/* Icon */}
                    <Link href="/contact" onClick={() => handleClick('experiences')}>
                      Search
                    </Link>
                  </div>
                </li>
                <li className={`text-sm text-blue-600 ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                  <div className="flex items-center">
                    <FiMapPin className='mr-2' size={30}/> {/* Icon */}
                    <Link href="/contact" onClick={() => handleClick('experiences')}>
                      Locations
                    </Link>
                  </div>
                </li>
                <li className={`text-sm text-blue-600  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                  <div className="flex items-center">
                    <FiDollarSign className='mr-2' size={30}/> {/* Icon */}
                    <Link href="/contact" onClick={() => handleClick('experiences')}>
                      Financial Info
                    </Link>
                  </div>
                </li>
                <li className={` text-sm text-blue-600  ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                  <div className="flex items-center">
                    <FiCreditCard className='mr-2' size={30}/> {/* Icon */}
                    <Link href="/contact" onClick={() => handleClick('experiences')}>
                      eBanking
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container bg-blue-700 lg:w-full md:h-10'>
        <div>
        <h1 className='text-white translate-x-20 p-2'>Login eBanking</h1>

        </div>
       </div>
    </nav>
  );
}

export default LoginBar;
