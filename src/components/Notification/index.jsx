import { getMessaging } from 'firebase/messaging';
import { useEffect } from 'react';
import { getToken } from '../../firebase';
const NotificationComponent = () => {
    const messaging = getMessaging();
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
                    vapidKey:
                        'BEvc8zyx2Gvo_qRKhF4WTEHKW7eBzfhZJE6nIRJz2muxstfHTcUYfCIgnnka575si_jJKr1xwqpyjkidvLfPkZY'
                });
                console.log('FCM token Successfully!');
            } catch (error) {
                console.log('Error retrieving device token firebase:', error);
            }
        };

        getDeviceToken();
    }, []);
};

export default NotificationComponent;
