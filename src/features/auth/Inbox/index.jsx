// import { FirebaseDatabaseNode } from '@react-firebase/database';
import React from 'react';
import TabMenu, { useActiveTab } from '../../../components/Tabs';
import Style from './inbox.style';
import MessageTab from './partial/Message';
import NotificationTab from './partial/Notification';

import { useGetProfileQuery } from '../../../app/actions/profile';
import { Skeleton } from 'antd';
import { useGetNotificationQuery } from '../../../app/actions/jobApi';

const Inbox = () => {
    const { data: dataProfile } = useGetProfileQuery();
    const [activeTab, setActiveTab] = useActiveTab('message');

    const [totalDataUnread, setTotalDataUnread] = React.useState(0);
    const getDataUnreadMessage = (total) => {
        setTotalDataUnread(total);
    };
    const [params, _] = React.useState({
        page: 1,
        page_size: 12,
        category: 'job,dashboard,status_job'
    });
    const { data } = useGetNotificationQuery(params);

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
                        label: `Message${
                            totalDataUnread > 0 ? ` (${totalDataUnread})` : ''
                        }`,
                        key: 'message',
                        children: dataProfile?.data ? (
                            <MessageTab
                                dataProfile={dataProfile}
                                getDataUnreadMessage={getDataUnreadMessage}
                            />
                        ) : (
                            <Skeleton />
                        )
                    },
                    {
                        label: `Notification ${
                            data?.data?.unread_count > 0
                                ? `(${data?.data?.unread_count})`
                                : ''
                        }`,
                        key: 'notification',
                        children: <NotificationTab dataProfile={dataProfile} />
                    }
                ]}
            />
        </Style>
    );
};
export default Inbox;
