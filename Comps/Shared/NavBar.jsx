import React from 'react';
import Button from './Button';
import NavButt from './NavButt';
import Link from 'next/link';

function NavBar(props) {
    return (
        <div className="shad flex flex-row justify-between py-4 px-16 fixed w-full backdrop-blur-sm z-50">
            <a href='#' className="font-bold text-2xl select-none cursor-pointer"><img className='h-12 ' src="/sections/navbar/qtm.svg" alt="" /></a>
            <div className="flex flex-row gap-14">
                <NavButt href={'/#services'} section={'Our services'} />
                <NavButt href={'/#questions'} section={'FAQs'} />
                <NavButt href={'/#contact'} section={'Contact Us'} />
                <NavButt href={'/#about'} section={'About Us'} />
                <Link href="/demo" msg={'Try it !'} bg={'bg-green4 text-white hover:bg-green1 hover:border-green4 border-transparent border-[1px] hover:border-[1px] hover:text-green4 '}/>
            </div>
        </div>
    );
}

export default NavBar;