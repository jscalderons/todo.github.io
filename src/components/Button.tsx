import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
};

export default Button;
