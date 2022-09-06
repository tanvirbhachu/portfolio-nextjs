import Link from 'next/link'

export default function Card({ title, slug, publishedAt, url }) {
    return (
        <div>
            <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a className="h-fit w-full p-2 block">
                    <div className="bg-[#212121] border-neutral-700 border-2 hover:border-indigo-600 transition-all ease-in hover:scale-105">
                        <div className='w-full h-44 bg-cover bg-center' style={{backgroundImage: "url(" + url + ")"}}></div>
                        <div className='p-2'>
                            <span className='text-sm text-neutral-400'>{publishedAt}</span>
                            <h4 className="font-semibold text-xl">{title}</h4>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}