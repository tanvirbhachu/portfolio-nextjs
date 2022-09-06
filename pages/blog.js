import Head from 'next/head'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Card from '../components/Card'
import 'animate.css'

import Link from 'next/link'
import groq from 'groq'
import client from '../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export default function App({posts}) {

  console.log(posts)

  return (
    <div className='w-screen h-screen bg-dark text-white bg-cover overflow-hidden'>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
            content="Freelancer  |  Frontend Developer  |  I build and design modern websites that provide an amazing experience." />
        <title>Tanvir Bhachu's Blog</title>
      </Head>

      <div className='py-4 px-5 md:px-10 w-screen h-fit fixed bg-[#212121] text-white flex items-center justify-between animate__animated animate__fadeInDown'>
          <div id="name" className="md:text-xl text-xl h-full font-bold bg-clip-text 
          text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Tanvir's Blog</div>
            <div className='space-x-4'>
                <Link href="/blog"><a className='hover:text-indigo-600 transition-all ease-in font-semibold '>Blog</a></Link>
                <Link href="/"><a className='hover:text-indigo-600 transition-all ease-in font-semibold '>Portfolio</a></Link>
            </div>
        </div>

      <div className='w-full h-full flex flex-col max-w-7xl mx-auto pt-[80px]'>
        
        <ResponsiveMasonry className="mx-2" columnsCountBreakPoints={{350: 1, 500: 2, 700: 3, 900: 4}}>
              <Masonry gutter="10px">
              {posts.length > 0 && posts.map(
                  ({ mainImage, title = '', slug = '', publishedAt = '' }) =>
                    slug && (
                      <Card title={title} slug={slug} publishedAt={publishedAt} url={urlFor(mainImage).width(1000).url()} />
                    )
                )}
              </Masonry>
          </ResponsiveMasonry>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post"] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}