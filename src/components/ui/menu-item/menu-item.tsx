import './menu-item.scss'

const MenuItem = ({children, ...props}) => {
    return <li className='menu-item'><a {...props}>{children}</a></li>
}

export default MenuItem