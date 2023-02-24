
function Card({img, title, desc,height}) {
    return (
        <div className={`w-[75%] p-8 md:w-[300px] ${height} border-2 border-green4 hover:border-b-8 hover:shadow-2xl flex flex-col items-center justify-evenly text-center transition-all duration-300 hover:-translate-y-2`}>
            <img src={img} alt="" className="w-[50%]" />
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="text-center">{desc}</p>
        </div>
    );
}

export default Card;