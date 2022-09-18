import Project from './Project'

export default function Content() {

    return (
        <div id="trigger" className="lg:w-1/2 max-w-5xl md:p-10 px-5 pb-0 overflow-x-hidden overflow-y-scroll lg:no-scroll">
            <div className="lg:mt-20 mt-8">
                <h2 className="text-3xl font-bold mb-5 text-white">Projects</h2>
                <div className='space-y-5'>
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
                <div className='h-10 lg:hidden md:bg-red-600'></div>
            </div>
        </div>
    )
}