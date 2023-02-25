import Carousel from '@/Comps/Shared/Carousel'


function Team() {
  const members= [
    {
        firstname:"Ahmed",
        lastname:"Sehili",
        image:"/sections/team/ahmed.svg"
    },
    {
        firstname:"Maroua",
        lastname:"Amrouche",
        image:"/sections/team/maroua.svg"
    }
    ,
    {
        firstname:"Chiheb",
        lastname:"Yaici",
        image:"/sections/team/chiheb.jpg"
    },
    {
      firstname:"Selina",
      lastname:"Sendjakeddine",
      image:"/sections/team/selina.jpg"
  },
  {
    firstname:"Abdelalim",
    lastname:"Atoui",
    image:"/sections/team/abdelalim.svg"
}
]
  return (
    <div id='about' className=' max-h-screen text-center mx-auto px-10  pb-28 pt-20 md:px-24 w-screen'>
          <h2 className='SecTitle'>~ Our Team ~</h2>
         <Carousel members={members} />
    </div> 
  );
}

export default Team