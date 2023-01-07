import React from 'react';

type TextProps = {
  type?: 'title' | 'subtitle' | 'text' | 'small';
  children?: React.ReactNode;
  className?: string;
}

const Text = ({ type = 'text', children, className }: TextProps) => {
  switch (type) {
    case 'title':
      return <h1 className={`text-xl uppercase font-medium text-black ${className}`}>{children}</h1>

    case 'subtitle':
      return <h3 className={className}>{children}</h3>;
    
    case 'small':
      return <small className={className}>{children}</small>;
  
    default:
      return <span className={className}>{children}</span>;
  }
};

export default Text;
