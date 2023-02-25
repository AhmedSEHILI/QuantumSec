import Link from 'next/link';
import React from 'react';

function Button({msg, bg,href}) {
    return (
        <button  className={`py-2 md:py-[10px] px-16 md:px-20 rounded-lg font-bold text-xl hover:shadow-xl duration-300 ${bg}`}>
            {msg}
        </button>
    );
}

export default Button;