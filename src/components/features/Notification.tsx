import React from 'react';

type NotificationProps = {
  imageUrl: string; 
  imageAlt: string; 
  title: string;
  message: string;
}

const Notification = ({ imageUrl, imageAlt, title, message }: NotificationProps) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="shrink-0">
        {/* <img className="h-12 w-12" src={imageUrl.src} alt={imageAlt}> */}
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  );
}

export default Notification;
