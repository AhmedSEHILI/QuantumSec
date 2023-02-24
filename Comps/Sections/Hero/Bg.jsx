import React from 'react';

function Bg(props) {
    return (
        <div className="relative -z-10">
            <img src="/sections/hero/yellow.svg" alt="" className="absolute blur-xl -left-3 -top-3 invisible md:visible" />
            <img src="/sections/hero/green.svg" alt="" className="hidden md:block absolute right-0 blur-xl top-[700px]" />
        </div>
    );
}

export default Bg;