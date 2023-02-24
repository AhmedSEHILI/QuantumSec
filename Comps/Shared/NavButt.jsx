import React from 'react';

function NavButt({section}) {
    return (
        <button className="hover:bg-green1 py-[10px] px-[12px] rounded-lg font-semold text-xl">
            {section}
        </button>
    );
}

export default NavButt;