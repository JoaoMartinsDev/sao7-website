import type { ButtonHTMLAttributes } from 'react';
import './button.scss'

type ButtonProps = {
    variant?: "primary" | "secundary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({variant = "primary", className = "", children, ...props}: ButtonProps) => {
    return <button className={`btn btn--${variant} ${className}`} {...props}>{children}</button>
}

export default Button