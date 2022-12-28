import React from "react";

type InputProps = {
  placeholder: string;
  type?: 'text' | 'radio'; 
  value?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', ...props }: InputProps) => (
  <input type={type} {...props}/>
);

export default Input;
