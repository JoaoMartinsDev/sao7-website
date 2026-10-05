import React from 'react';
import './menu-item.scss';

interface MenuItemProps extends React.ComponentPropsWithRef<'a'> {
  children?: React.ReactNode;
}

const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return (
    <li className="menu-item">
      <a {...props}>{children}</a>
    </li>
  );
};

export default MenuItem;