import { questions } from "@/data/data"
import Question from "./Question"
import Bg from "./Bg"

function Questions() {
    
  return (
    <div className="relative">
        <div id='questions' className="section ">
        <Bg />
        <h3 className="SecTitle">~ FAQ ~</h3>
        <div className='flex flex-col items-center w-[90%] sm:w-[85%] md:w-[60%]'>
        {questions.map(question=>{
            return <Question key={question.id} title={question.title} desc={question.desc}/> 
        })}
        </div>
        
    </div>
    </div>
  ) 
}

export default Questions