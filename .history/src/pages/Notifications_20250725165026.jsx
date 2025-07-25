// notifications/Notifications.jsx
import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import { Bell } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        const q = query(
          collection(db, 'notifications'),
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc')
        );

        const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
          const newNotis = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          setNotifications(newNotis);
        });

        return () => unsubscribeSnapshot();
      }
    });

    return () => unsubscribeAuth();
  }, []);

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
            <li key={noti.id} className="bg-white shadow p-4 rounded-xl border border-gray-100">
              <p className="text-gray-800 text-sm">{noti.message}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(noti.timestamp?.seconds * 1000).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
