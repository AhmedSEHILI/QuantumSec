import { useState } from "react";
import Button from './Button';
import NavButt from './NavButt';

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);



  return (
    <nav className={`shad py-4 md:py-4 lg:py-1 px-4 md:px-8 flex items-center flex-col lg:flex-row fixed w-full backdrop-blur-sm z-50`} >
      <div className="flex justify-between items-center w-full lg:w-auto lg:mx-16 xl:mx-20">
        <a>
          LOGO
        </a>
        <button className="space-y-2 w-8 lg:hidden" onClick={toggleVisible}>
          <div className="w-full h-1 rounded-full bg-black" />
          <div className="w-full h-1 rounded-full bg-black" />
          <div className="w-full h-1 rounded-full bg-black" />
        </button>
      </div>
      <div
        className={`lg:flex items-center justify-between w-full flex-col lg:flex-row ${
          visible ? "flex h-96" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center lg:flex-row md:justify-end md:w-full space-y-4 lg:space-y-0 my-4 font-semibold text-sm md:text-base lg:text-lg lg:space-x-8">
                   <NavButt href={'#services'} section={'Our services'} />
                   <NavButt href={'#questions'} section={'FAQs'} />
                   <NavButt href={'#contact'} section={'Contact Us'} />
                   <NavButt href={'#about'} section={'About Us'} />
                   <NavButt href={'#traù'} section={'Our Team'} />
                   <Button msg={'Try it !'} bg={'bg-green4 text-white hover:bg-green1 hover:text-green4'}/>


        </div>

      </div>
    </nav>
  );
}


// import React from 'react';
// import Button from './Button';
// import NavButt from './NavButt';

// function NavBar(props) {
//     return (
//         <div className="shad flex flex-row justify-between py-4 px-16 fixed w-full backdrop-blur-sm z-50">
//             <a href='#' className="font-bold text-2xl select-none cursor-pointer">LOGO</a>
//             <div className="flex flex-row gap-14">
//                 <NavButt href={'#services'} section={'Our services'} />
//                 <NavButt href={'#questions'} section={'FAQs'} />
//                 <NavButt href={'#contact'} section={'Contact Us'} />
//                 <NavButt href={'#about'} section={'About Us'} />
//                 <Button msg={'Try it !'} bg={'bg-green4 text-white hover:bg-green1 hover:text-green4 '}/>
//             </div>
//         </div>
//     );
// }

// export default NavBar;