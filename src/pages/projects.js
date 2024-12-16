
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import { useInView, useMotionValue, useSpring,motion } from "framer-motion"
import Head from 'next/head'
import { GithubIcon } from "@/components/Icons"
import Image from 'next/image'
import Link from "next/link";
import react from "react"
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.png";
const FramerImage = motion(Image);
import TransationEffect from '@/components/TransationEffect'

const FeatureProject = ({title, summery,link,type,img, github})=>{

    return (

        <article className ='w-full flex items-center relative justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        
        lg:flex-col  lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 
        '> 
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full  xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank"
             className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src ={img} alt ={title} className ="w-full h-auto"
                whileHover={{scale:1.05}}
                transition ={{duration:0.2}}
                />
            </Link>
            
            <div 
            className='w-1/2 flex flex-col items-start justify-between   pl-6 lg:w-full lg:pl-0  lg:pt-6'
            >
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base  '>{type}</span>
                <Link href ={link} target='_blank' className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summery}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 text-dark dark:text-light rounded-full  '><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base '>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


const Project =({title, type,summery, img, link, github})=>{

    return (
        
        <article className='relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark  xs:p-4 '>
            
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank"
             className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src ={img} alt ={title} className ="w-full h-auto"
                whileHover={{scale:1.05}}
                transition ={{duration:0.2}}
                
                />
            </Link>
            
            <div 
            className='w-full flex flex-col items-start justify-between mt-4'
            >
                <span className='text-primary font-medium text-xl dark:text-primaryDark  lg:text-lg md:text-base '>{type}</span>
                <Link href ={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl dark:text-light'>{title}</h2>
                </Link>
                                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summery}</p>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='rounded text-lg font-medium underline md:text-base dark:text-light'>Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6 w-10 text-dark dark:text-light rounded-full  '><GithubIcon />{" "}</Link>
                </div>
            </div>

        </article>
    )
}
const projects =()=>{
    return (
    <>
    <Head>
        <title>Romal Akbari | Project Page</title>
        <meta name ='description' content='any description' />
    </Head>
    <TransationEffect />

    <main className ='w-full mb-16 flex flex-col items-center justify-center'>

<Layout className ='pt-16'>
    <AnimatedText text ='Imagination Trumps Knowledge!' 
    className='mb-16'
    />
    
    <div className="grid grid-cols-12 md:grid-cols-2  gap-24 gap-y-32 md:gap-y-10 sm:gap-y-10">

        <div className="col-span-6 sm:col-span-2">
            <Project
                title="Billion Management System"
                img={project1}
                summery="Billion is a management system for businesses and warehouses that processes financial data, generates reports, and supports multiple companies and users. It works online and offline, in Dari and English, using Laravel, JavaScript, AJAX, Bootstrap, and MySQL."
                link="https://github.com/romalakbari/billion-"
                github="https://github.com/romalakbari/billion-"
                type="Featured Project"
            />
        </div>
       
        <div className="col-span-6 sm:col-span-2">
            <Project
                title="Global Job Portal Management"
                img={project2}
                summery="Azizijobs is an international job portal connecting job seekers with employers globally, offering services like job posting, bid announcements, and smart job matching. It supports 251 countries using technologies like Laravel, JavaScript, AJAX, Bootstrap, and MySQL."
                link="https://azizijobs.com"
                github="#"
                type="Featured Project"
            />
        </div>

         <div className="col-span-6 sm:col-span-2">
            <Project 
                title ='Azizi Jobs LLC Website'
                img ={project3}
                summery='Azizi Jobs LLC is an eCommerce platform that facilitates connections between suppliers and retailers, offering a seamless online shopping experience. The technologies uses ReactJS, NextJS, Redux, Laravel, Tailwind, and MySQL.'
                link='https://www.azizijobsllc.us/'
                github='#'
                type="Featured Project"
            />
        </div>

         <div className="col-span-6 sm:col-span-2">
             <Project 
                title ='Peyawa Website'
                img ={project4}
                summery='Peyawa.com is an eCommerce platform offering a variety of products and services. It provides an easy-to-use online shopping experience, utilizing technologies like Laravel, JavaScript, AJAX, Bootstrap, and MySQL for smooth functionality and performance.'
                link='https://www.azizijobsllc.us/'
                github='#'
                type="Featured Project"
            />
        </div>

   
</div>

</Layout>
</main>
    
    </>
    )
}

export default projects
