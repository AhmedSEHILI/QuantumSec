import React from 'react';

function Bg(props) {
    return (
        <div className="relative -z-10">
            <img src="/sections/contact/green.svg" alt="" className="absolute right-0 invisible md:visible" />
            <img src="/sections/contact/yellow.svg" alt="" className="absolute top-[650px] w-[400px] blur-md invisible md:visible" />
        </div>
    );
}

export default Bg;