import Button from '@/Comps/Shared/Button';
import React from 'react';
import Bg from './Bg';

function Hero(props) {
    return (

        <div className="relative">
            <div className="absolute flex flex-row pt-44 justify-evenly items-center w-full">
                <div className="flex flex-col gap-16">
                    <p className="">— send secure messages .. quantum can’t break it   </p>
                    <h2 className="font-extrabold text-6xl">Here is <br/>some text</h2>
                    <p className="  w-[500px] text-justify">Quantum computing is a type of computing that utilizes quantum mechanical phenomena to perform operations on data. Unlike classical computing, which processes data in binary bits, quantum computing employs quantum bits or qubits, which can exist in multiple states at once. This property, known as superposition, allows quantum computers to perform certain calculations exponentially faster than classical computers</p>
                    <div className="flex flex-row gap-8 w-fit ">
                        <Button msg={'Overview'} bg={'bg-green4 text-white hover:bg-green1 hover:text-green4'}/>
                        <Button msg={'Try it !'} bg={'bg-green1 text-green4 hover:bg-green4 hover:text-white'} textclr={'text-green4'}/>
                    </div>

                </div>
            <img src="https://img.freepik.com/free-vector/safe-concept-illustration_114360-428.jpg?w=826&t=st=1677232859~exp=1677233459~hmac=9f4d1f708adaec9f87753513d88dc7ff708536954cabdc6b1889fd820087828b" alt="" className="w-[600px] h-[600px]" />
            </div>
            <Bg />

        </div>
    );
}

export default Hero;