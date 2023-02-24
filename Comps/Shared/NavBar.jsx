import React from 'react';
import Button from './Button';
import NavButt from './NavButt';

function NavBar(props) {
    return (
        <div className="shad flex flex-row justify-between py-4 px-16 fixed w-full backdrop-blur-sm z-50">
            <div className="font-bold text-2xl">LOGO</div>
            <div className="flex flex-row gap-14">
                <NavButt section={'Our services'} />
                <NavButt section={'FAQs'} />
                <NavButt section={'Contact Us'} />
                <NavButt section={'About Us'} />
                <Button msg={'Try it !'} bg={'bg-green4 text-white hover:bg-green1 hover:text-green4 '}/>
            </div>
        </div>
    );
}

export default NavBar;