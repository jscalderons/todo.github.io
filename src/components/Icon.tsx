import React from 'react';

type IconProps = { 
  icon: string,
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, className }) => (
  <i className={`bi bi-${icon} ${className}`}></i>
);

export default Icon;
