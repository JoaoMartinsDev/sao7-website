import type { ReactNode } from 'react';
import './layoutTop.scss';

interface LayoutTopProps {
  children: ReactNode;
  className?: string;
}

const LayoutTop: React.FC<LayoutTopProps> = ({children, className}) => {
    return (
      <div className={`layout-top ${className ?? ''}`}>
        {children}
      </div>
    );
}

const LayoutTopHeader: React.FC<LayoutTopProps> = ({children, className}) => {
    return (
      <div className={`layout-top__header ${className ?? ''}`}>
        {children}
      </div>
    );
}

const LayoutTopContent: React.FC<LayoutTopProps> = ({children, className}) => {
    return (
      <div className={`layout-top__content ${className ?? ''}`}>
        {children}
      </div>
    );
}

export {LayoutTop, LayoutTopHeader, LayoutTopContent };