import Carousel from '@/Comps/Shared/Carousel'


function Team() {
  const members= [
    {
        firstname:"Ahmed",
        lastname:"Sehili",
        image:"/sections/team/ahmed.jpg"
    },
    {
        firstname:"Maroua",
        lastname:"Amrouche",
        image:"/sections/team/maroua.jpg"
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
    image:"/sections/team/abdelalim.jpg"
}
]
  return (
    <div id='about' className=' max-h-screen text-center mx-auto px-10  pb-28 pt-32 md:px-24 w-screen'>
          <h2 className='SecTitle'>~ Our Team ~</h2>
         <Carousel members={members} />
    </div>
  )
}

export default Team