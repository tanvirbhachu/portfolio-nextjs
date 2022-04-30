import Instagram from './icons/Instagram'
import Github from './icons/Github'
import Twitter from './icons/Twitter'
import Linkedin from './icons/Linkedin'

export default function Social(props) {

    function icon() {
        if (props.name == 'Instagram') {return <Instagram />}
        if (props.name == 'Github') {return <Github />}
        if (props.name == 'Twitter') {return <Twitter />}
        if (props.name == 'LinkedIn') {return <Linkedin />}
    }

    return (
            <a aria-label={props.name} target="_blank" href={props.url}
                className={`bg-[#212121] p-3 rounded-xl transition-all hover:scale-105 border-transparent border-2 ${props.color}`}>
                {icon()}
            </a>
    )
}