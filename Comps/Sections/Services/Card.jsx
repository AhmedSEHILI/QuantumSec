import React from 'react';

function Card({img, title, desc}) {
    return (
        <div className="w-[300px] h-[400px] border-2 border-green4 flex flex-col items-center justify-evenly text-center">
            <img src={img} alt="" className="w-[50%]" />
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="text-center">{desc}</p>
        </div>
    );
}

export default Card;