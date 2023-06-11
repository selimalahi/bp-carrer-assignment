// import React from 'react';
// import { Link } from 'react-router-dom';
// import footer from '../../../assetes/short-logo (1).png';
// import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";;

// const Footer = () => {
//     return (
//         <footer            
//         className="bg-[#0F0D32]">
//             <div >
//                 <div className='text-white flex justify-center pt-8 '>                    
//                     <Link to="/" className="link link-hover mx-2 border border-white px-2 "><BsFacebook  className='w-5 h-5 '/></Link>
//                     <Link to="/" className="link link-hover mx-2 border border-white px-2  "><BsYoutube  className='w-6 h-6' /></Link>
//                     <Link to="/" className="link link-hover mx-2 border border-white px-2 "><BsLinkedin  className='w-5 h-5' /></Link>
                    
//                 </div>
//                 <div className='text-white font-bold  mt-10 flex justify-around'>
//                     <div>
//                     <img src={footer} alt="" className="w-30 h-20"  />
//                     <div>
//                         <p>Desh Career is Career based newsletter in <br /> Bengali language. This newsletter has published <br /> weekly. This is published in every Saturday at <br /> 12.00 PM. </p>
//                     </div>
//                     </div>
//                     <div>
//                     <h1 className='mt-5 text-2xl'>Privacy And Terms</h1>
//                    <div className='flex flex-col mt-12' >
//                     <Link to="/" className="link link-hover">Privacy Policy</Link>
//                     <Link to="/" className="link link-hover">Terms & Condition</Link>
//                     <Link to="/" className="link link-hover">FAQ's</Link>
//                     </div>
//                     </div>
//                     <div>
//                     <h1  className='mt-5 text-2xl '>Support</h1> 

//                   <div className='flex flex-col mt-12'>
//                     <Link to="/" className="link link-hover">Affiliate Link</Link>
//                     <Link to="/" className="link link-hover">Contact us</Link>
//                     <Link to="/" className="link link-hover">Advertise with us</Link>
//                     </div>
//                     </div>
                    
//                 </div>
                
//             </div>
//             <hr className=' mx-8 mt-8'  />
//             <div className=' text-white flex justify-between mx-24 mt-4 pb-10'>
//                 <p>© 2023 Newsletter E-mail Service: All Copy right reserved</p>
//                <div >
//                <Link to="/" className="link link-hover px-2">Terms</Link>   
//                 <Link to="/" className="link link-hover  px-2">Cookie Policy</Link>
//                 <Link to="/" className="link link-hover  px-2">Terms</Link>
//                 <Link to="/" className="link link-hover  px-2">Privacy</Link>
//                </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assetes/short-logo (1).png';
import { BsFacebook, BsYoutube, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#0F0D32]">
      <div>
        <div className="text-white flex justify-center pt-8">
          <Link to="/" className="link link-hover mx-2 border border-white px-2">
            <BsFacebook className="w-5 h-5" />
          </Link>
          <Link to="/" className="link link-hover mx-2 border border-white px-2">
            <BsYoutube className="w-6 h-6" />
          </Link>
          <Link to="/" className="link link-hover mx-2 border border-white px-2">
            <BsLinkedin className="w-5 h-5" />
          </Link>
        </div>
        <div className="text-white font-bold mt-10 flex flex-col md:flex-row justify-around">
          <div className="text-center md:text-left  ">
            <img src={footer} alt="" className="w-30 h-20 mx-auto md:mx-0" />
            <div className="mt-4">
              <p>
                Desh Career is a career-based newsletter in <br /> Bengali language. This newsletter is published <br /> weekly, every Saturday at <br /> 12.00 PM.
              </p>
            </div>
          </div>
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h1 className="mt-5 text-2xl">Privacy And Terms</h1>
            <div className="flex flex-col mt-4">
              <Link to="/" className="link link-hover">Privacy Policy</Link>
              <Link to="/" className="link link-hover">Terms & Conditions</Link>
              <Link to="/" className="link link-hover">FAQ's</Link>
            </div>
          </div>
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h1 className="mt-5 text-2xl">Support</h1>
            <div className="flex flex-col mt-4">
              <Link to="/" className="link link-hover">Affiliate Link</Link>
              <Link to="/" className="link link-hover">Contact us</Link>
              <Link to="/" className="link link-hover">Advertise with us</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-8 mt-8" />
      <div className="text-white flex flex-col md:flex-row justify-between mx-4 md:mx-24 mt-4 pb-10">
        <p className="text-center md:text-left">© 2023 Newsletter E-mail Service: All rights reserved</p>
        <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
          <Link to="/" className="link link-hover px-2">Terms</Link>
          <Link to="/" className="link link-hover px-2">Cookie Policy</Link>
          <Link to="/" className="link link-hover px-2">Terms</Link>
          <Link to="/" className="link link-hover px-2">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
