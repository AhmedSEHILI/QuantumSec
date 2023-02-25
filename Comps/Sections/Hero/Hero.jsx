import Button from '@/Comps/Shared/Button';
import Link from 'next/link';
import React from 'react';
import Bg from './Bg';

function Hero() {
    return (

        <div className='py-20'>
            <Bg />
            <div className=" flex flex-col-reverse justify-center md:flex-row pt-28 md:justify-evenly items-center w-full">
                <div className="flex flex-col items-center md:items-start text-center md:text-start  gap-16">
                    {/* <p className="text-center">— send secure messages .. quantum can't break it   </p> */}
                    <h2 className="font-extrabold text-6xl">QTM <br/>Cryptography</h2>
                    <p className=" w-[80%] md:w-[500px] text-justify">QTM is a post quantum cryptography solution While quantum computers will soon break modern ciphers,We provide the best alternative, a secure implementation that even quantum can't break in a 100 years!</p>
                    <div className="flex flex-row gap-4 md:gap-8 w-fit ">
                       <Link href="/overview"><Button  msg={'Overview'} bg={'bg-green4 text-white '}/></Link>  
                       <Link href="/demo"><Button  msg={'Try it !'} bg={'bg-green1 text-green4 hover:bg-green4 hover:text-white'} textclr={'text-green4'}/></Link>  
                    </div>

                </div>
            <img src="/sections/hero/aa.svg" alt="" className="w-[70%] md:w-[500px] mb-10 md:mb-0 h-fit md:h-[500px]" />
            </div>

        </div>
    );
}

export default Hero;