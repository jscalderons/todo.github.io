import React, { useState } from 'react';
import { Input } from '../common';

type InlineEditProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const InlineEdit = ({ value, className, onChange }: InlineEditProps) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setEditingValue(event.target.value);

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      (event.target as HTMLInputElement).blur();
    }
  }

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === "") {
      onChange(value);
    } else {
      onChange(event.target.value)
    }
  }

  return (
    <Input
      value={editingValue}
      className={`input--sm bg-transparent border-transparent hover:border ${className}`}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      onBlur={onBlurHandler}
    />
  )
}

export default InlineEdit;
