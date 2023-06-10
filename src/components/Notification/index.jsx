import { useEffect } from 'react';
import { getToken, messaging } from '../../firebase';

const NotificationComponent = () => {
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

    return <div></div>;
};

export default NotificationComponent;
