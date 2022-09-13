import Link from 'next/link'

export default function Project({url, id, title, description, tailwind, javascript, react, netlify, api, next, sanity, mongo, vercel}) {
    return (
        <Link href={url} target="_blank" rel="noreferrer">
            <a id={id} className="animate__animated animate__slideInUp animate__fast block cursor-none bg-[#101010] w-full p-6 hover:bg-[#212121] transition hover:scale-105 md:border-[#101010] border-[#212121] border-2 hover:border-indigo-600">
                <h3 className="text-2xl mb-2 text-white">{title}</h3>
                <p className="text-neutral-400 text-sm">{description}</p>
                <div className="flex flex-wrap flex-grow gap-2 mt-4">
                    {react && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">ReactJS</span>}
                    {next && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">NextJS</span>}
                    {tailwind && <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">TailwindCSS</span>}
                    {javascript && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>}
                    {netlify && <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Netlify</span>}
                    {vercel && <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Vercel</span>}
                    {api && <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">API</span>}
                    {mongo && <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">MongoDB</span>}
                    {sanity && <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">SanityCMS</span>}
                </div>
            </a>
        </Link>
    )
}