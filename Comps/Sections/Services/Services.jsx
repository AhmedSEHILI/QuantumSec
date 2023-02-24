import Card from './Card';

function Services(props) {
    const cards =[
        {
            id:1,
            img:'/sections/services/encripting.svg',
            title:'Encryption',
            desc:'increpting your data witch an advaced algorithm',
            height:'h-[400px]'
        },
        {
            id:2,
            img:'/sections/services/protecting.svg',
            title:'Protection',
            desc:'increpting your data witch an advaced algorithm',
            height:'h-[450px]'
        },
        {
            id:3,
            img:'/sections/services/decripting.svg',
            title:'Decryption',
            desc:'increpting your data witch an advaced algorithm',
            height:'h-[400px]'
        }
    ]
    return (
        <div id='services' className="section ">
            <h3 className="SecTitle">~ Our services ~</h3>
            <div className='flex flex-col md:flex-row  items-center md:items-end gap-10 md:gap-20'>
            {cards.map(card=>{
                return <Card key={card.id} height={card.height} img={card.img} title={card.title} desc={card.desc}/> 
            })}
            </div>
            
        </div>
    );
}

export default Services;