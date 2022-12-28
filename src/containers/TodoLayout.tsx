import React from 'react';

type TodoLayoutProps = { 
  children?: React.ReactNode,
}

const TodoLayout: React.FC<TodoLayoutProps> = ({ children }) => {
  return (
    <div className='max-w-full min-h-screen bg-white flex flex-col'>
      {children}
    </div>
  )
}

export default TodoLayout;
