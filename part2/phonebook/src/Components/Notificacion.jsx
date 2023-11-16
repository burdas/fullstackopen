import React from 'react';
import './../CSS/notification.css';

export const Notification = ({ message, mode }) => {
  if (message === null || mode === null) {
    return null;
  }

  return (
    <div className={mode}>
      <strong>{mode.toUpperCase()}!</strong> {message}
    </div>
  );
};
