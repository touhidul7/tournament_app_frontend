// push/PushNotification.jsx
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import 'react-toastify/dist/ReactToastify.css';

const PushNotification = () => {
  const lastNotificationId = useRef(null);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        const q = query(
          collection(db, 'notifications'),
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc')
        );

        const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
          if (!snapshot.empty) {
            const latestDoc = snapshot.docs[0];
            const latest = latestDoc.data();

            if (lastNotificationId.current !== latestDoc.id) {
              lastNotificationId.current = latestDoc.id;

              toast.info(`🔔 ${latest.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
              });
            }
          }
        });

        return () => unsubscribeSnapshot();
      }
    });

    return () => unsubscribeAuth();
  }, []);

  return null; // no UI needed for toast
};

export default PushNotification;
