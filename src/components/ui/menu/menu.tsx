import './menu.scss'

interface MenuProps extends React.ComponentPropsWithRef<'a'> {
  children?: React.ReactNode;
}


const Menu = ({children, ...props}: MenuProps) => {
    return <nav aria-label="Main navigation" className='menu' {...props}>
    <ul>
        {children}
    </ul>
  </nav>
}

export default Menu