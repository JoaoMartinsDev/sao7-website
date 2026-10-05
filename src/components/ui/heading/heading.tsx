import type { HTMLAttributes } from 'react';
import './heading.scss'

type HeadingProps = {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement>;

const Heading = ({type, className = "", children, ...props}: HeadingProps) => {
    return <div className={`${className}`} {...props}>{children}</div>
}

export default Heading