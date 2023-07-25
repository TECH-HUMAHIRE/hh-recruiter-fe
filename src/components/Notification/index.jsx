import { getMessaging } from 'firebase/messaging';
import { useEffect, useState } from 'react';
import { useSaveFcmTokenMutation } from '../../app/actions/jobApi';
import { getToken } from '../../firebase';
const NotificationComponent = () => {
    const messaging = getMessaging();
    const [fcmToken, setFcmToken] = useState(null);
    const [saveFcmToken] = useSaveFcmTokenMutation();
    const requestNotificationPermission = async () => {
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const token = await getToken(messaging);

                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        } catch (error) {
            console.log('Unable to get permission to notify.', error);
        }
    };

    requestNotificationPermission();

    useEffect(() => {
        const getDeviceToken = async () => {
            try {
                await Notification.requestPermission();
                const token = await await getToken(messaging, {
                    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
                });
                console.log('FCM token Successfully!');
                setFcmToken(token);
            } catch (error) {
                console.log('Error retrieving device token firebase:', error);
            }
        };

        getDeviceToken();
    }, []);
    useEffect(() => {
        if (fcmToken) {
            saveFcmToken({
                fcm_token: fcmToken
            });
        }
    }, [fcmToken]);
};

export default NotificationComponent;
