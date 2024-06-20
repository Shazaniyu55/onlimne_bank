import { useState } from 'react';
import Image from 'next/image';
import { FiPhone, FiHelpCircle, FiSearch, FiMapPin, FiDollarSign, FiCreditCard, FiMessageCircle } from 'react-icons/fi';
import Link from 'next/link';

function AdainNavBar({ backgroundColor, imageSrc }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const bgColorClass = backgroundColor ? `bg-${backgroundColor}` : 'bg-white';
  const textColorClass = backgroundColor === 'blue-900' ? 'text-white' : 'text-blue-600';
  const hoverTextColorClass = backgroundColor === 'blue-900' ? 'hover:text-gray-300' : 'hover:text-blue-400';
  const iconColorClass = backgroundColor === 'blue-900' ? 'text-white' : 'text-blue-700';

  return (
    <>
      {isModalOpen && (
        <div className="md:fixed md:inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="md:bg-white p-8 rounded-lg shadow-lg w-1/2">
            <div className="md:flex justify-between items-center">
              <h2 className="text-xl font-bold">Search</h2>
              <button onClick={toggleModal} className="text-gray-600 hover:text-gray-800">
                &times;
              </button>
            </div>
            <input type="text" placeholder="Search..." className="md:w-full p-2 mt-4 border border-gray-300 rounded-md" />
            <p className="mt-4 text-gray-600">Enter your search query to find what you're looking for.</p>
          </div>
        </div>
      )}

      <nav className={`transition-opacity duration-200 w-full top-0 h-25 fixed lg:mb-8 backdrop-blur-3xl opacity-100 z-50 ${bgColorClass}`}>
        <div className={`flex justify-center items-center pl-2 tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
          <div className='container md:h-10'>
            <div className='md:grid grid-cols-2 gap-4'>
              <div className=''>
                <ul className={`m-2 items-center cursor-pointer space-y-4 text-xs justify-center md:flex md:space-x-10 md:space-y-0 ${textColorClass} ${hoverTextColorClass}`}>
                  <li>
                    <Link href="/private">Private</Link>
                  </li>
                  <li>
                    <Link href="/privatebanking">Private Banking</Link>
                  </li>
                  <li>
                    <Link href="/pursue">Pursue</Link>
                  </li>
                  <li>
                    <Link href="/institutional">Institutional</Link>
                  </li>
                  <li>
                    <Link href="/asset-management">Asset Management</Link>
                  </li>
                </ul>
              </div>
              <div className=''>
                <ul className={`m-2 items-center cursor-pointer text-xs justify-center space-y-4 md:flex md:space-x-10 md:space-y-0 ${textColorClass} ${hoverTextColorClass}`}>
                  <li>Blog</li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>Events</li>
                  <li>Jobs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-left' : ''}`}>
            <div className={`flex items-center justify-between py-5 ${textColorClass} ${hoverTextColorClass}`}>
              <a href="/" className="flex items-center">
                <Image src={imageSrc} width={150} height={150} alt="Zürcher Logo" />
              </a>
              <div className={`grid grid-cols-3 gap-4`}>
                <div className={`pt-2 rounded-md fixed top-2 right-0 mt-4 mr-4 md:hidden ${iconColorClass}`}>
                  {navbar ? (
                    <button onClick={handleClick}>
                      <svg
                        className={`icon icon-tabler icon-tabler-letter-x ${iconColorClass}`}
                        fill="none"
                        height="34"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="34"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                        <line x1="7" x2="17" y1="4" y2="20" />
                        <line x1="17" x2="7" y1="4" y2="20" />
                      </svg>
                    </button>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <Link href="/contact">
                        <FiPhone size={20} className={iconColorClass} />
                      </Link>
                      <FiMessageCircle size={20} className={iconColorClass} />
                      <button onClick={handleClick}>
                        <svg
                          width="21"
                          height="12"
                          viewBox="0 0 21 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="21" height="2" fill="currentColor" />
                          <rect y="3" width="21" height="2" fill="currentColor" />
                          <rect y="6" width="21" height="2" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-2 justify-self-center pl-2 tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
              <div className="space-x-4 text-lg">
                <ul className={`md:px-20 mb-4 mt-2 items-center pr-20 font-medium text-sm justify-center space-y-4 md:flex md:space-x-10 md:space-y-0 ${textColorClass} ${hoverTextColorClass}`}>
                  <li className={`text-sm ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <div className="flex items-center">
                      <FiPhone className='mr-2' size={30} />
                      <Link href="/contact" onClick={() => handleClick('about')}>
                        Contact
                      </Link>
                    </div>
                  </li>
                  <li className={`text-sm ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <div className="flex items-center">
                      <FiHelpCircle className='mr-2' size={30} />
                      <Link href="/" onClick={() => handleClick('experiences')}>
                        Help
                      </Link>
                    </div>
                  </li>
                  <li className={`text-sm ${activeNavItem === 'search' ? 'active' : ''}`}>
                    <div className="flex items-center">
                      <FiSearch className='mr-2' size={30} />
                      <button onClick={toggleModal} className="flex items-center">
                        Search
                      </button>
                    </div>
                  </li>
                  <li className={`text-sm ${activeNavItem === 'locations' ? 'active' : ''}`}>
                    <div className="flex items-center">
                      <FiMapPin className='mr-2' size={30} />
                      <Link href="/" onClick={() => handleClick('locations')}>
                        Locations
                      </Link>
                    </div>
                  </li>
                  <li className={`text-sm ${activeNavItem === 'financial' ? 'active' : ''}`}>
                    <div className="flex items-center">
                      <FiDollarSign className='mr-2' size={30} />
                      <Link href="/" onClick={() => handleClick('financial')}>
                        Financial Info
                      </Link>
                    </div>
                  </li>
                  <li className={`text-sm ${activeNavItem === 'ebanking' ? 'active' : ''}`}>
                    <div className="flex items-center">
                      <FiCreditCard className='mr-2' size={30} />
                      <Link href="/login" onClick={() => handleClick('ebanking')}>
                        eBanking
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdainNavBar;
