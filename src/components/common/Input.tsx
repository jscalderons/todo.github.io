import React from "react";
import Icon from './Icon';

type InputProps = {
  type?: string; 
  value?: string;
  placeholder?: string;
  icon?: string;
  className?: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', icon, className, ...props }: InputProps) => (
  <label className="relative block text">
    <span className="sr-only">{props.placeholder}</span>
    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
      {icon && <Icon icon={icon} />}
    </span>
    <input 
      type={type}
      className={`input ${icon ? 'pl-10 pr-4' : ''} ${className}`} 
      {...props}
    />
  </label> 
);

export default Input;
