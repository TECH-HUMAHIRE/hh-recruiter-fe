export const getNotification = () => {
    const channel = new BroadcastChannel('backgroundMessageChannel');
    channel.addEventListener('message', (event) => {
        const { response } = event.data;
        console.log('Received response from service worker:', response);
        return response;
    });

    return () => {
        // Clean up the Broadcast Channel
        channel.close();
    };
};
