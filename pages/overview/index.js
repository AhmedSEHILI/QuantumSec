import {React, useEffect, useRef, useState} from 'react';
import {text} from './text';
import { motion, useAnimation, useInView} from 'framer-motion';



function Overview() {

    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [fistview, setFirstview] = useState(false);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
        if (!fistview ) setFirstview(isInView)
    }, [isInView])

    return (
        <div className="flex flex-col items-center pt-32 ">
            <h2 className="SecTitle">Overview</h2>
            <div className="flex lg:flex-row flex-col gap-16 lg:gap-0 justify-around items-center w-screen pt-8">
                <div className="flex flex-col gap-4 w-[350px] md:w-[700px] text-justify text-xl">
                    <motion.div className=""
                                initial={{opacity : 0}}
                                animate={{opacity : 1}}
                                transition={{type: 'spring', stiffness: 45, delay: 0.5}}
                    >
                                {text[0].p1} 
                    </motion.div>
                    <motion.div className=""
                                initial={{opacity : 0}}
                                animate={{opacity : 1}}
                                transition={{type: 'spring', stiffness: 45, delay: 1.2}}
                    >
                                {text[0].p2} 
                    </motion.div>
                    <motion.div className=""
                                initial={{opacity : 0}}
                                animate={{opacity : 1}}
                                transition={{type: 'spring', stiffness: 45, delay: 1.7}}
                    >
                                {text[0].p3} 
                    </motion.div>
                    <motion.div className=""
                                initial={{opacity : 0}}
                                animate={{opacity : 1}}
                                transition={{type: 'spring', stiffness: 45, delay: 2.4}}
                    >
                                {text[0].p4} 
                    </motion.div>
                    <motion.div className=""
                                initial={{opacity : 0}}
                                animate={{opacity : 1}}
                                transition={{type: 'spring', stiffness: 45, delay: 3.1}}
                    >
                                {text[0].p5} 
                    </motion.div>
                </div>
                <img src="https://img.freepik.com/free-vector/cyber-security-concept_53876-90448.jpg?w=1380&t=st=1677286275~exp=1677286875~hmac=52dfbbaeb5dd0ef94436b0d7771fe02c37d28e91f1f4ef867385053e3d206fe4" alt="" className="md:w-[700px] md:h-[500px] w-[350px] h-[200px]" />
        </div>

        <div className="flex lg:flex-row-reverse flex-col gap-16 lg:gap-0 justify-around w-screen pt-56 pb-56 items-center">
                <div ref={ref} className="">
                    {fistview && <div className="flex flex-col gap-8 w-[350px] md:w-[700px] text-justify text-xl">
                        <motion.div className=""
                                    initial={{opacity : 0}}
                                    animate={{ opacity : 1}}
                                    transition={{type: 'spring', stiffness: 45, delay: 0.5}}
                        >
                                    {text[0].p1}
                        </motion.div>
                        <motion.div className=""
                                    initial={{opacity : 0}}
                                    animate={{opacity : 1}}
                                    transition={{type: 'spring', stiffness: 45, delay: 1.2}}
                        >
                                    {text[0].p2} 
                        </motion.div>
                        <motion.div className=""
                                    initial={{opacity : 0}}
                                    animate={{opacity : 1}}
                                    transition={{type: 'spring', stiffness: 45, delay: 1.7}}
                        >
                                    {text[0].p3} 
                        </motion.div>
                        <motion.div className=""
                                    initial={{opacity : 0}}
                                    animate={{opacity : 1}}
                                    transition={{type: 'spring', stiffness: 45, delay: 2.4}}
                        >
                                    {text[0].p4} 
                        </motion.div>
                        <motion.div className=""
                                    initial={{opacity : 0}}
                                    animate={{opacity : 1}}
                                    transition={{type: 'spring', stiffness: 45, delay: 3.1}}
                        >
                                    {text[0].p5} 
                        </motion.div>
                    </div>}
                    
                </div>
                <img src="https://img.freepik.com/free-vector/wireframe-chain-with-digital-code-lock-blockchain-cyber-security-safe-privacy-concept_127544-953.jpg?w=1380&t=st=1677286554~exp=1677287154~hmac=8d6a0fde11094f755822c06a1f3dcb9de4f5609691248aba854b2c515a4f1b02" alt="" className="md:w-[700px] md:h-[500px] w-[350px] h-[200px]" />
        </div>
        



            
            
    </div>
    );
}

export default Overview;