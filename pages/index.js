import Head from 'next/head'
import { useState } from 'react'
import Profile from './components/Profile'
import Content from './components/Content'
import Overlay from './components/Overlay'

export default function App() {

  const [overlay, toggleOverlay] = useState(false)

  function toggle() {
    toggleOverlay(n => !n)
  }

  function main() {
    return (
      <div>
        <div className='lg:w-1/2 bg-dark h-screen absolute left-0' data-aos="fade-left" data-aos-delay="0">
        </div>

        <div className='z-10'>
          <div className='max-w-7xl mx-auto h-screen flex'>
            <div className='lg:flex lg:flex-row flex-col mx-auto h-screen'>
              <Profile toggle={toggle} />
              <Content />
            </div>
          </div>
        </div>
      </div>
    )
  }

  //<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>

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
