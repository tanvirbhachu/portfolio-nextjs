import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Card from '../components/Card'
import 'animate.css'

export default function App() {

  const router = useRouter()

  const [blogPage, setBlogPage] = useState("")
  const [blog, setBlog] = useState(false)

  function index() {
    setTimeout(() => {
        router.push('/');
    }, 800);
  }

  return (
    <div className='w-screen h-screen lg:bg-leaves bg-dark text-white bg-cover overflow-hidden'>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
            content="Freelancer  |  Frontend Developer  |  I build and design modern websites that provide an amazing experience." />
        <title>Tanvir Bhachu's Blog</title>
      </Head>

      {blog ? (
        <div className='w-full h-full flex flex-col max-w-7xl mx-auto border-8 border-red-700'>
        <div className='flex flex-col justify-between items-center p-6 relative text-white'>
          <div className='h-full md:flex items-center absolute left-0 pl-6 hidden'>
            <span onClick={index} className='hover:scale-105 transition-all ease-in'>My portfolio</span>  
          </div>
          <p className='font-semibold'>Tanvir Bhachu's</p>
          <h1 className='text-4xl font-bold'>BLOG</h1>
        </div>
        <ResponsiveMasonry className="mx-2" columnsCountBreakPoints={{350: 1, 500: 2, 700: 3, 900: 4}}>
              <Masonry gutter="10px">
                  <Card title="How I created a Social Media App from scratch" description="I felt bored so I decided to build a fully functioning social media platform using React, NextJS, Sanity CMS, MongoDB, TailwindCSS." />
              </Masonry>
          </ResponsiveMasonry>
      </div>
      ) : (
        <div className='w-full h-full flex flex-col max-w-7xl mx-auto border-8 border-red-700'>
          <div className='flex flex-col justify-center items-center p-6 relative text-white'>
            <p className='font-semibold'>Tanvir Bhachu's</p>
            <h1 className='text-4xl font-bold'>BLOG</h1>
            <div className='h-full md:flex items-center absolute left-0 pl-6 hidden'>
              <span onClick={index} className='hover:scale-105 transition-all ease-in'>My portfolio</span>  
            </div>
          </div>
          <ResponsiveMasonry className="mx-2" columnsCountBreakPoints={{350: 1, 500: 2, 700: 3, 900: 4}}>
                <Masonry gutter="10px">
                    <Card title="How I created a Social Media App from scratch" description="I felt bored so I decided to build a fully functioning social media platform using React, NextJS, Sanity CMS, MongoDB, TailwindCSS." />
                </Masonry>
            </ResponsiveMasonry>
        </div>
      )}
    </div>
  )
}
