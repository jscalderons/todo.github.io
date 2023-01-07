import React from 'react';

type MainProps = {
  children: React.ReactNode;
  className?: string;
};

const Main = ({ children, className }: MainProps) => {
  return (
    <div className={`bg-gray-300 h-screen ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Main;