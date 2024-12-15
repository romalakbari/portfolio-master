
import react from "react"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import profilepic from "../../public/images/profile/developer-pic-5.jpg";
import Skill from "@/components/Skill"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransationEffect from '@/components/TransationEffect'

const AnimatedNumbers = ({value})=>{
  
  const ref = useRef(null);

  const  motionValue = useMotionValue(0);
  const  springValue  = useSpring(motionValue, { duration: 3000 })
  const isInView  = useInView(ref,{once:true});
  
  useEffect(() =>{

    if(isInView){
      motionValue.set(value)
    }
  }, [isInView, value,motionValue])


  useEffect(() =>{

    springValue.on("change",(latest) => {

      if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
      }
    })

  }, [springValue, value])

  return <span ref={ref}></span>

}

const about =()=>{

  return (
      <>
        <Head className="absolute right-8 bottom-8 inline-block w-24">
          <title>Romal Akbari | About Page</title>
          <meta name="description" content ="any description" />
        </Head>
        <TransationEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
           <Layout className="pt-16">
             <AnimatedText text ="Passion Fuels Purpose!"  className='mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xl:text-6xl' />
             <div className ='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                <div className='col-span-3  flex flex-col items-start  justify-start xl:col-span-4 md:order-2  md:col-span-8'>
                  <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>

                  <p className='font-medium'>Hi, I'm Romal Akbari, Senior software developer and UI/UX designer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. With over 5 years of experience in the field. I am always looking for 
                    new and innovative ways to bring my clients' visions to life.
                    </p>

                    <p className='my-4 font-medium'>
                    I believe that design is about more than just making things look pretty – it's about solving problems and 
                    creating intuitive, enjoyable experiences for users. 

                    </p>
                    <p className='font-medium'>
                    Whether I'm working on a website, mobile app, or 
                    other digital product, I bring my commitment to design excellence and user-centered thinking to 
                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>


                <div
                 className ='relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-3 md:order-1 md:col-span-8  '>
                    
                      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  " />
                       {/* <Image src={profilepic}  alt="codebuck" className='h-auto w-full rounded-2xl' /> */}

                       <Image src={profilepic} alt="CodeBucks" className="w-full h-auto rounded-2xl"
                          priority
                          sizes ="(max-width: 768px) 100vw,
                          (max-width:1200px) 50vw,
                          33vs"
                        />

                </div>


                <div className='col-span-2 flex flex-col items-end justify-between'>

                  <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                      <AnimatedNumbers value={4} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>satisfied clients</h2>
                  </div>

                  <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={4} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>projects completed</h2>
                  </div>

                  <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={5} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>years of experience</h2>
                  </div>
                  

                </div>
             </div>

             <Skill />
             <Experience />
             <Education />
           </Layout>

        </main>
      </>
  )
}

export default about