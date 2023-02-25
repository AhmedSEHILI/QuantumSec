import Question from "./Question"

function Questions() {
    const questions =[
        {
            id:1,
            title:'What is wrong with current ciphers?',
            desc:'Nothing, but just for now, predictions state that in 15 years a 512 bit lenghted key will break under the power of a quantum computer!',
        },
        {
            id:2,
            title:'What does QTM use as an encryption?',
            desc:'QTM uses the new NTRUEncrypt to code your data, which is quantum safe algorithm.',
        },
        {
            id:3,
            title:'How is NTRUEncrypt not breakable?',
            desc:'Current ciphers breaking order is polyniomial, while the NTRUEncrypt algirthm require an exponotial order of operations to break which can\'t be broken by QCs in 100 years.',
        },
        {
            id:4,
            title:'Is there a possible loss of data?',
            desc:'No, the algorithm is corruption free.',
        }
    ]
  return (
    <div className="relative">
        <img src="/sections/questions/yellow.svg" alt="yellow" className="hidden md:block -z-10 -left-10 -top-32 absolute w-[50%] " />
        <img src="/sections/questions/green.svg" alt="yellow" className="hidden md:block -z-10 -left-10 -bottom-16 absolute w-[50%] " />
        <div id='questions' className="section ">
        
        <h3 className="SecTitle">~ FAQ ~</h3>
        <div className='flex flex-col items-center w-[80%] md:w-[60%]'>
        {questions.map(question=>{
            return <Question key={question.id} title={question.title} desc={question.desc}/> 
        })}
        </div>
        
    </div>
    </div>
  )
}

export default Questions