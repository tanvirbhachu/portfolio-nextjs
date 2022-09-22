import Link from 'next/link'

export default function Project({url, id, title, description, tailwind, javascript, react, netlify, api, next, sanity, mongo, vercel}) {
    return (
        <div className='snap-start shrink-0'>
            <Link href={url} target="_blank" rel="noreferrer">
                <a id={id} className="bg-gray-50 hover:bg-[#101010] dark:bg-[#101010] group hover:scale-105 dark:hover:bg-gray-50 md:w-96 min-h-[450px]
                    transition-all ease-in p-10 flex flex-col justify-between ">
                    <div>
                        <p className="group-hover:text-white dark:group-hover:text-black text-2xl font-bold">{title}</p>
                        <p className="group-hover:text-neutral-300 dark:group-hover:text-neutral-700">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                    {react && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">ReactJS</span>}
                    {next && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">NextJS</span>}
                    {tailwind && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">TailwindCSS</span>}
                    {javascript && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">JavaScript</span>}
                    {netlify && <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">Netlify</span>}
                    {vercel && <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">Vercel</span>}
                    {api && <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">API</span>}
                    {mongo && <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">MongoDB</span>}
                    {sanity && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">SanityCMS</span>}
                    </div>
                </a>
            </Link>
        </div>
    )
}