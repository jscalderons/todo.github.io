import React from 'react';

type TextareaProps = {
  placeholder: string;
  rows?: number;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ rows = 10, ...props }: TextareaProps) => (
  <textarea rows={rows} {...props}></textarea>
);

export default Textarea;