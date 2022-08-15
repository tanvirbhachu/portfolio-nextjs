import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Profile from '../components/Profile'
import Content from '../components/Content'
import Overlay from '../components/Overlay'
import 'animate.css'

export default function App() {

  const router = useRouter()

  const [overlay, toggleOverlay] = useState(false)
  const [close, toggleClose] = useState(false)

  function toggle() {
    toggleOverlay(n => !n)
  }

  function blog() {
    toggleClose(true)

    setTimeout(() => {
        router.push('/');
    }, 800);
  }

  function main() {
    return (
      <div className='w-screen no-scroll overflow-hidden bg-dark'>
        <div className={`w-full bg-leaves h-[200px] block ${close ? "animate__animated animate__fadeOutLeft animate-delay-4" : "" }`} data-aos="fade-left" data-aos-delay="0">
        
        </div>

        <div className='z-10'>
          <div className='max-w-7xl mx-auto h-screen flex'>
            <div className='lg:flex lg:flex-row flex-col mx-auto h-screen'>
              <Profile toggle={toggle} toBlog={blog} close={close} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='lg:bg-leaves bg-dark bg-cover'>
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
