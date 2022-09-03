import Social from "./Social"
import Link from "next/link"

export function Profile(props) {

    return (
        <div className={`lg:w-1/2 lg:sticky lg:overflow-y-scroll overflow-x-hidden max-w-5xl p-10 md:pb-10 pb-0 ${props.close ? "animate__animated animate__fadeOutLeft animate-delay-2" : ""}`}>
            <div className="mb-5 mt-20">
                <div className={``}>
                    <span className="text-emerald-700" data-aos="fade-right">Hey, my name is</span>
                    <h1 className="md:text-5xl text-4xl font-bold mb-4 text-white" data-aos="fade-right" data-aos-delay="50">Tanvir Bhachu</h1>
                </div>
                <div className={``}>
                    <p className="text-neutral-400 mb-4 text-base" data-aos="fade-right" data-aos-delay="100">
                        I'm a web developer and UX architect. My
                        superpower? I create web magic. Although I have been programming for over 6 years, I mostly
                        created personal projects so now I'm focusing on creating portfolio projects.</p>
                    <p className="text-neutral-400 text-base" data-aos="fade-right" data-aos-delay="150">
                        Besides programming, I am also a web designer. I
                        mainly create modern designs, ones that keep up with today's standards
                        and look visually appealing while also providing function and a great user experience.</p>
                </div>
            </div>
            <div className={`mb-10 flex gap-4`} data-aos="fade-right" data-aos-delay="250">
                {/*<button onClick={() => props.toggle()} className="text-white border-2 border-white rounded-lg px-5 py-2 hover:bg-emerald-700 hover:border-emerald-700 transition ease-in" data-aos="fade-right" data-aos-delay="200">Freelancing</button>*/}
                <a href="mailto:tbhachu2@gmail.com" className="text-white border-2 border-white rounded-lg px-8 py-2 hover:bg-emerald-700 hover:border-emerald-700 transition ease-in">Email</a>
                {/*<a onClick={props.toBlog} className="text-white border-2 border-white rounded-lg px-8 py-2 hover:bg-emerald-700 hover:border-emerald-700 transition ease-in">Blog</a>*/}
            </div>
            <div className='mb-1'>
                <h2 className="text-2xl font-medium mb-5 text-white" data-aos="fade-right" data-aos-delay="300">Socials</h2>
                <div className="flex flex-row gap-2 max-w-[400px] text-neutral-400" data-aos="fade-right" data-aos-delay="350">
                    {/*<Social name='Instagram' color='hover:border-fuchsia-500' url='https://www.instagram.com/darksimilarity/'/>*/}
                    <Social name="Twitter" color="hover:border-blue-500" url="https://twitter.com/DarkSimilarity" />
                    <Social name="LinkedIn" color="hover:border-yellow-500" url="https://www.linkedin.com/in/tanvir-bhachu/" />
                    <Social name="Github" color="hover:border-red-500" url="https://github.com/DarkSimilarity" />
                </div>
            </div>
        </div>
    )
}

export default function Left(props) {

    return (
        <div className={`lg:w-1/2 lg:sticky lg:overflow-y-scroll overflow-x-hidden pb-0 ${props.close ? "animate__animated animate__fadeOutLeft animate-delay-2" : ""}`}>
            <div className="h-full flex text-white">
                <div className="md:h-fit h-screen w-fit p-5 flex flex-col my-auto md:ml-auto justify-center mx-auto max-w-xl">
                    <div className="w-fit">
                        <span className="">Hey, my name is</span>
                        <h1 className="md:text-6xl text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Tanvir Bhachu</h1>
                    </div>
                    <div className="">
                        <p className="text-neutral-400 mb-4 text-base">
                        Welcome to my portfolio. I'm an 18 year old react developer and I've been coding for like 7 years now. I do a lot 
                        of things and am slowly adding more, so have fun exploring!</p>
                    </div>
                    <div className="flex gap-3 w-full">
                        <a className="flex-1 text-center" href="https://www.linkedin.com/in/tanvir-bhachu/" target="_blank" rel="noreferrer">
                            <div className="bg-[#212121] hover:bg-indigo-600 transition-all ease-in p-3">
                                <span>LinkedIn</span>
                            </div>
                        </a>
                        <a className="flex-1 text-center" href="mailto:tbhachu2@gmail.com" rel="noreferrer">
                            <div className="bg-[#212121] hover:bg-indigo-600 transition-all ease-in p-3">
                                <span>Email</span>
                            </div>
                        </a>
                        <a className="flex-1 text-center" href="/Tanvir Bhachu Resume.pdf" target="_blank" rel="noreferrer">
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