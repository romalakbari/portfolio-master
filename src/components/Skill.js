import react  from "react";
import {motion} from 'framer-motion'

const Skills=({name, x, y})=>{
    
    return (

        <motion.div className ='flex items-center justify-center rounded-full font-semibold bg-dark text-light
         py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light'
        whileHover={{scale:1.05}}

        initial = {{x:0, y:0}}
        whileInView ={{x:x, y:y, transition: {duration: 1.5}}}
        viewport ={{once: true}}

        >
            {name}
        </motion.div>
    )
}
const  Skill =()=>{
    
    return (
       <>
        <h2 className ='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className ='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>

            <motion.div className ='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>
            
            <Skills  name ="HTML" x ="-30vw" y ="2vw" />
            <Skills  name ="CSS" x ="-5vw" y ="-10vw" />
            <Skills  name ="Javascript" x ="13vw" y ="6vw" />
            <Skills  name ='PHP+Laravel' x ="30vw" y ="8vw" />
            <Skills  name ="ReactJS" x ="-10vw" y ="12vw" />
            <Skills  name ="NextJS" x ="-20vw" y ="-15vw" />
            <Skills  name ="Web Design" x ="32vw" y ="-10vw" />
            <Skills  name ="Figma" x ="0vw" y ="-20vw" />
            <Skills  name ="Firebase" x ="-25vw" y ="18vw" />
            <Skills  name ="Tailwind CSS" x ="18vw" y ="18vw" />
            <Skills  name ="Redux" x ="1vw" y ="25vw" />

        </div>
       </>
    )
}

export default Skill