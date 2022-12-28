import React from "react";

type TodoCheckProps = {
  isChecked?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoCheck = ({ onChange, isChecked, className }: TodoCheckProps) => (
  <input
    type="checkbox"
    className={`h-5 w-5 rounded-lg text-green-600 transition duration-150 ease-in-out ${className}`}
    checked={isChecked}
    onChange={onChange}
  />
);

export default TodoCheck;
