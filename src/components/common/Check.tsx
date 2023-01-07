import React from "react";
import { Button, Icon } from '.';

type TodoCheckProps = {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

const Check = ({ onChange, isChecked, className }: TodoCheckProps) => (
  <Button onClick={() => onChange(!isChecked)} className={`btn-icon text-primary-500 ${className}`}>
    <Icon icon={isChecked ? 'check-circle-fill' : 'circle'} />
  </Button>
);

export default Check;
