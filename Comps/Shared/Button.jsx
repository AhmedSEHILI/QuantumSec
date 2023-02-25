import Link from 'next/link';
import React from 'react';

function Button({msg, bg}) {
    return (
        <button   className={`py-2 md:py-[10px] px-10 md:px-16 rounded-lg font-bold text-lg md:text-xl hover:shadow-xl duration-300 ${bg}`}>
            {msg}
        </button>
    );
}

export default Button;