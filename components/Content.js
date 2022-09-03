import Project from './Project'
import { useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useWindowDimensions from '../hooks/useWindowDimensions';

gsap.registerPlugin(ScrollTrigger);

export default function Content(props) {

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (width > 768) {
            gsap.fromTo("#one", {opacity: 0, x: 40}, {opacity: 1, x: 0, duration: 0.5, ease: "none", scrollTrigger: {scroller: "#trigger", trigger: "#one", start: "top bottom", }});
            gsap.fromTo("#two", {opacity: 0, x: 40}, {opacity: 1, x: 0, duration: 0.5, ease: "none", delay: 0.1, scrollTrigger: {scroller: "#trigger", trigger: "#two", start: "top bottom", }});
            gsap.fromTo("#three", {opacity: 0, x: 40}, {opacity: 1, x: 0, duration: 0.5, ease: "none", delay: 0.2, scrollTrigger: {scroller: "#trigger", trigger: "#three", start: "top bottom", }});
            gsap.fromTo("#four", {opacity: 0, x: 40}, {opacity: 1, x: 0, duration: 0.5, ease: "none", scrollTrigger: {scroller: "#trigger", trigger: "#four", start: "top bottom", }});
        } else {
            gsap.fromTo("#one", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 0.5, ease: "none", scrollTrigger: {trigger: "#one", start: "top bottom", }});
            gsap.fromTo("#two", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 0.5, ease: "none", scrollTrigger: {trigger: "#two", start: "top bottom", }});
            gsap.fromTo("#three", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 0.5, ease: "none", scrollTrigger: {trigger: "#three", start: "top bottom", }});
            gsap.fromTo("#four", {opacity: 0, x: 50}, {opacity: 1, x: 0, duration: 0.5, ease: "none", scrollTrigger: {trigger: "#four", start: "top bottom", }});
        }
    }, [])

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
                        description="AstroWeather is my first public project. It's a
                        web weather app built using Tailwind CSS and makes use of a weather api for data. 
                        The app is mobile-friendly and supports both Celsius and Fahrenheit aswell as kph 
                        and mph."
                        url="https://astroweather-tanvirbhachu.netlify.app/"
                        tailwind={true}
                        javascript={true}
                        netlify={true}
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
                        description="Not a complete 1:1 clone as I added my own twist to it. I built this using 
                        Next JS and Tailwind CSS. It has some extra features like editing the colors and add 
                        quick links. Everything also gets saved to localStorage."
                        url="https://google-clone-tanvirbhachu.vercel.app/"
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