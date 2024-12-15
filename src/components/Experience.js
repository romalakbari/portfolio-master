import react  from "react";
import {motion, useScroll} from "framer-motion"
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Detail = ({position, company, companyLink, time, address, work})=>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference ={ref} />

        <motion.div
        initial ={{y:50}}
        whileInView={{y:0}}
        transition ={{duration:0.5,type:"spring"}}

        ><h3 className='capitalize font-bold  text-2xl'>{position }&nbsp;<a href ={companyLink}
        target ='_blank'
        className='text-primary dark:text-primaryDark capitalize'
        >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time} | {address}
            </span>
            <p className ='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}
const  Experience =()=>{
    const ref = useRef(null);
    const  {scrollYProgress} = useScroll(   
        {
            target: ref,
            offset: ['start end', 'center start']
        
        }
    )

    return (
        <div className ='my-64'>

            <h2 className ='font-bold text-8xl  mb-32 w-full text-center'>Experience</h2>
            <div ref={ref} className ='w-[75%] mx-auto relative'>
                <motion.div
                style ={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top  dark:bg-light' />
                <ul className ='w-full flex flex-col items-start justify-between ml-4  '>
                <Detail
                    position="Remote Web Developer" company="AUQ Company"
                        companyLink="https://au.linkedin.com/company/umbelstock"
                        time ="2020-2022"  address="Brisbane, Australia"
                        work ="
                        Contributed to a dynamic software development team, specializing in designing and implementing innovative solutions. Played a key role in developing robust applications, optimizing code, and collaborating on various projects, showcasing strong problem-solving and coding skills."
                    />

                    
                    <Detail
                        position="Software Developer" company="Maltya  Company"
                        companyLink="www.azizijobs.com"
                        time ="2022-Present"  address="Kabul,Afghanistan"
                        work ="Engaged in full-stack software development, actively participating in the design, coding, testing, and deployment phases. Specialized in creating scalable and efficient solutions, demonstrating expertise in multiple programming languages and frameworks."
                    />

                    
                     <Detail
                        position="Web Developer" company="BlackScript Company"
                        companyLink="https://www.linkedin.com/company/blackscriptservices"
                        time ="2018-2020"  address="Kabul,Afghanistan"
                        work ="Contributed to web development projects, focusing on designing and implementing user-friendly and visually appealing websites. Proficient in HTML, CSS, and JavaScript, with a strong emphasis on responsive design and ensuring optimal user experiences across various platforms."
                    />

                </ul>
            </div>


            
        </div>
    )
}

export default Experience