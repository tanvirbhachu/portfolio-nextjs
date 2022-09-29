import { FiLinkedin, FiArrowRight, FiGithub, FiYoutube, FiZap, FiTwitter, FiInstagram, FiAtSign, FiCoffee, FiMail, FiX } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiVercel, SiNetlify, SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { AiFillApi, AiOutlineDeploymentUnit } from "react-icons/ai";
import { BsFileRichtextFill } from "react-icons/bs"; 
import { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"  


export default function Home() {

    const [project, setProject] = useState(0)
    const [dproject, setdProject] = useState(1)
    const [projectN, setProjectN] = useState("AstroWeather")
    const [projectD, setProjectD] = useState("AstroWeather is a weather app that shows you the weather and also astronomical data for the day. It shows you the sunrise and sunset times, the moon phase and the current phase of the moon. It also shows you the current weather and lets you pick a city to see the weather for that city.")
    const [projectL, setProjectL] = useState("https://astroweather.tanvirbhachu.dev/")
    const [projectP, setProjectP] = useState("/astroweather.png")

    const [skillD, setSkillD] = useState("React is a free and open-source front-end JavaScript library for building user interfaces based on UI components")
    const [skillN, setSkillN] = useState("React")
    const [skillI, setSkillI] = useState(FaReact)
    const [skill, setSkill] = useState(1)

    function Skill(n, d, i, s) {
        setSkillD(d)
        setSkillN(n)
        setSkillI(i)
        setSkill(s)
    }

    return (
        <div className="w-full h-full overflow-hidden bg-black">

            {project != 0 && (
                <AnimatePresence>
                    <motion.div exit={{ opacity: 0, y: 100}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className={`fixed top-0 left-0 z-10 w-full h-full flex flex-col`}>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="flex-grow w-full bg-black/50"></motion.div>
                        <motion.div initial={{opacity: 0, y: 300}} animate={{opacity: 1, y: 0}}
                        className="h-fit bg-neutral-800 p-5 text-white space-y-2 relative py-8">
                            <div className="absolute flex justify-end w-full -ml-5 px-5 -mt-[60px] space-x-3">
                                <Link href={projectL} rel="noreferrer" alt="project link">
                                    <a className="p-4 bg-neutral-900 block">
                                        <FiArrowRight fontSize={26} />
                                    </a>
                                </Link>
                                <div className="p-4 bg-neutral-900" onClick={() => setProject(0)}>
                                    <FiX fontSize={26} />
                                </div>
                            </div>
                            <span className="block font-bold text-3xl">{projectN}</span>
                            <span className="block text-neutral-400">{projectD}</span>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Mobile Wrapper */}
            
            <div className="md:hidden flex flex-col w-full snap-y overflow-y-scroll scroll-smooth relative snap-mandatory h-screen">
                <div id='m-home' className="h-screen w-full relative snap-center">
                    <motion.div 
                    className="h-screen w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    >
                        <Image src='/one.jpg' layout="fill" objectFit="cover" 
                        alt='one' sizes="100vw" quality={100} />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col justify-between items-center h-full w-full">
                            <div className="md:hidden w-full flex items-center justify-right p-5 gap-5">
                                <motion.div className="flex ml-auto gap-5"
                                initial={{y: -100}}
                                animate={{y: 0}}
                                transition={{ type: "spring", bounce: 0.46 }}>
                                    <motion.div className="rounded-full p-4 bg-neutral-300 w-fit">
                                        <FiLinkedin fontSize={24} />
                                    </motion.div>
                                    <motion.div className="rounded-full p-4 bg-neutral-300 w-fit">
                                        <FiInstagram fontSize={24}/>
                                    </motion.div>
                                    <motion.div className="rounded-full p-4 bg-neutral-300 w-fit">
                                        <FiMail fontSize={24}/>
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className="text-neutral-400">
                                <motion.div className="w-full px-5 pb-64 md:hidden"
                                initial={{opacity: 0, x: -100}}
                                animate={{opacity: 1, x: 0}}
                                transition={{ type: "spring", bounce: 0.25 }}>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}}>Hey there, I am</motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="text-5xl font-bold font-inter">Tanvir Bhachu</motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}}>Welcome to my portfolio. I'm a React frontend developer with 7 years of 
                                        experience building projects and playing around with different technologies 
                                        and libraries. I plan on making cool projects and experimenting.</motion.div>
                                </motion.div>
                            </div>

                            <div className="text-neutral-400 mb-12 flex space-x-3">
                                <a className="font-bold text-lg" href='#m-projects'>Projects</a>
                                <a className="font-bold text-lg" href='#m-skills'>Skills</a>
                                <a className="font-bold text-lg" href='#m-connect'>Connect</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='m-projects' className="h-screen w-full relative snap-center">
                    <motion.div  className="h-screen w-full"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                        <Image src='/two.jpg' 
                        layout="fill" objectFit="cover" 
                        alt='one' sizes="100vw"
                        quality={100} placeholder="blur"
                        blurDataURL="/two.jpg" lazy />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col justify-between items-center h-full w-full relative">
                            <div
                            className="flex gap-3 items-center justify-start w-full p-5 px-10">
                                <motion.div initial={{width: 0}} whileInView={{width: 40}} className="rounded-full h-1 bg-white"></motion.div>
                                <div className="text-white font-inter text-2xl font-semibold"><span>PROJECTS</span></div>
                            </div>

                            <div className="w-full h-full px-5">
                                <div className="w-full text-white space-y-3">
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} onClick={() => {setProject(1); setProjectN('AstroWeather'); setProjectL('https://astroweather.tanvirbhachu.dev/');setProjectD(
                                        'AstroWeather is a weather app that shows you the weather and also astronomical data for the day. It shows you the sunrise and sunset times, the moon phase and the current phase of the moon. It also shows you the current weather and lets you pick a city to see the weather for that city.'
                                    )}} className={`overflow-hidden transition-all ease-in ${project == 1 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-4 px-10">
                                            <span className="text-2xl">AstroWeather</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} onClick={() => {setProject(2); setProjectN('Google Clone'); setProjectL('https://google.tanvirbhachu.dev/');setProjectD(
                                        "I didn't want to make an exact 1:1 clone of the Google home page so instead, I changed the design quite a bit, adding more customizability and the ability to add bookmarks. Everything is automatically saved in local storage."
                                    )}} className={`overflow-hidden transition-all ease-in ${project == 2 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-4 px-10">
                                            <span className="text-2xl">Google Clone</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} onClick={() => {setProject(3); setProjectN('Veritas'); setProjectL('https://veritas-tanvirbhachu.vercel.app/');setProjectD(
                                        'Veritas is social media platform I built from scratch. It has a fully functioning login and register system with verification and an email forgot password system. You can create posts on your account with image upload and also delete them. You can edit your profile picture and bio. It also has a global chat system where you can chat with other users.'
                                    )}} className={`overflow-hidden transition-all ease-in ${project == 3 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-4 px-10">
                                            <span className="text-2xl">Veritas</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} onClick={() => {setProject(4); setProjectN('HyperJournal'); setProjectL('https://hyperjournal.netlify.app/');setProjectD(
                                        'This was my first React project. I built a web journal using TailwindCSS and the Mantine React framework. It has a few features I added such as dark mode, a rich text editor, saving all data in local storage and using react components to tie everything together.'
                                    )}} className={`overflow-hidden transition-all ease-in ${project == 4 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-4 px-10">
                                            <span className="text-2xl">HyperJournal</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='m-skills' className="h-screen w-full relative snap-center ">
                    <motion.div  className="h-screen w-full"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                        <Image src='/three.png' 
                        layout="fill" objectFit="cover" 
                        alt='one' sizes="100vw"
                        quality={100} placeholder="blur"
                        blurDataURL="/three.png" lazy />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col justify-between items-center h-full w-full relative">
                            <div
                            className="flex gap-3 items-center justify-start w-full p-5 px-10">
                                <motion.div initial={{width: 0}} whileInView={{width: 40}} className="rounded-full h-1 bg-white"></motion.div>
                                <div className="text-white font-inter text-2xl font-semibold"><span>MAIN SKILLS</span></div>
                            </div>

                            <div className="w-full h-full px-5">
                                <div className="w-full text-white space-y-3">
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in max-h-16`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">REACT</span>
                                    </div></motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in max-h-16`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">NEXT JS</span>
                                    </div></motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in max-h-16`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">JAVASCIPT</span>
                                    </div></motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in max-h-16`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">TAILWINDCSS</span>
                                    </div></motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in max-h-16`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">SANITY CMS</span>
                                    </div></motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in max-h-16`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">MONGO DB</span>
                                    </div></motion.div>
                                    <motion.div initial={{width: 0}} whileInView={{width: '100%'}} className={`overflow-hidden transition-all ease-in`}><div className="w-full bg-[#191919] py-4 px-10 flex items-center space-x-3">
                                        <span><FiZap fontSize={25} color='yellow' /></span>
                                        <span className="text-2xl">UI DESIGN</span>
                                    </div></motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='m-connect' className="h-screen w-full relative snap-center ">
                    <motion.div  className="h-screen w-full"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>
                        <Image src='/four.jpg' 
                        layout="fill" objectFit="cover" 
                        alt='one' sizes="100vw"
                        quality={100} placeholder="blur"
                        blurDataURL="/four.jpg" lazy />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col items-center justify-between h-full w-full relative">
                            <div className="flex gap-3 mb-10 items-center justify-start w-full p-5 px-10">
                                <motion.div initial={{width: 0}} whileInView={{width: 40}} className="rounded-full h-1 bg-white"></motion.div>
                                <div className="text-white font-inter text-2xl font-semibold"><span>CONNECT WITH ME</span></div>
                            </div>

                            <div className="w-full">
                                <div className="w-full h-fit px-5 grid grid-cols-2 gap-2">
                                    <Link href='https://www.linkedin.com/in/tanvir-bhachu/' rel='norefferor noopener'><a className="w-full h-32 bg-[#191919] flex items-center justify-center">
                                        <FiLinkedin fontSize={40} stroke="white" />
                                    </a></Link>
                                    <Link href='https://www.instagram.com/tanvir.bhachu/' rel='norefferor noopener'><a className="w-full h-32 bg-[#191919] flex items-center justify-center">
                                        <FiInstagram fontSize={40} stroke="white" />
                                    </a></Link>
                                    <Link href='https://github.com/DarkSimilarity' rel='norefferor noopener'><a className="w-full h-32 bg-[#191919] flex items-center justify-center">
                                        <FiGithub fontSize={40} stroke="white" />
                                    </a></Link>
                                    <Link href='https://twitter.com/DarkSimilarity' rel='norefferor noopener'><a className="w-full h-32 bg-[#191919] flex items-center justify-center">
                                        <FiTwitter fontSize={40} stroke="white" />
                                    </a></Link>
                                    <a href='mailto:tbhachu2@gmail.com' className="w-full h-32 bg-[#191919] flex items-center justify-center">
                                        <FiMail fontSize={40} stroke="white" />
                                    </a>
                                    <Link href='#' rel='norefferor noopener'><a className="w-full h-32 bg-[#191919] flex items-center justify-center">
                                        <FiYoutube fontSize={40} stroke="white" />
                                    </a></Link>
                                </div>

                                <motion.div whileTap={{ scale: 0.9 }} className="w-full h-fit px-5 mt-2">
                                    <Link href="https://www.buymeacoffee.com/tbhachu" rel='norefferor noopener'><a className="w-full h-32 bg-[#191919] flex items-center justify-center text-white space-x-3">
                                        <FiCoffee fontSize={40} stroke="white" />
                                        <span className="font-bold text-xl">Support Me</span>
                                    </a></Link>
                                </motion.div>
                            </div>

                            <div className="text-white w-full px-5 flex-col py-5">
                                <span className="text-neutral-500">Background Images by Milad Fakurian</span>
                                <div className="flex justify-between mt-3">
                                    <a href="/Tanvir Bhachu Resume.pdf" className="font-bold text-lg">Resume</a>
                                    <a href='#m-home' className="font-bold text-lg">To Top</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Wrapper initial={{ rotate: 0 }} animate={{ rotate: 360 }} */}

            <div className="hidden md:flex flex-col w-full snap-y overflow-y-scroll scroll-smooth relative h-screen">
                <div id='home' className="h-screen w-full relative snap-center">
                    <motion.div 
                    className="h-screen w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Image src='/one.jpg' layout="fill" objectFit="cover" 
                        alt='one' sizes="100vw" quality={100} />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-5 text-white py-16">
                            <div className="w-1/2 flex flex-col justify-between h-full">
                                <div className="text-neutral-400 flex space-x-3 items-center justify-between w-fit">
                                    <motion.a transition={{delay: 0.05, type: 'spring'}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className="font-semibold text-lg" href='#projects'>Projects</motion.a>
                                    <motion.div transition={{delay: 0.1, type: 'spring'}} initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} className="w-[3px] rounded-xl h-1/2 bg-neutral-400"></motion.div>
                                    <motion.a transition={{delay: 0.15, type: 'spring'}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className="font-semibold text-lg" href='#skills'>Skills</motion.a>
                                    <motion.div transition={{delay: 0.2, type: 'spring'}} initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} className="w-[3px] rounded-xl h-1/2 bg-neutral-400"></motion.div>
                                    <motion.a transition={{delay: 0.25, type: 'spring'}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className="font-semibold text-lg" href='#connect'>Connect</motion.a>
                                </div>
                                <div className="text-neutral-400 w-3/4">
                                    <motion.div className="w-full"
                                    initial={{opacity: 0, x: -100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{ type: "spring", bounce: 0.25 }}>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} className="text-lg">Hey there, I am</motion.div>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} className="text-6xl font-bold font-inter">Tanvir Bhachu</motion.div>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.6}} className="text-lg mt-2">
                                            Welcome to my portfolio. I'm a React frontend developer with 7 years of 
                                            experience building projects and playing around with different technologies 
                                            and libraries. I plan on making cool projects and experimenting.</motion.div>
                                    </motion.div>
                                </div>
                                <motion.a
                                    href="/blog" className="flex items-center group w-fit">
                                    <motion.div initial={{scale: 0}} whileInView={{scale: 1}}
                                        className="h-12 w-12 border-2 border-neutral-700 rounded-full group-hover:scale-105 transition-all ease-in"></motion.div>
                                    <motion.span initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} delay={1}
                                    className="-ml-6 group-hover:-ml-2 transition-all ease-in z-10 font-semibold">Articles</motion.span>
                                </motion.a>
                            </div>
                            <motion.div transition={{delay: 0.2, type: 'spring'}}
                            initial={{scale: 0}} whileInView={{scale: 1}}
                            className="w-1/2 flex items-center justify-center">
                                <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="border-2 border-neutral-600 rounded-full h-[400px] w-[400px] flex items-center justify-center relative">
                                    
                                    <motion.div href="https://www.linkedin.com/in/tanvir-bhachu/" target='_blank' rel='noreferrer'
                                        initial={{ rotate: 360 }} animate={{ rotate: 0 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="border-2 border-neutral-600 rounded-full h-[300px] w-[300px] flex items-center justify-center relative">
                                        <motion.a initial={{ rotate: 0 }} animate={{ rotate: 360 }}
                                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                            className="w-[200px] h-[200px] bg-[#191919] rounded-full flex items-center justify-center">
                                            <FiLinkedin fontSize={40} />
                                        </motion.a>

                                        {/* FiInstagram */}
                                        <motion.a href="https://www.instagram.com/tanvir.bhachu/" target='_blank' rel='noreferrer' 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ rotate: 0 }} 
                                        animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="h-10 w-10 rounded-full absolute bg-[#191919] left-[-20px] top-[100px]">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <FiInstagram fontSize={20} />
                                            </div>
                                        </motion.a>
                                        {/* FiGithub */}
                                        <motion.a href="https://github.com/DarkSimilarity" target='_blank' rel='noreferrer' 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ rotate: 0 }} 
                                        animate={{ rotate: 360 }}
                                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                            className="h-10 w-10 rounded-full absolute z-10 bg-[#191919] left-1/2 top-[275px]">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <FiGithub fontSize={20} />
                                            </div>
                                        </motion.a>
                                        {/* FiCoffee */}
                                        <motion.a href="https://www.buymeacoffee.com/tbhachu" target='_blank' rel='noreferrer' 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ rotate: 0 }} 
                                        animate={{ rotate: 360 }}
                                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                            className="h-10 w-10 rounded-full absolute z-10 bg-[#191919] left-[255px] top-[50px]">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <FiCoffee fontSize={20} />
                                            </div>
                                        </motion.a>
                                    </motion.div>

                                    {/* FiMail */}
                                    <motion.a href="mailto:tbhachu2@gmail.com" target='_blank' rel='noreferrer' 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ rotate: 360 }} 
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="h-10 w-10 rounded-full absolute bg-[#191919] left-[-5px] top-[100px]">
                                        <div className="flex justify-center items-center h-full w-full">
                                            <FiMail fontSize={20} />
                                        </div>
                                    </motion.a>
                                    {/* FiTwitter */}
                                    <motion.a href="https://twitter.com/DarkSimilarity" target='_blank' rel='noreferrer' 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ rotate: 360 }} 
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="h-10 w-10 rounded-full absolute z-10 bg-[#191919] left-1/2 top-[375px]">
                                        <div className="flex justify-center items-center h-full w-full">
                                            <FiTwitter fontSize={20} />
                                        </div>
                                    </motion.a>
                                    {/* FiYoutube */}
                                    <motion.a href="mailto:tbhachu2@gmail.com" target='_blank' rel='noreferrer' 
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ rotate: 360 }} 
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="h-10 w-10 rounded-full absolute z-10 bg-[#191919] left-[330px] top-[50px]">
                                        <div className="flex justify-center items-center h-full w-full">
                                            <FiYoutube fontSize={20} />
                                        </div>
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div id='projects' className="h-screen w-full relative snap-center">
                    <motion.div className="h-screen w-full relative"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}>
                        <Image src='/two.jpg' 
                        layout="fill" objectFit="cover" alt='two' sizes="100vw"
                        quality={100} />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-5 text-white">
                            <div className="flex flex-col items-start h-full py-20 w-[350px]">
                                <div
                                className="flex gap-3 items-center justify-start pb-5 pl-5 w-[300px]">
                                    <motion.div initial={{width: 0}} whileInView={{width: 60}} className="rounded-full h-1 bg-white"></motion.div>
                                    <div className="text-white font-inter text-2xl font-semibold"><span>PROJECTS</span></div>
                                </div>

                                <div className="w-full h-full px-5">
                                    <div className="w-full text-white space-y-3">
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}} onClick={() => {setdProject(1); setProjectN('AstroWeather'); setProjectP('/astroweather.png'); setProjectL('https://astroweather.tanvirbhachu.dev/');setProjectD(
                                            'AstroWeather is a weather app that shows you the weather and also astronomical data for the day. It shows you the sunrise and sunset times, the moon phase and the current phase of the moon. It also shows you the current weather and lets you pick a city to see the weather for that city.'
                                        )}} className={`clickable overflow-hidden transition-all ease-in ${dproject == 1 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                            <div className="w-full bg-[#191919] py-3 px-10">
                                                <span className="text-xl">AstroWeather</span>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} onClick={() => {setdProject(2); setProjectN('Google Clone'); setProjectP('/google.png'); setProjectL('https://google.tanvirbhachu.dev/');setProjectD(
                                            "I didn't want to make an exact 1:1 clone of the Google home page so instead, I changed the design quite a bit, adding more customizability and the ability to add bookmarks. Everything is automatically saved in local storage."
                                        )}} className={`clickable overflow-hidden transition-all ease-in ${dproject == 2 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                            <div className="w-full bg-[#191919] py-3 px-10">
                                                <span className="text-xl">Google Clone</span>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} onClick={() => {setdProject(3); setProjectN('Veritas'); setProjectP('/veritas.png'); setProjectL('https://veritas-tanvirbhachu.vercel.app/');setProjectD(
                                            'Veritas is social media platform I built from scratch. It has a fully functioning login and register system with verification and an email forgot password system. You can create posts on your account with image upload and also delete them. You can edit your profile picture and bio. It also has a global chat system where you can chat with other users.'
                                        )}} className={`clickable overflow-hidden transition-all ease-in ${dproject == 3 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                            <div className="w-full bg-[#191919] py-3 px-10">
                                                <span className="text-xl">Veritas</span>
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} onClick={() => {setdProject(4); setProjectN('HyperJournal'); setProjectP('/hyperjournal.png'); setProjectL('https://hyperjournal.netlify.app/');setProjectD(
                                            'This was my first React project. I built a web journal using TailwindCSS and the Mantine React framework. It has a few features I added such as dark mode, a rich text editor, saving all data in local storage and using react components to tie everything together.'
                                        )}} className={`clickable overflow-hidden transition-all ease-in ${dproject == 4 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                            <div className="w-full bg-[#191919] py-3 px-10">
                                                <span className="text-xl">HyperJournal</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow h-full py-20 px-10">
                                <motion.div className="h-80 w-full rounded-xl relative border-[3px] border-[#191919] bg-[#191919] flex items-center justify-center"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 0.2}}>
                                    <Image src={projectP} objectPosition={'top'}
                                    layout="fill" objectFit="cover" alt='two' sizes="100vw"
                                    quality={100} lazy className="rounded-xl" />
                                    <motion.a href={projectL} target='_blank' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                    className="w-12 h-12 bg-[#191919] -bottom-6 right-12 absolute z-30 flex items-center justify-center">
                                        <FiArrowRight fontSize={25} />
                                    </motion.a>
                                    <span className="font-bold text-neutral-600 text-xl">Image Loading</span>
                                </motion.div>
                                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 0.3}}
                                className="font-bold text-2xl my-2">{projectN}</motion.span>
                                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{delay: 0.4}}
                                className="w-3/4 text-neutral-400">{projectD}</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='skills' className="h-screen w-full relative snap-center">
                    <motion.div className="h-screen w-full"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}>
                        <Image src='/three.png' 
                        layout="fill" objectFit="cover" alt='two' sizes="100vw"
                        quality={100} />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-5 py-20 text-white">
                            <div className="w-full h-fit flex flex-col justify-start">
                                <div className="flex flex-col items-start h-full w-[350px]">
                                    <div
                                    className="flex gap-3 items-center justify-start pb-5 pl-5 w-[300px] h-fit">
                                        <motion.div initial={{width: 0}} whileInView={{width: 60}} className="rounded-full h-1 bg-white"></motion.div>
                                        <div className="text-white font-inter text-2xl font-semibold"><span>SKILLS</span></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 w-full gap-3">
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} onClick={() => {Skill('React', "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components", FaReact, 1)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 1 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">React</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}} onClick={() => {Skill('JavaScript', "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages", IoLogoJavascript, 2)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 2 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">JavaScript</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.3}} onClick={() => {Skill('Next JS', "NextJS is a React framework that enables several extra features, including server-side rendering and generating static websites", TbBrandNextjs, 3)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 3 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">Next JS</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.35}} onClick={() => {Skill('Vercel', "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to createl at the moment of inspiration", SiVercel, 4)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 4 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">Vercel</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} onClick={() => {Skill('Netlify', "Netlify is the platform developers love for building highly-performant and dynamic websites, e-commerce stores and web applications", SiNetlify, 5)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 5 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">Netlify</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.5}} onClick={() => {Skill('NodeJS', "NodeJS (Node) is an open source development platform for executing JavaScript code server-side", IoLogoNodejs, 6)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 6 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">NodeJS</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.55}} onClick={() => {Skill('SanityCMS', "Sanity.io is the platform for structured content. It comes with an open-source editing environment called Sanity Studio that you can customize with JavaScript, and a real-time hosted data store", BsFileRichtextFill, 7)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 7 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">SanityCMS</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.60}} onClick={() => {Skill('MongoDB', "MongoDB is a non-relational document database that provides support for JSON-like storage", SiMongodb, 8)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 8 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">MongoDB</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.65}} onClick={() => {Skill('TailwindCSS', "Tailwind CSS is self-described as a utility first CSS framework. Rather than focusing on the functionality of the item being styled, Tailwind is centered around how it should be displayed", SiTailwindcss, 9)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 9 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">TailwindCSS</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.70}} onClick={() => {Skill('REST API', "A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services", AiFillApi, 10)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 10 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">REST API</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.75}} onClick={() => {Skill('UI Design', "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style", MdDesignServices, 11)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 11 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">UI Design</span>
                                        </div>
                                    </motion.div>
                                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.80}} onClick={() => {Skill('CI/CD', "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment", AiOutlineDeploymentUnit, 12)}}
                                    className={`clickable overflow-hidden transition-all ease-in ${skill == 12 ? 'border-l-8 border-[#191919] pl-4' : 'border-l-0 border-[#191919] pl-0'}`}>
                                        <div className="w-full bg-[#191919] py-3 px-10">
                                            <span className="text-xl">CI/CD</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                            className="text-white max-w-4xl flex mx-auto items-center">
                                <motion.div initial={{ rotate: 90 }} whileInView={{ rotate: 0 }} transition={{ duration: 2 }}
                                className="flex flex-grow aspect-square justify-center items-center w-28 h-28 border-2 border-[#191919] rounded-full">
                                    <span className="text-4xl">{skillI}</span>
                                </motion.div>
                                <div className="-ml-4 flex-shrink">
                                    <motion.div initial={{ width: '0%' }} whileInView={{ width: '100%' }} className="py-2 px-12 bg-[#191919]/50 max-w-fit mb-2">
                                        <span className="font-bold">{skillN}</span>
                                    </motion.div>
                                    <span className="text-neutral-400">{skillD}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div id='connect' className="h-screen w-full relative snap-center">
                    <motion.div className="h-screen w-full"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}>
                        <Image src='/four.jpg' 
                        layout="fill" objectFit="cover" alt='two' sizes="100vw"
                        quality={100} />
                    </motion.div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-5 py-20 text-white">
                        <div className="w-full h-fit flex flex-col justify-start">
                            <div className="flex flex-col items-start h-full w-[350px]">
                                <div className="flex gap-3 items-center justify-start pb-5 pl-5 w-[300px] h-fit">
                                    <motion.div initial={{width: 0}} whileInView={{width: 60}} className="rounded-full h-1 bg-white"></motion.div>
                                        <div className="text-white font-inter text-2xl font-semibold"><span>CONNECT</span></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    <div className="flex flex-col space-y-3">
                                        <motion.a href="https://www.linkedin.com/in/tanvir-bhachu/"
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-44 flex justify-center items-center">
                                            <FiLinkedin fontSize={34} />
                                        </motion.a>
                                        <motion.a href='https://github.com/DarkSimilarity'
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-44 flex justify-center items-center">
                                            <FiGithub fontSize={34} />
                                        </motion.a>
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <motion.a href='https://www.instagram.com/tanvir.bhachu/'
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-44 flex justify-center items-center">
                                            <FiInstagram fontSize={34} />
                                        </motion.a>
                                        <motion.a href='#'
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-44 flex justify-center items-center">
                                            <FiYoutube fontSize={34} />
                                        </motion.a>
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <motion.a href='mailto:tbhachu2@gmail.com'
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-44 flex justify-center items-center">
                                            <FiMail fontSize={34} />
                                        </motion.a>
                                        <motion.a href='https://twitter.com/DarkSimilarity'
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-44 flex justify-center items-center">
                                            <FiTwitter fontSize={34} />
                                        </motion.a>
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <motion.a href='https://www.buymeacoffee.com/tbhachu'
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                                        className="bg-[#191919] clickable w-full h-full flex flex-col justify-center items-center">
                                            <FiCoffee fontSize={34} />
                                            <span className="block font-bold">Support Me</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-3 right-3 z-20">
                        <div className="flex items-center justify-end text-neutral-400 text-sm space-x-3">
                            <div className="text-neutral-400 flex space-x-3 items-center justify-between w-fit">
                                <motion.a transition={{delay: 0.05, type: 'spring'}} whileHover={{ y: -2 }} whileTap={{scale: 0.9}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className="font-semibold" href='https://unsplash.com/@fakurian' target='_blank'>Background Images by Milad Fakurian</motion.a>
                                <motion.a transition={{delay: 0.15, type: 'spring'}} whileHover={{ y: -2 }} whileTap={{scale: 0.9}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className="font-semibold" href='/Tanvir Bhachu Resume.pdf'>Resume</motion.a>
                                <motion.a transition={{delay: 0.25, type: 'spring'}} whileHover={{ y: -2 }} whileTap={{scale: 0.9}} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} className="font-semibold" href='#home'>To Top</motion.a>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const hello = 'Hello World';

    return {
      props: {
        hello,
      },
    }
  }