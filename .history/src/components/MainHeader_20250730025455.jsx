import { faBangladeshiTakaSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { auth, db } from '../firebase/firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

const MainHeader = ({ balance, settings, notifications, setNotifications }) => {

    const navigate = useNavigate();

    const NotificationClick = () => {
        setNotifications(0);
        navigate('/notifications');
    };

    // useEffect(() => {
    //     const unsubscribeAuth = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             const q = query(
    //                 collection(db, 'notifications'),
    //                 where('userId', '==', user.uid),
    //                 orderBy('timestamp', 'desc')
    //             );

    //             const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
    //                 const newNotis = snapshot.docs.map(doc => ({
    //                     id: doc.id,
    //                     ...doc.data()
    //                 }));

    //                 setNotifications(newNotis);

    //                 const unseenCount = newNotis.length - seenCount;
    //                 if (unseenCount > 0) {
    //                     setBadge(unseenCount);
    //                 }
    //             });

    //             return () => unsubscribeSnapshot();
    //         }
    //     });

    //     return () => unsubscribeAuth();
    // }, [seenCount]); // Re-run if seen count changes

    return (
        <div>
            <div className='py-2 flex items-center justify-between border-b border-cardbg bg-cardbg'>
                <NavLink to={`/`} className='flex items-center gap-2'>
                    <h2 className='text-white font-medium text-lg ml-2'>{settings && settings.app_name}</h2>
                </NavLink>
                <div className='flex items-center justify-end gap-0'>
                    <button onClick={NotificationClick} className='relative px-2 py-2 ml-9 cursor-pointer'>
                        <Bell className="w-6 h-6 text-blue-500" />
                        {notifications?.length >= 0 ? (
                            <span className="absolute top-2 right-2 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-[8px] font-bold rounded-full px-1">
                                {notifications?.length}
                            </span>
                        ) : <span className="absolute top-2 right-2 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-[8px] font-bold rounded-full px-1">

                        </span>}
                    </button>

                    <NavLink to='/wallet' className='flex items-center gap-2 text-white bg-cardbg px-4 py-2 rounded-full'>
                        <FontAwesomeIcon className='text-2xl' icon={faWallet} />
                        <p>
                            <FontAwesomeIcon icon={faBangladeshiTakaSign} />{' '}
                            <span className='text-green-500'>{balance || 0}</span> TK
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
