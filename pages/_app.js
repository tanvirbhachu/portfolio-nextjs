export { reportWebVitals } from 'next-axiom';
import '../styles/globals.css'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import 'animate.css';

function MyApp({ Component, pageProps }) {

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
            content="Freelancer  |  Frontend Developer  |  I build and design modern websites that provide an amazing experience." />
        <title>Tanvir Bhachu's Portfolio</title>
        <link rel="icon" href="/man.png" />
      </Head>
      <Component {...pageProps} />
      <div className='hidden sm:block cursor-none'>
        <AnimatedCursor 
        color="147, 51, 234"
        clickables={['.clickable', 'a']} />
      </div>
    </>
    
  )
}

export default MyApp
