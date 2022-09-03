import '../styles/globals.css'
import dynamic from 'next/dynamic'
import AOS from 'aos'
import { useEffect } from 'react'
import Head from 'next/head'

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="description"
            content="Freelancer  |  Frontend Developer  |  I build and design modern websites that provide an amazing experience." />
        <title>Tanvir Bhachu's Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <div className='hidden sm:block'>
        <AnimatedCursor color="147, 51, 234" />
      </div>
    </>
    
  )
}

export default MyApp
