import React, { useState } from 'react';
import Bg from './Bg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FRONTEND_URL } from '@/data/data';
function Contact(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const [error, setError] = useState(false)


    async function handleClick() {
        if (!name.trim().length ||!email.trim().length ||!message.trim().length||!subject.trim().length){
            setError(true);
        }else{
            try {
                const res = await axios.post(FRONTEND_URL+'api/contact',{name,email,message,subject});
                if (res.status===200){
                    toast.success(res.data.msg, {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubject('');
                    setError(false);
                }else{
                    toast.error(res.data.msg, {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    setError(false);
                }
                
            } catch (error) {
                toast.error(error?.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }
            
        }
    }
    
    return ( 
        <div className="pb-10">
            <Bg />
            <ToastContainer />
            <div id='contact' className="section">
                 <h3 className="SecTitle">~ Contact Us ~</h3>
                 <div className="flex flex-col gap-6 w-[300px] sm:w-[370px] md:w-[700px] pt-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input  onChange={(e)=>setName(e.target.value)}value={name} type="text" placeholder="Name" className="border-2 md:w-[49%] h-10 rounded-md px-4 bg-slate-50 placeholder:text-gray-400 placeholder:text-xl focus:outline-none " />
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="border-2 md:w-[49%] h-10 rounded-md px-4 bg-slate-50 placeholder:text-gray-400 placeholder:text-xl focus:outline-none" />
                    </div>
                    <input onChange={(e)=>setSubject(e.target.value)} value={subject} type="text" placeholder="Subject" className="border-2 h-10 rounded-md px-4 bg-slate-50 placeholder:text-gray-400 placeholder:text-xl focus:outline-none" />
                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Enter your message" name="ddd" id="" cols="30" rows="10" className="w-full resize-none h-56 border-2 bg-slate-50 p-4 placeholder:text-gray-400 placeholder:text-xl focus:outline-none"></textarea>
                    {error && <p className='text-red-700 text-xl font-semibold'>Please fill all the informations </p>}
                    <button onClick={handleClick}  className={`py-2 md:py-[10px] px-16 md:px-20 rounded-lg font-bold text-xl hover:shadow-xl duration-300 bg-green4 text-white w-full md:w-[300px]`}>
                    Send  Massage
                    </button>
                 </div>
            </div>
        </div>
    );
}

export default Contact;