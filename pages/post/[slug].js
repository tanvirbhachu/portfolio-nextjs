import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../lib/sanity'
import Link from 'next/link'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    marks: {
        link: ({value, children}) => {
          return (
            <a className='text-neutral-300 hover:text-indigo-600 transition-all ease-in' href={value?.href} target="_blank" rel="noreferrer">
              {children}
            </a>
          )
        },
    },
    block: {
        h3: ({children}) => <h3 className="text-2xl mt-8 font-bold">{children}</h3>,
        normal: ({children}) => <p className="mt-2 text-lg text-neutral-400">{children}</p>,
    },
   types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img alt={value.alt || ' '} loading="lazy" src={urlFor(value).width(320).height(240).fit('max').auto('format')} />
            )
        }
    }
}

const Post = ({post}) => {
  const {
    title = '',
    mainImage = {},
    publishedAt = '',
    body = []
  } = post

  return (
    <div className='w-full overflow-x-hidden'>
        <div>
            <div className='py-4 px-5 md:px-10 w-screen h-fit fixed bg-[#212121] text-white flex items-center justify-between animate__animated animate__fadeInDown'>
              <div id="name" className="md:text-xl text-xl h-full font-bold bg-clip-text 
              text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Tanvir's Blog</div>
                <div className='space-x-4'>
                    <Link href="/blog"><a className='hover:text-indigo-600 transition-all ease-in font-semibold '>Blog</a></Link>
                    <Link href="/"><a className='hover:text-indigo-600 transition-all ease-in font-semibold '>Portfolio</a></Link>
                </div>
            </div>
            <div className='text-white max-w-5xl p-5 mx-auto flex flex-col pt-[80px]'>
                <div className='mb-5 w-full md:h-96 h-44 bg-cover bg-center rounded-xl' style={{backgroundImage: "url(" + urlFor(mainImage).width(2500).url() + ")"}}></div>
                <div className='h-fit w-full mb-5'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                        <span className='text-sm text-neutral-400'>{publishedAt}</span>
                    </div>
                </div>
                <PortableText
                    value={body}
                    components={ptComponents}
                />
            </div>
        </div>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await client.fetch(
    groq`*[_type == "post"]{
      _id,
      slug
    }`
  )

  const paths = posts.map((post)=> ({
    params: {
        slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({params}) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    mainImage,
    body,
    publishedAt
  }`
  
  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
        notFound: true
    }
  }

  return {
    props: {
      post
    },
    revalidate: 100,
  }
}
export default Post