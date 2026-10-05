import './menu.scss'

const Menu = ({children}) => {
    return <nav aria-label="Main navigation" className='menu'>
    <ul>
        {children}
    </ul>
  </nav>
}

export default Menu