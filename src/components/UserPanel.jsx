// UserPanel.jsx
import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';

const UserPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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

        return () => unsubscribeSnapshot(); // cleanup on unmount
      }
    });

    return () => unsubscribe(); // cleanup auth listener
  }, []);

  return (
    <div>
      <h2>📬 Notifications</h2>
      {notifications.length === 0 && <p>No notifications yet.</p>}
      <ul>
        {notifications.map(noti => (
          <li key={noti.id}>
            📢 {noti.message} — {new Date(noti.timestamp?.seconds * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPanel;