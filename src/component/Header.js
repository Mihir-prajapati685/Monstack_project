import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faUser} from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    useEffect(() => {
        Aos.init();
        },[])
  return (
      <div>
          <header className='hidden md:bg-[#F5F5F5] md:flex flex-wrap  md:h-12 md:w-full md:justify-between md:items-center' data-aos="fade-down-right"> 
           
              <ul className=' flex flex-wrap text-sm font-serif space-x-6 ml-8'>
                  <li className=''>
                      <span>Payment Option</span>
                  </li>
                  <li>
                      <span>Terms Condition</span>
                  </li>  
              </ul>

              <ul className='flex flex-wrap  text-sm font-serif space-x-6 mr-20 items-center'>
              <li>
                      <span>My Bookings</span>
                  </li>
                  <li>
                     <span ><FontAwesomeIcon   icon={faEnvelope} className='h-5 w-5' /></span> 
                  </li>  
                  <li>
                      Add Your Review
                  </li>
                  <div  className='bg-[#FFDB58] h-12 flex items-center '>
                  <li className='items-center'>
                  <span className='mt-2'><FontAwesomeIcon icon={faUser} className='h-5 w-5 mr-1'/></span> My Account Login
                  </li>
                  </div>
              </ul>
          </header>
    </div>
  )
}
