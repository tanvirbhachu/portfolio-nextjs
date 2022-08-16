import Skill from './Skill'

export default function Content(props) {
    return (
        <div className={`lg:w-1/2 max-w-5xl md:p-10 px-10 pb-0 overflow-x-hidden lg:no-scroll ${props.close ? "animate__animated animate__fadeOutRight animate-delay-2" : ""}`}>
            <div className="lg:mt-20 mt-8">
                <h2 className="text-2xl font-medium mb-5 text-white animate__animated animate__fadeInRight">My Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 text-neutral-400 mb-5">
                    <Skill name='JavaScript' color='hover:text-yellow-500 hover:border-yellow-500' url='https://developer.mozilla.org/en-US/docs/Web/JavaScript'/>
                    <Skill name='REST APIs' color='hover:text-red-500 hover:border-red-500' url='https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces'/>
                    <Skill name='Sanity CMS' color='hover:text-orange-500 hover:border-orange-500' url='https://www.sanity.io/'/>
                    <Skill name='TailwindCSS' color='hover:text-blue-500 hover:border-blue-500' url='https://tailwindcss.com/'/>
                    <Skill name='NodeJS' color='hover:text-green-500 hover:border-green-500' url='https://nodejs.org/en/'/>
                    <Skill name='MongoDB' color='hover:text-emerald-500 hover:border-emerald-500' url='https://www.mongodb.com/' />
                    <Skill name='Netlify' color='hover:text-cyan-500 hover:border-cyan-500' url='https://www.netlify.com/'/>
                    <Skill name='Vercel' color='hover:text-purple-500 hover:border-purple-500' url='https://vercel.com/home'/>
                    <Skill name='React JS' color='hover:text-blue-500 hover:border-blue-500' url='https://reactjs.org/'/>
                    <Skill name='Next JS' color='hover:text-blue-500 hover:border-blue-500' url='https://nextjs.org/'/>
                </div>
                <h2 className="text-2xl font-medium mb-5 text-white">Projects</h2>
                <div className='space-y-5'>
                    <div>
                        <div className='animate__animated animate__slideInRight'>
                            <a href="https://astroweather-tanvirbhachu.netlify.app/" target="_blank" rel="noreferrer"
                                className="block bg-dark/80 w-full p-5 hover:bg-[#212121] rounded-xl transition hover:scale-105 border-neutral-700 border-2 hover:border-emerald-700">
                                <h3 className="text-2xl mb-2 text-white">AstroWeather</h3>
                                <p className="text-neutral-400 text-sm">AstroWeather is my first public project. It’s a
                                    web weather app built using Tailwind CSS and makes use of a weather api for data. 
                                    The app is mobile-friendly and supports both Celsius and Fahrenheit aswell as kph 
                                    and mph.
                                </p>
                                <div className="flex flex-wrap flex-grow gap-2 mt-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">TailwindCSS</span>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
                                    <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">API</span>
                                    <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Netlify</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='animate__animated animate__slideInRight'>
                            <a href="https://hyperjournal.netlify.app/" target="_blank" rel="noreferrer"
                                className="block bg-dark/80 w-full p-5 hover:bg-[#212121] rounded-xl transition hover:scale-105 border-neutral-700 border-2 hover:border-emerald-700">
                                <h3 className="text-2xl mb-2 text-white">HyperJournal</h3>
                                <p className="text-neutral-400 text-sm">HyperJournal is a web journal built with React plus it has dark mode. It's my first React project and 
                                    also makes use of the Mantine Rich Text Editor. The journals are saved in localStorage and everything is saved in real-time.
                                </p>
                                <div className="flex flex-wrap flex-grow gap-2 mt-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">TailwindCSS</span>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">React</span>
                                    <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Netlify</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='animate__animated animate__slideInRight'>
                            <a href="https://google-clone-tanvirbhachu.vercel.app/" target="_blank" rel="noreferrer"
                                className="block bg-dark/80 w-full p-5 hover:bg-[#212121] rounded-xl transition hover:scale-105 border-neutral-700 border-2 hover:border-emerald-700">
                                <h3 className="text-2xl mb-2 text-white">Google Search Clone</h3>
                                <p className="text-neutral-400 text-sm">Not a complete 1:1 clone as I added my own twist to it. I built this using Next JS and Tailwind CSS. 
                                It has some extra features like editing the colors and add quick links. Everything also gets saved to localStorage.
                                </p>
                                <div className="flex flex-wrap flex-grow gap-2 mt-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">ReactJS</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">NextJS</span>
                                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Vercel</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">TailwindCSS</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='h-10 lg:hidden'>

                </div>
            </div>
        </div>
    )
}