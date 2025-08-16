// push/PushNotification.jsx
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import 'react-toastify/dist/ReactToastify.css';

const PushNotification = ({ updateData }) => {
  const lastNotificationId = useRef(null);
  const [noticeLoading, setNoticeLoading] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("✅ Authenticated user:", user.uid);

        const q = query(
          collection(db, 'notifications'),
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc'),
        );

        const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
          console.log("📡 onSnapshot triggered");

          if (!snapshot.empty) {
            const latestDoc = snapshot.docs[0];
            const latest = latestDoc.data();

            console.log("📥 Latest notification:", latest);

            if (lastNotificationId.current !== latestDoc.id) {
              lastNotificationId.current = latestDoc.id;

              // Show toast
              toast.info(`🔔 ${latest.message}`, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
              });

              // 🔁 Update data only when a new notification is shown
              // updateData();
              setNoticeLoading(true);
              setTimeout(() => {
                setNoticeLoading(false);
              }, 2000);
            }
          } else {
            console.log("ℹ️ No notifications found.");
          }
        });

        return () => unsubscribeSnapshot();
      } else {
        console.log("❌ No user authenticated.");
      }
    });

    return () => unsubscribeAuth();
  }, [updateData]); // Optional: add updateData if it's from props/context

  return null;
};

export default PushNotification;
