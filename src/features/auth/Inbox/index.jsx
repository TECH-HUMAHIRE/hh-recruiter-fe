// import { FirebaseDatabaseNode } from '@react-firebase/database';
import React from 'react';
import TabMenu, { useActiveTab } from '../../../components/Tabs';
import Style from './inbox.style';
import MessageTab from './partial/Message';
import NotificationTab from './partial/Notification';

import { getDatabase, ref, get, onValue } from 'firebase/database';
import { database } from '../../../firebase';
import { useGetProfileQuery } from '../../../app/actions/profile';
import { Skeleton } from 'antd';

const Inbox = () => {
    const { data: dataProfile } = useGetProfileQuery();
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
                        children: dataProfile?.data ? (
                            <MessageTab dataProfile={dataProfile} />
                        ) : (
                            <Skeleton />
                        )
                    },
                    {
                        label: `Notification`,
                        key: 'notification',
                        children: <NotificationTab dataProfile={dataProfile} />
                    }
                ]}
            />
        </Style>
    );
};
export default Inbox;
