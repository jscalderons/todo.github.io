import React from 'react';

type IconProps = { 
  icon: string,
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => (
  <i className={`bi bi-${icon} text-inherit ${className}`}></i>
);

export default Icon;
