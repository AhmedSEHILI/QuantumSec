import React from 'react';
import Button from './Button';
import NavButt from './NavButt';

function NavBar(props) {
    return (
        <div className="shad flex flex-row justify-between py-4 px-16 fixed w-full backdrop-blur-sm z-50">
            <a href='#' className="font-bold text-2xl select-none cursor-pointer">LOGO</a>
            <div className="flex flex-row gap-14">
                <NavButt href={'#services'} section={'Our services'} />
                <NavButt href={'#questions'} section={'FAQs'} />
                <NavButt href={'#contact'} section={'Contact Us'} />
                <NavButt href={'#about'} section={'About Us'} />
                <Button msg={'Try it !'} bg={'bg-green4 text-white hover:bg-green1 hover:text-green4 '}/>
            </div>
        </div>
    );
}

export default NavBar;