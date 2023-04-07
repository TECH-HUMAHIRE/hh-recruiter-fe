// import { FirebaseDatabaseNode } from '@react-firebase/database';
import React from 'react';
import TabMenu, { useActiveTab } from '../../../components/Tabs';
import Style from './inbox.style';
import MessageTab from './partial/Message';
import NotificationTab from './partial/Notification';

import { getDatabase, ref, get } from 'firebase/database';
import { database, auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Inbox = () => {
    const [activeTab, setActiveTab] = useActiveTab('message');
    // console.log(firebase.database())
    // console.log('Asdasdasd', firebase);

    // React.useEffect(async () => {
    //     const dataRef = ref(database, 'test/');
    //     await signInWithEmailAndPassword(
    //         auth,
    //         'recruiter_texting_1@gmail.com',
    //         '123456'
    //     ).then((userCredential) => {
    //         // User signed in successfully
    //     });
    // }, []);
    React.useEffect(() => {
        const dataRef = ref(database, 'test/');
        get(dataRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    // Do something with the data
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <Style>
            <h1 className="title">Inbox</h1>
            {/* <FirebaseDatabaseNode path={`test/`}>
                {(d) => {
                    let wishes = [];
                    console.log('dddd =>', d);
                }}
            </FirebaseDatabaseNode> */}
            <TabMenu
                defaultActiveKey={activeTab}
                onChange={setActiveTab}
                item={[
                    {
                        label: `Message`,
                        key: 'message',
                        children: <MessageTab />
                    },
                    {
                        label: `Notification`,
                        key: 'notification',
                        children: <NotificationTab />
                    }
                ]}
            />
        </Style>
    );
};
export default Inbox;
