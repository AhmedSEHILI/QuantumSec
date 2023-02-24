import React from 'react';

function Bg(props) {
    return (
        <div className="relative">
            <img src="/sections/hero/yellow.svg" alt="" className="absolute top-0" />
            <img src="/sections/hero/green.svg" alt="" className="absolute right-0 top-[700px]" />
        </div>
    );
}

export default Bg;