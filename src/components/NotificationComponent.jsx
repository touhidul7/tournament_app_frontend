import React, { useEffect, useState } from 'react';
import echo from '../../echo';

const NotificationComponent = ({ userId }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const channel = echo.private(`user.${userId}`);

    channel.listen('.UserNotificationEvent', (data) => {

      setMessage(data.message);
      console.log('Notification received:', data.message);
      
    });


    return () => {
      echo.leave(`user.${userId}`);
    };
  }, [userId]);

  return (
    <div>
      {message && <div className="notification">🔔 {message}</div>}
    </div>
  );
};

export default NotificationComponent;