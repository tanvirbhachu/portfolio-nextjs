export default function Project(props) {
    return (
        <a href={props.url} target="_blank"
            class="block cursor-none bg-dark w-full p-5 hover:bg-[#212121] rounded-xl transition hover:scale-105 border-transparent border-2 hover:border-blue-500">
            <h3 class="text-2xl mb-2">{props.name}</h3>
            <p class="text-neutral-400 text-sm">AstroWeather is my first public project. It’s a
                web weather app built using Tailwind CSS and makes use of a weather api for data. 
                The app is mobile-friendly and supports both Celsius and Fahrenheit aswell as kph 
                and mph.</p>
            <div class="flex flex-wrap flex-grow gap-2 mt-4">
                <div class="bg-blue-500 text-dark py-1 px-2 text-sm rounded-md">TailwindCSS</div>
                <div class="bg-yellow-500 text-dark py-1 px-2 text-sm rounded-md">JavaScript</div>
                <div class="bg-red-500 text-dark py-1 px-2 text-sm rounded-md">API</div>
                <div class="bg-cyan-500 text-dark py-1 px-2 text-sm rounded-md">Netlify</div>
            </div>
        </a>
    )
}