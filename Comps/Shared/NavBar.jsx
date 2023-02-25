import { useState } from "react";
import Button from './Button';
import NavButt from './NavButt';
import Link from 'next/link';

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);



  return (
    <nav className={`shad py-4 md:py-4 lg:py-1 px-4 md:px-8 flex items-center flex-col lg:flex-row fixed w-full  backdrop-blur-sm z-50`} >
      <div className="flex justify-between items-center w-full lg:w-auto lg:mx-16 xl:mx-20">
      <Link href='/#' className="font-bold text-2xl select-none cursor-pointer"><img className='h-12 ' src="/sections/navbar/qtm.svg" alt="" /></Link>
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
                    <NavButt setVisible={setVisible} href={'/#'} section={'Home'} />
                   <NavButt setVisible={setVisible} href={'/#services'} section={'Our services'} />
                   <NavButt setVisible={setVisible} href={'/#questions'} section={'FAQs'} />
                   <NavButt setVisible={setVisible} href={'/#contact'} section={'Contact Us'} />
                   <NavButt setVisible={setVisible} href={'/#about'} section={'About Us'} />
                 <Link onClick={()=>setVisible(false)} href="/demo"> <Button  msg={'Try it !'} bg={'bg-green4 text-white hover:bg-green1 hover:text-green4'}/></Link> 
                    

        </div>

      </div>
    </nav>
  );
}

