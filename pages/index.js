import Head from 'next/head'
import { useState, useEffect } from 'react'
import Profile from '../components/Profile'
import Content from '../components/Content'
import Overlay from '../components/Overlay'
import { gsap } from "gsap";
import Link from 'next/link'


export default function App({posts}) {
  useEffect(() => {
    gsap.from("#bg-abs", {xPercent: -100, duration: 1, ease: "power4.out"});
    gsap.to("#bg-abs", {xPercent: 0, duration: 1});
  }, [])

  const [overlay, toggleOverlay] = useState(false)

  function toggle() {
    toggleOverlay(n => !n)
  }

  function main() {
    return (
      <div className='w-screen no-scroll overflow-x-hidden md:bg-leaves bg-dark bg-cover'>
        <div id="bg-abs" className="lg:w-1/2 w-full bg-dark h-screen absolute md:block hidden left-0">
        </div>
        <Link href="/blog">
          <a className='block p-2 px-4 absolute top-2 left-2 text-white hover:text-purple-500 transition-all ease-in'>
            <span className='text-lg font-bold'>Blog</span>
          </a>
        </Link>
        <div className='absolute top-2 right-2'>
          <a href="https://www.buymeacoffee.com/tbhachu" target="_blank" rel="noreferrer" className='block p-2 px-4 text-white bg-[#101010] hover:bg-[#212121] transition hover:scale-105 md:border-[#101010] border-[#212121] border-2 hover:border-indigo-600'>
            <span>Buy me a coffee</span>
          </a>
        </div>
        <div className='z-10'>
          <div className='max-w-7xl mx-auto md:h-screen flex overflow-x-hidden'>
            <div className='lg:flex lg:flex-row flex-col mx-auto md:h-screen'>
              <Profile toggle={toggle} />
              <Content />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='lg:bg-leaves bg-dark bg-cover overflow-x-hidden md:w-screen w-full'>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
            content="Freelancer  |  Frontend Developer  |  I build and design modern websites that provide an amazing experience." />
        <title>Tanvir Bhachu Portfolio</title>
      </Head>

    {overlay ? <Overlay toggle={toggle} /> : main()}
    </div>
  )
}
