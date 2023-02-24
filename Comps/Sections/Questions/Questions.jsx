import Question from "./Question"

function Questions() {
    const questions =[
        {
            id:1,
            title:'Encryption',
            desc:'increpting your data witch an advaced algorithm',
        },
        {
            id:2,
            title:'Protection',
            desc:'increpting your data witch an advaced algorithm',
        },
        {
            id:3,
            title:'Decryption',
            desc:'increpting your data witch an advaced algorithm',
        }
    ]
  return (
    <div className="relative">
        <img src="/sections/questions/yellow.svg" alt="yellow" className="hidden md:block -z-10 -left-10 -top-32 absolute w-[50%] " />
        <img src="/sections/questions/green.svg" alt="yellow" className="hidden md:block -z-10 -left-10 -bottom-16 absolute w-[50%] " />
        <div id='questions' className="section ">
        
        <h3 className="SecTitle">~ FAQ ~</h3>
        <div className='flex flex-col   items-center w-[80%] md:w-[60%]'>
        {questions.map(question=>{
            return <Question key={question.id} title={question.title} desc={question.desc}/> 
        })}
        </div>
        
    </div>
    </div>
  )
}

export default Questions