import react from 'react'
import './link.scss'

function Link({href, target, label}){
    return <a className="link" href={href} target={target}>{label}</a>
}

export default Link