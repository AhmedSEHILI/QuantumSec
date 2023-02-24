import React from 'react';

function Button({msg, bg}) {
    return (
        <button className={`py-[10px] px-20 rounded-lg font-bold text-xl hover:shadow-xl ${bg}`}>
            {msg}
        </button>
    );
}

export default Button;