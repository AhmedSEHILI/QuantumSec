import React from 'react';

function NavButt({section,href}) {
    return (
        <a href={href} className="hover:bg-green1 py-[10px] px-[12px] rounded-lg font-semibold text-xl duration-300">
            {section}
        </a>
    );
}

export default NavButt;