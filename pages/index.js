import { FiSun, FiMoon, FiLinkedin, FiArrowRight, FiGithub, FiYoutube, FiTwitter, FiInstagram, FiAtSign, FiCoffee } from "react-icons/fi";
import Project from '../components/Project'
import { useState } from 'react'
import Link from "next/link";


export default function Home() {

    const [theme, setTheme] = useState('light');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(count + 1);
    }, 1000)

  return (
    <div id='main' className={`scroll-smooth w-screen overflow-x-hidden bg-white dark:bg-black dark:text-white ${theme == 'dark' ? 'dark' : ''}`}>

        <div className={`md:absolute z-50 bg-transparent dark:text-white top-0 left-0 px-5 py-5 pointer-events-none transition-all ease-in snap-none flex justify-between w-full`}>
            <a href="" className="p-2 pointer-events-initial hover:scale-105 animate__animated animate__slideInLeft animate__fast">
                {theme == 'dark' ? <FiSun fontSize={25} onClick={() => setTheme('light')} /> : <FiMoon fontSize={25} onClick={() => setTheme('dark')} />}
            </a>
            <Link href='/blog'><a className="pointer-events-initial flex gap-3 hover:gap-5 transition-all md:hidden ease-in items-center px-3 animate__animated animate__slideInRight animate__fast">
                <a>Articles</a>
                <FiArrowRight fontSize={24} />
            </a></Link>
        </div>
        
        <div className="md:snap-y scroll-smooth md:overflow-y-auto md:overflow-x-hidden snap-mandatory relative h-screen">
            <div className="snap-center bg-white dark:bg-black dark:text-white" id='home'>
                <div className="flex justify-center items-center h-screen w-full">
                    <div className="w-[500px] h-[500px] aspect-square mx-auto orbit orbit-forward rounded-full bg-transparent border-4 group border-gray-50 dark:border-[#212121] flex items-center justify-center relative">
                        <a aria-label="link" href="https://www.linkedin.com/in/tanvir-bhachu/" target='_blank' rel='noreferrer' className="orbit orbit-backward absolute top-[140px] group-hover:top-[115px] left-0 w-[30px] h-[30px] group-hover:w-[50px] group-hover:h-[50px]
                        bg-gray-200 dark:bg-[#101010] rounded-full transition-all ease-in duration-300 group-hover:bg-violet-500 flex justify-center items-center">
                            <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
                                <FiLinkedin fontSize={25} />
                            </div>
                        </a>
                        <div className='w-[350px] h-[350px] rounded-full bg-gray-50 dark:bg-[#212121] group-hover:shadow-[0px_0px_40px_0px_rgba(139,92,246,0.3)] transition-all ease-in duration-300'></div>
                    </div>
                    <div className="absolute h-screen right-0 w-fit md:flex items-center hidden">
                        <Link href='/blog'><a className="flex gap-3 hover:gap-5 transition-all ease-in items-center px-3 animate__animated animate__slideInRight animate__fast">
                            <span>Articles</span>
                            <FiArrowRight fontSize={24} />
                        </a></Link>
                    </div>
                </div>
                <div className="flex justify-center items-center h-screen w-full absolute top-0 z-10 pointer-events-none">
                    <div className="w-[450px] h-[450px] rounded-full bg-transparent flex items-center justify-center relative">
                        <div className='text-center px-5'>
                            <span className="font-bold animate__animated animate__slideInDown animate__fast md:text-base text-sm">Hey, my name is</span>
                            <h1 className="md:text-6xl text-5xl font-bold text-violet-500 animate__animated animate__fadeIn animate__fast">Tanvir Bhachu</h1>
                            <span className="mt-3 text-neutral-700 dark:text-neutral-400 text-sm animate__animated animate__slideInUp animate__fast">Welcome to my portfolio. I'm a React developer with 7 years of experience building projects and experimenting with different technologies and libraries. Enjoy my portfolio.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snap-center bg-white dark:bg-black dark:text-white" id="projects">
                <div className="flex flex-col items-center md:h-screen h-fit w-full relative md:p-12 p-4">
                    <div className="w-full flex justify-center">
                        <span className="text-xl font-bold text-violet-500">Projects</span>
                    </div>
                    <div className="w-full flex my-auto overflow-y-visible">
                        <div className="relative w-full flex md:flex-row flex-col gap-6 snap-x snap-mandatory overflow-x-hidden md:overflow-x-auto md:overflow-y-visible py-6">
                                <Project 
                                    id="one"
                                    title="Veritas" 
                                    description="Veritas is social media platform I built from scratch. It has a fully 
                                    functioning login and register system with verification and an email forgot password system. You can create posts on 
                                    your account with image upload and also delete them. You can edit your profile picture and bio. It also has a global 
                                    chat system where you can chat with other users."
                                    url="https://veritas-tanvirbhachu.vercel.app/?page=1"
                                    tailwind={true}
                                    react={true}
                                    next={true}
                                    sanity={true}
                                    mongo={true}
                                    vercel={true}
                                />
                                <Project 
                                    id="two"
                                    title="AstroWeather" 
                                    description="AstroWeather is a weather app that shows you the weather and also astronomical data 
                                    for the day. It shows you the sunrise and sunset times, the moon phase and the current phase of 
                                    the moon. It also shows you the current weather and lets you pick a city to see the weather for 
                                    that city."
                                    url="https://astroweather.tanvirbhachu.dev/"
                                    tailwind={true}
                                    react={true}
                                    next={true}
                                    vercel={true}
                                    api={true}
                                />
                                <Project 
                                    id="three"
                                    title="HyperJournal" 
                                    description="HyperJournal is a web journal built with React plus it has dark mode. It's my 
                                    first React project and also makes use of the Mantine Rich Text Editor. The journals are 
                                    saved in localStorage and everything is saved in real-time."
                                    url="https://hyperjournal.netlify.app/"
                                    tailwind={true}
                                    javascript={true}
                                    netlify={true}
                                    react={true}
                                />
                                <Project
                                    id="four" 
                                    title="Google Search Clone" 
                                    description="I didn't want to make an exact 1:1 clone of the Google home page so instead, I 
                                    changed the design quite a bit, adding more customizability and the ability to add bookmarks. 
                                    Everything is automatically saved in local storage."
                                    url="https://google-clone.tanvirbhachu.dev"
                                    tailwind={true}
                                    next={true}
                                    vercel={true}
                                    react={true}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="snap-center bg-white dark:bg-black dark:text-white" id="skills">
                <div className="flex flex-col items-center h-screen w-full relative p-12 bg-transparent">
                    <div className="w-full flex justify-center mb-5">
                        <span className="text-xl font-bold text-violet-500 md:block hidden">Skills and Technologies</span>
                        <span className="text-xl font-bold text-violet-500 block md:hidden">Skills</span>
                    </div>
                    <div className="flex flex-col my-auto md:space-y-10 relative md:max-w-3xl w-full mx-auto md:h-3/4">
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 w-full gap-4">
                            <div onMouseEnter={() => {setTitle('React'); setDescription('React is a free and open-source front-end JavaScript library for building user interfaces based on UI components')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>React</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('JavaScript'); setDescription('JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>JavaScript</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('NextJS'); setDescription('NextJS is a React framework that enables several extra features, including server-side rendering and generating static websites')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>NextJS</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('Vercel'); setDescription('Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>Vercel</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('Netlify'); setDescription('Netlify is the platform developers love for building highly-performant and dynamic websites, e-commerce stores and web applications')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>Netlify</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('NodeJS'); setDescription('NodeJS (Node) is an open source development platform for executing JavaScript code server-side')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>NodeJS</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('SanityCMS'); setDescription('Sanity.io is the platform for structured content. It comes with an open-source editing environment called Sanity Studio that you can customize with JavaScript, and a real-time hosted data store.')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>SanityCMS</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('MongoDB'); setDescription('MongoDB is a non-relational document database that provides support for JSON-like storage')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>MongoDB</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('TailwindCSS'); setDescription('Tailwind CSS is self-described as a utility first CSS framework. Rather than focusing on the functionality of the item being styled, Tailwind is centered around how it should be displayed')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>TailwindCSS</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('REST API'); setDescription('A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>REST API</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('UI Design'); setDescription('User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>UI Design</span>
                            </div>
                            <div onMouseEnter={() => {setTitle('CI/CD'); setDescription('CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment')}} onMouseLeave={() => {setTitle(''); setDescription('')}} className="project">
                                <span>CI/CD</span>
                            </div>
                        </div>

                        <div className="md:absolute w-full bottom-5 mt-5">
                            <div className="flex flex-col space-y-3 text-center max-w-3xl mx-auto min-h-[100px] transition-all ease-in">
                                <span className="font-bold text-lg">{title}</span>
                                <span className="text-neutral-700 dark:text-neutral-300">{description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snap-center bg-white dark:bg-black dark:text-white border-0 relative" id='connect'>
                <div className="flex justify-center items-center h-screen w-full bg-transparent">
                    <div className="w-[500px] h-[500px] m-auto relative group hidden md:flex">
                        <div className="icon-l1 z-[4] border-4 border-gray-50 dark:border-[#212121]"></div>
                        <a aria-label="link" href="https://github.com/DarkSimilarity" target='_blank' rel='noreferrer' className="icon-l1 z-[5]">
                            <div className="icon-l2 group-hover:bg-[#101010] pointer-events-auto">
                                <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
                                    <FiGithub fontSize={25} />
                                </div>
                            </div>
                        </a>
                        <a aria-label="link" href="https://github.com/DarkSimilarity" target='_blank' rel='noreferrer' className="animation-delay icon-l1 z-[6] border-transparent">
                            <div className="icon-l2 animation-delay group-hover:bg-[#FF0000]">
                                <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
                                    <FiYoutube fontSize={25} />
                                </div>
                            </div>
                        </a>
                        <a aria-label="link" href="https://twitter.com/DarkSimilarity" target='_blank' rel='noreferrer' className="animation-delay-1 icon-l1 z-[7] border-transparent">
                            <div className="icon-l2 animation-delay-1 group-hover:bg-[#1DA1F2]">
                                <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
                                    <FiTwitter fontSize={25} />
                                </div>
                            </div>
                        </a>
                        <a aria-label="link" href="https://www.instagram.com/tanvir.bhachu/" target='_blank' rel='noreferrer' className="animation-delay-1-5 icon-l1 z-[8] border-transparent">
                            <div className="icon-l2 animation-delay-1-5 group-hover:bg-[#E1306C]">
                                <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
                                    <FiInstagram fontSize={25} />
                                </div>
                            </div>
                        </a>
                        <a aria-label="link" href="mailto:tbhachu2@gmail.com" target='_blank' rel='noreferrer' className="animation-delay-2 icon-l1 z-[9] border-transparent">
                            <div className="icon-l2 animation-delay-2 group-hover:bg-emerald-500">
                                <div className="text-transparent group-hover:text-white transition-all ease-in duration-300 delay-150">
                                    <FiAtSign fontSize={25} />
                                </div>
                            </div>
                        </a>
                        <div className="">
                            <a aria-label="link" href="https://www.buymeacoffee.com/tbhachu" target='_blank' rel='noreferrer' className="animation-delay-2-5 icon-l1 z-[10] border-transparent">
                                <div className="icon-l2 animation-delay-2-5 group-hover:bg-[#FFD600] hover:bg-[#101010]">
                                    <div className="text-transparent group-hover:text-black transition-all ease-in duration-300 delay-150">
                                        <FiCoffee fontSize={25} />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="absolute z-50 w-[300px] h-[300px] top-[100px] left-[100px] flex justify-center items-center">
                            <a aria-label="link" href='https://www.linkedin.com/in/tanvir-bhachu/' target='_blank' rel='noreferrer' className='pointer-events-initial w-[300px] h-[300px] flex justify-start items-center text-center hover:scale-105 rounded-full bg-gray-50 dark:bg-[#212121] group-hover:shadow-[0px_0px_40px_0px_rgba(139,92,246,0.3)] transition-all ease-in duration-300'>
                                <div className="w-full text-center">
                                    <h2 className="group-hover:hidden block text-4xl font-bold text-violet-500">Let's Connect</h2>
                                    <div className="group-hover:flex hidden mx-auto w-fit text-violet-500"><FiLinkedin fontSize={55} /></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Mobile */}

                    <div className="md:hidden flex flex-col justify-center items-center">
                        <h2 className="text-4xl font-bold text-violet-500 my-10">Let's Connect</h2>
                        <div className="w-[300px] h-[300px] flex justify-center items-center">
                            <a aria-label="link" href='https://www.linkedin.com/in/tanvir-bhachu/' target='_blank' rel='noreferrer' className='pointer-events-initial w-[300px] h-[300px] flex justify-start items-center text-center hover:scale-105 rounded-full bg-gray-50 dark:bg-[#212121] group-hover:shadow-[0px_0px_40px_0px_rgba(139,92,246,0.3)] transition-all ease-in duration-300'>
                                <div className="w-full text-center">
                                    <div className="flex mx-auto w-fit text-violet-500"><FiLinkedin fontSize={55} /></div>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-3 mt-6 px-5">
                            <a aria-label="link" href="https://github.com/DarkSimilarity" target='_blank' rel='noreferrer' className="group p-4 rounded-full bg-[#101010] border-transparent">
                                <div className="text-white transition-all ease-in duration-300 delay-150">
                                    <FiGithub fontSize={25} />
                                </div>
                            </a>
                            <a aria-label="link" href="https://www.buymeacoffee.com/tbhachu" target='_blank' rel='noreferrer' className="group p-4 rounded-full bg-[#FF0000] border-transparent">
                                <div className="text-white transition-all ease-in duration-300 delay-150">
                                    <FiYoutube fontSize={25} />
                                </div>
                            </a>
                            <a aria-label="link" href="https://twitter.com/DarkSimilarity" target='_blank' rel='noreferrer' className="group p-4 rounded-full bg-[#1DA1F2] border-transparent">
                                <div className="text-white transition-all ease-in duration-300 delay-150">
                                    <FiTwitter fontSize={25} />
                                </div>
                            </a>
                            <a aria-label="link" href="https://www.instagram.com/tanvir.bhachu/" target='_blank' rel='noreferrer' className="group p-4 rounded-full bg-[#E1306C] border-transparent">
                                <div className="text-white transition-all ease-in duration-300 delay-150">
                                    <FiInstagram fontSize={25} />
                                </div>
                            </a>
                            <a aria-label="link" href="mailto:tbhachu2@gmail.com" target='_blank' rel='noreferrer' className="group p-4 rounded-full bg-emerald-500 border-transparent">
                                <div className="text-white transition-all ease-in duration-300 delay-150">
                                    <FiAtSign fontSize={25} />
                                </div>
                            </a>
                            <a aria-label="link" href="https://www.buymeacoffee.com/tbhachu" target='_blank' rel='noreferrer' className="group p-4 rounded-full bg-[#FFD600] border-transparent">
                                <div className="text-black transition-all ease-in duration-300 delay-150">
                                    <FiCoffee fontSize={25} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full bottom-0 absolute py-5 md:px-12 px-5 flex justify-between z-[100] bg-transparent text-neutral-700 dark:text-neutral-300">
                    <a href="/Tanvir Bhachu Resume.pdf" className="hover:font-bold transition-all ease-in">Resume</a>
                    <a href="#home" className="hover:font-bold transition-all ease-in">Back to Top</a>
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