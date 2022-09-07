import { useEffect } from "react"
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Left() {

    useEffect(() => {
        gsap.to('#name', {duration: 2, text: "Tanvir Bhachu", ease: "expo"});
        gsap.to("#b1", {yPercent: 10, opacity: 1, duration: 0.5, delay: 0});
        gsap.to("#b2", {yPercent: 10, opacity: 1, duration: 0.5, delay: 0.2});
        gsap.to("#b3", {yPercent: 10, opacity: 1, duration: 0.5, delay: 0.4});
    }, [])

    return (
        <div className="lg:w-1/2 lg:sticky lg:overflow-y-scroll overflow-x-hidden pb-0">
            <div className="h-full flex text-white">
                <div className="md:h-fit h-screen w-fit p-5 flex flex-col my-auto md:ml-auto justify-center mx-auto max-w-xl">
                    <div className="w-fit">
                        <span>Hey, my name is</span>
                        <div id="name" className="md:text-6xl text-5xl md:h-[60px] h-full font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">T</div>
                    </div>
                    <div className="">
                        <p className="text-neutral-400 mb-4 text-base">
                        Welcome to my portfolio. I'm a React frontend developer with 7 years of experience building projects 
                        and playing around with different technologies and libraries. I plan on making cool projects and 
                        experimenting.</p>
                    </div>
                    <div className="flex gap-3 w-full">
                        <a id="b1" className="flex-1 text-center opacity-0" href="https://www.linkedin.com/in/tanvir-bhachu/" target="_blank" rel="noreferrer">
                            <div className="bg-[#212121] hover:bg-indigo-600 transition-all ease-in p-3">
                                <span>LinkedIn</span>
                            </div>
                        </a>
                        <a id="b2" className="flex-1 text-center opacity-0" href="mailto:tbhachu2@gmail.com" rel="noreferrer">
                            <div className="bg-[#212121] hover:bg-indigo-600 transition-all ease-in p-3">
                                <span>Email</span>
                            </div>
                        </a>
                        <a id="b3" className="flex-1 text-center opacity-0" href="/Tanvir Bhachu Resume.pdf" target="_blank" rel="noreferrer">
                            <div className="bg-[#212121] hover:bg-indigo-600 transition-all ease-in p-3">
                                <span>Resume</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}