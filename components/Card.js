export default function Card({ title, description, link }) {
    return (
        <div className="h-fit w-full p-2">
            <div onClick={link} className="rounded-lg p-5 bg-[#212121] border-neutral-700 border-2 hover:border-emerald-700 transition-all ease-in hover:scale-105">
                <h4 className="font-semibold mb-2 text-lg">{title}</h4>
                <hr className="border-t-2 border-neutral-700" />
                <p className="text-sm mt-2">{description}</p>
            </div>
        </div>
    )
}