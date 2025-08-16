import { Bell } from 'lucide-react';
import { useOutletContext } from 'react-router';

const Notifications = () => {
  const outletContext = useOutletContext();
  const notifications = Array.isArray(outletContext?.notifications) ? outletContext.notifications : [];

  return (
    <div className="max-w-xl mx-auto p-6 mb-24">
      <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <Bell className="w-6 h-6 text-blue-500" />
        History / Notifications
      </h3>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map(noti => (
            <li key={noti?.id || Math.random()} className="bg-white shadow p-4 rounded-xl border border-gray-100">
              <p className="text-gray-800 text-sm">{noti?.message || "No message"}</p>
              {noti?.timestamp?.seconds && (
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(noti.timestamp.seconds * 1000).toLocaleString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
