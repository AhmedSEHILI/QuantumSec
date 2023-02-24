import { useState } from "react";

function Question({title,desc}) {
    const [active, setActive] = useState(true);
    const [maxHeight, setMaxHeight] = useState(null)
    function collapse() {
        setActive(!active);
        console.log(active);
        if (active){
            setMaxHeight('auto')
        }else{
            setMaxHeight(null)
        }
    }
  return (
    <div className="border-[1px] border-green4 relative w-full">
        <div onClick={collapse} className="absolute top-2 right-2 bg-green1">
            <img  src={active?'/sections/questions/-.svg':'/sections/questions/+.svg'} alt="aa" />
        </div>
        <button className="collapsible w-full">Open Section 1</button>
        <div className={"content transition-all duration-200 delay-150"} style={{maxHeight:maxHeight}}>
        {active && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
        </div>
    </div>
  )
}

export default Question