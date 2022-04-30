export default function Skill(props) {
    return (
        <div data-aos="fade-left" data-aos-delay="50">
            <a href={props.url} target="_blank" class={`p-2 flex gap-2 transition ease-in ${props.color} border-2 border-transparent`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="feather feather-corner-down-right">
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" /></svg>
                <span>{props.name}</span>
            </a>
        </div>
    )
}