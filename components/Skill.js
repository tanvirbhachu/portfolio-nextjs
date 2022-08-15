export default function Skill(props) {
    return (
        <div className="animate__animated animate__fadeInRight">
            <a href={props.url} target="_blank" rel="noreferrer" className={`p-2 flex gap-2 transition ease-in ${props.color} border-2 border-transparent`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="feather feather-corner-down-right">
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" /></svg>
                <span>{props.name}</span>
            </a>
        </div>
    )
}