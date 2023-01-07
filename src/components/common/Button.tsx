import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({ type = 'button', className, children, ...props }: ButtonProps) => {
  return (
    <button type={type} className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
