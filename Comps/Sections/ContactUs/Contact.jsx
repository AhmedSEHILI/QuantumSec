import Button from '@/Comps/Shared/Button';
import React from 'react';
import Bg from './Bg';

function Contact(props) {
    return (
        <div className="pb-48">
            <Bg />
            <div id='contact' className="section">
                 <h3 className="SecTitle">~ Contact Us ~</h3>
                 <div className="flex flex-col gap-6 w-[370px] md:w-[700px] pt-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="Name" className="border-2 md:w-[49%] h-10 rounded-md px-4 bg-slate-50 placeholder:text-gray-400 placeholder:text-xl " />
                        <input type="email" placeholder="Email" className="border-2 md:w-[49%] h-10 rounded-md px-4 bg-slate-50 placeholder:text-gray-400 placeholder:text-xl " />
                    </div>
                    <input type="text" placeholder="Subject" className="border-2 h-10 rounded-md px-4 bg-slate-50 placeholder:text-gray-400 placeholder:text-xl " />
                    <textarea  placeholder="Enter your message" name="ddd" id="" cols="30" rows="10" className="w-full resize-none h-56 border-2 bg-slate-50 p-4 placeholder:text-gray-400 placeholder:text-xl "></textarea>
                    <Button msg={'Send  Massage'} bg={'bg-green4 text-white w-full md:w-[300px]'}/>
                 </div>
            </div>
        </div>
    );
}

export default Contact;