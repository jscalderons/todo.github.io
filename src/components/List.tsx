import React from "react";

type ListProps = {
  children: React.ReactNode;
  className?: string;
}

const List = ({ children, ...props }: ListProps) => (
  <ul {...props}>{children}</ul>
);

export default List;
