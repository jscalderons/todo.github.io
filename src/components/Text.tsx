import React from 'react';

type TextProps = {
  children?: React.ReactNode;
  className?: string;
}

const Text = ({ children, ...props }: TextProps) => (<span {...props}>{children}</span>);

export default Text;
