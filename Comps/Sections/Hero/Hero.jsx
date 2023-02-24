import Button from '@/Comps/Shared/Button';
import React from 'react';
import Bg from './Bg';
import Link from 'next/link';

function Hero() {
    return (

        <div className='py-20'>
            <Bg />
            <div className=" flex flex-col-reverse justify-center md:flex-row pt-28 md:justify-evenly items-center w-full">
                <div className="flex flex-col items-center md:items-start text-center md:text-start  gap-16">
                    {/* <p className="text-center">— send secure messages .. quantum can't break it   </p> */}
                    <h2 className="font-extrabold text-6xl">Here is <br/>some text</h2>
                    <p className=" w-[80%] md:w-[500px] text-justify">Quantum computing is a type of computing that utilizes quantum mechanical phenomena to perform operations on data. Unlike classical computing, which processes data in binary bits, quantum computing employs quantum bits or qubits, which can exist in multiple states at once. This property, known as superposition, allows quantum computers to perform certain calculations exponentially faster than classical computers</p>
                    <div className="flex flex-row gap-4 md:gap-8 w-fit ">
                        <Link href="/overview" msg={'Overview'} bg={'bg-green4 text-white '}/>
                        <Link href="/demo" msg={'Try it !'} bg={'bg-green1 text-green4 hover:bg-green4 hover:text-white'} textclr={'text-green4'}/>
                    </div>

                </div>
            <img src="/sections/hero/aa.svg" alt="" className="w-[70%] md:w-[500px] mb-10 md:mb-0 h-fit md:h-[500px]" />
            </div>

        </div>
    );
}

export default Hero;