import React from 'react';
import TabMenu, { useActiveTab } from '../../../components/Tabs';
import Style from './inbox.style';
import MessageTab from './partial/Message';
import NotificationTab from './partial/Notification';

const Inbox = () => {
    const [activeTab, setActiveTab] = useActiveTab('message');
    return (
        <Style>
            <h1 className="title">Inbox</h1>
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
