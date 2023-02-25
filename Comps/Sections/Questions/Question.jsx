import { useState } from "react";

function Question({title,desc}) {
    const [active, setActive] = useState(false);
    const [maxHeight, setMaxHeight] = useState('max-h-0')
    function collapse() {
        if (!active){
            setMaxHeight('max-h-fit pb-4')
        }else{
            setMaxHeight('max-h-0 pb-0')
        }
        setActive(!active);
        
    }
  return (
    <div className="border-[1px]  border-green4 relative  w-full">
        <div onClick={collapse} className="absolute cursor-pointer flex justify-center items-center select-none h-10 w-10 top-2 right-2 bg-green1">
            <img className="w-6"  src={active?'/sections/questions/-.svg':'/sections/questions/+.svg'} alt="aa" />
        </div>
        <button onClick={collapse} className="collapsible w-full py-4 pl-5 pr-14 md:pr-10 font-semibold text-base sm:text-xl md:text-3xl select-none">{title}</button>
        <div className={`content font-normal text-sm sm:text-base md:text-xl px-6  ${maxHeight}`} >
         <p>{desc}</p>
        </div>
    </div>
  )
}

export default Question