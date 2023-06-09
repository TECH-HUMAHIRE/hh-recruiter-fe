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
                console.log('FCM token:', token);
                console.log('Device token:', token);
            } catch (error) {
                console.log('Error retrieving device token:', error);
            }
        };

        getDeviceToken();
    }, []);

    return <div>Notification Component</div>;
};

export default NotificationComponent;
