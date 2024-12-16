import react  from "react";
import {motion, useScroll} from "framer-motion"
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Detail = ({type, time, place, info})=>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[100%] sm:w-[100%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference ={ref} />

        <motion.div
        initial ={{y:50}}
        whileInView={{y:0}}
        transition ={{duration:0.5,type:"spring"}}

        ><h3 className='capitalize font-bold  text-2xl'>{type }
        </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {place}
            </span>
            <p className ='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}
const  Education =()=>{
    const ref = useRef(null);
    const  {scrollYProgress} = useScroll(   
        {
            target: ref,
            offset: ['start end', 'center start']
        
        }
    )

    return (
        <div className ='my-64'>

            <h2 className ='font-bold text-8xl  mb-32 w-full text-center md:text-7xl sm:text-7xl'>Education</h2>
            <div ref={ref} className ='w-[75%] mx-auto relative'>
                <motion.div
                style ={{scaleY: scrollYProgress}}
                className='absolute left-9 md:left-[-5%] sm:left-[-5%] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
                <ul className ='w-full flex flex-col items-start justify-between ml-4'>
                    <Detail
                        type="Bachelor Of Science In Computer Science" time="2015-2019"
                        place="Maiwand University"
                        info ="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence." 
                    />

                     <Detail
                        type="Graduated from Secondary Education" time="2002-2014"
                        place="Naderyah High School"
                        info ="Relevant courses Mathematics,English Language,Science (Physics, Chemistry, Biology),
                        Computer Science
                        ." 
                    />

                     <Detail
                        type="Complete Ten Month English Language Program" time="2011-2012"
                        place="Shoohah Computer & English Language Training Center"
                        info ="Relevant courses English Grammar and Composition,Pronunciation and Accent TrainingListening Comprehension." 
                    />

                </ul>
            </div>


            
        </div>
    )
}

export default Education
