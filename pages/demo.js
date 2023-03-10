import { BASE_URL } from '@/data/data';
import axios from 'axios';
import  { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Demo() {
  const [encrypt, setEncrypt] = useState(true);
  const [message, setMessage] = useState("");
  const [encryptShow, setEncryptShow] = useState(false)
  const [decryptShow, setDecryptShow] = useState(false)
  const [error, setError] = useState(false)
  const [isVisible,setIsVisible] = useState(false);
  const [isVisibleD,setIsVisibleD] = useState(false);
  const [encryptData, setEncryptData] = useState(null)
  const [decryptData, setDecryptData] = useState(null)
  const [decData,setDecData ] = useState(null);

  async function handleClick() {
    setError(false);
    setDecryptShow(false);
    setEncryptShow(false);
    setIsVisible(false);
    setIsVisible(false);

    if (message.trim().length){
      if (encrypt){
        const res2 =await axios.get(BASE_URL+'/getKP');
        setDecData(res2.data)
        const res = await axios.post(BASE_URL+'/enc',{msg:message}); 
        setEncryptData(res.data.enc);
        setEncryptShow(true);
        setTimeout(() => {
                  setIsVisible(true);
                  }, 11000);
        
      }else{
        const res = await axios.post(BASE_URL+'/dec',{enc:message});
        if (res.data.ok){
          setDecryptData(res.data.dec);
          setDecryptShow(true);
          setTimeout(() => {
            setIsVisible(true);
            }, 7000);
        }else{
          setError(true);
        }
        
      }
    }
    
    
  }
  
  return (
    <div className='py-40 mx-auto container flex flex-col justify-start items-center flex-wrap   min-h-screen'>
        <h3 className="SecTitle">TRY IT</h3>
        <input type="checkbox" className="toggle toggle-accent mb-10" onChange={()=>setEncrypt(!encrypt)} checked={encrypt} />
        <div className='flex justify-center w-[70%] ml-3 md:w-[80%] max-w-sm'>
          <input placeholder={encrypt?"Data to encrypt":"Data to decrypt"} onChange={(e)=>setMessage(e.target.value)} value={message} className='border-y-[1px] border-l-[1px] rounded-l-lg flex-1 px-3  md:px-5 h-16 text-base sm:text-xl md:text-3xl border-green3 outline-none' type="text" />
          <button onClick={handleClick} className='bg-green3 relative text-white font-semibold text-base md:text-xl px-4 md:px-6 py-2 rounded-lg -left-5 '>{encrypt?"Encrypt":"Decrypt"}</button>
        </div>
       
        <div className='flex flex-col items-start justify-start self-start '>
          <pre className='text-black text-left mt-16 md:self-start  max-w-5xl font-medium text-2xl '>
          {encryptShow && <>
          <Typewriter
                words={['Encrypting\nGenerating key pair ..... \nEncrypting message ......\nHere is the encrypted data (hex) :']}
                cursor
                cursorStyle='|'
                typeSpeed={100}
              />
          </>
          }
          {
            decryptShow && 
            <>
            <Typewriter
                words={['Decrypting\nDecrypting cipher ......\nHere is the original data:']}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                
              />
            </>
          }
          
          </pre>
          <div className='text-black text-left self-start font-medium text-2xl break-words break-all'>
            {encryptShow && <>
                {isVisible&& encryptData &&<p  >{encryptData}</p>}
              {isVisible &&<p className='underline cursor-pointer mt-10'  onClick={()=>setIsVisibleD(true)}>Would you like to view the public key ?</p>}
              {isVisibleD && decData && decData.pub}
            </>}
            {
              decryptShow && 
              <>
                 {isVisible &&decryptData &&<p  >{decryptData}</p>}
              </>
            }
            {
              error && <p className='text-red-700 font-semibold'>You must enter a hex string</p>
            }
          </div>
        </div>
    </div>
  )
}

export default Demo