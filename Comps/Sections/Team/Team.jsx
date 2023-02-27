import Carousel from '@/Comps/Shared/Carousel'
import { members } from '@/data/data';


function Team() {
  
  return (
    <div id='about' className='lg:flex lg:flex-col lg:items-center  px-2  pb-28 pt-24 md:px-24 '>
          <h2 className='SecTitle mx-auto text-center'>~ Our Team ~</h2>
         <Carousel members={members} />
    </div> 
  );
}

export default Team