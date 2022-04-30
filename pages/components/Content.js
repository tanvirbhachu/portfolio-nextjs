import Skill from './Skill'

export default function Content() {
    return (
        <div className='lg:w-1/2 lg:sticky max-w-5xl p-10 pb-0 lg:overflow-scroll lg:no-scroll'>
            <div className="lg:mt-20 mt-8">
                <h2 className="text-2xl font-medium mb-5 text-white" data-aos="fade-left" data-aos-delay="0">My Skills</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 text-neutral-400 mb-5">
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
                <h2 class="text-2xl font-medium mb-5 text-white" data-aos="fade-left" data-aos-delay="100">Projects</h2>
                <div className='mb-10'>
                    <div data-aos="fade-left" data-aos-delay="150">
                        <a href="https://astroweather-darksimilarity.netlify.app/" target="_blank"
                            class="block bg-dark/80 w-full mb-5 p-5 hover:bg-[#212121] rounded-xl transition hover:scale-105 border-neutral-700 border-2 hover:border-emerald-700">
                            <h3 class="text-2xl mb-2 text-white">AstroWeather</h3>
                            <p class="text-neutral-400 text-sm">AstroWeather is my first public project. It’s a
                                web weather app built using Tailwind CSS and makes use of a weather api for data. 
                                The app is mobile-friendly and supports both Celsius and Fahrenheit aswell as kph 
                                and mph.</p>
                            <div class="flex flex-wrap flex-grow gap-2 mt-4">
                                <div class="bg-blue-500 text-dark py-1 px-2 text-sm rounded-md">TailwindCSS</div>
                                <div class="bg-yellow-500 text-dark py-1 px-2 text-sm rounded-md">JavaScript</div>
                                <div class="bg-red-500 text-dark py-1 px-2 text-sm rounded-md">API</div>
                                <div class="bg-cyan-500 text-dark py-1 px-2 text-sm rounded-md">Netlify</div>
                            </div>
                        </a>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200">
                        <a href="https://hyperjournal.netlify.app/" target="_blank"
                            class="block bg-dark/80 w-full p-5 hover:bg-[#212121] rounded-xl transition hover:scale-105 border-neutral-700 border-2 hover:border-emerald-700">
                            <h3 class="text-2xl mb-2 text-white">HyperJournal</h3>
                            <p class="text-neutral-400 text-sm">HyperJournal is a web journal built with React plus it has dark mode. It's my first React project and 
                                also makes use of the Mantine Rich Text Editor. The journals are saved in localStorage and everything is saved in real-time.
                            </p>
                            <div class="flex flex-wrap flex-grow gap-2 mt-4">
                                <div class="bg-blue-500 text-dark py-1 px-2 text-sm rounded-md">TailwindCSS</div>
                                <div class="bg-yellow-500 text-dark py-1 px-2 text-sm rounded-md">JavaScript</div>
                                <div class="bg-blue-500 text-dark py-1 px-2 text-sm rounded-md">React</div>
                                <div class="bg-cyan-500 text-dark py-1 px-2 text-sm rounded-md">Netlify</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='h-10 lg:hidden'>

                </div>
            </div>
        </div>
    )
}