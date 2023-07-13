import { CheckOutlined, MoreOutlined } from '@ant-design/icons';
import { Dropdown, List } from 'antd';
import React from 'react';
import { CardMenu } from '../../../../components/Card/card.style';
import SettingIcon from '../../../../components/Icon/Setting';
import DeleteIcon from '../../../../components/Assets/icon/Trash.png';
import { Col, Row } from '../../../../components/Grid';
import BagIcon from '../../../../components/Assets/icon/Bag.png';
import {
    useDeleteNotificationMutation,
    useGetNotificationQuery,
    useUpdateNotificationMutation
} from '../../../../app/actions/jobApi';
import { onValue, ref } from 'firebase/database';
import { database } from '../../../../firebase';
import PaginationTable from '../../../../components/PaginationTable';
import EmptyJob from '../../../../components/EmptyJob';
const NotificationListItem = ({ notification }) => {
    const [updatenotification] = useUpdateNotificationMutation();
    const [deleteNotification] = useDeleteNotificationMutation();
    const items = [
        {
            key: '1',
            label: (
                <CardMenu onClick={() => handleReadMessage(notification)}>
                    <CheckOutlined />
                    {notification.is_read ? 'Mark unread' : 'Mark read'}
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu onClick={() => handleDeleteMessage(notification)}>
                    <img src={DeleteIcon} alt="" />
                    Delete
                </CardMenu>
            )
        }
    ];
    const handleReadMessage = (notification) => {
        updatenotification(notification.id);
    };
    const handleDeleteMessage = (notification) => {
        deleteNotification(notification.id);
    };
    return (
        <Col md={11}>
            <div
                className={`${
                    notification.is_read === true ? '' : 'unread'
                } inbox-notification`}>
                <List itemLayout="horizontal">
                    <List.Item
                        extra={
                            <Dropdown
                                menu={{ items }}
                                placement="bottomCenter"
                                trigger="click">
                                <MoreOutlined />
                            </Dropdown>
                        }>
                        <List.Item.Meta
                            avatar={
                                <div className="inbox-notification__icon">
                                    {notification.category === 'dashboard' ? (
                                        <img src={BagIcon} alt="" />
                                    ) : (
                                        <SettingIcon color="#AAAAAA" />
                                    )}
                                </div>
                            }
                            title={
                                <a href="https://ant.design">
                                    {notification.title}
                                </a>
                            }
                            description={
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: notification.body
                                    }}></div>
                            }
                        />
                    </List.Item>
                </List>
            </div>
        </Col>
    );
};
const NotificationTab = ({ dataProfile }) => {
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        category: 'job,dashboard,status_job'
    });

    const items = [
        {
            key: '1',
            label: (
                <CardMenu onClick={() => handleReadMessage()}>
                    <CheckOutlined />
                    Mark read
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu>
                    <img src={DeleteIcon} alt="" />
                    Delete
                </CardMenu>
            )
        }
    ];
    const { data, refetch } = useGetNotificationQuery(params);

    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetch();
    };

    const getDatamessage = () => {
        const dataRefMessage = ref(database, `messages/`);
        onValue(
            dataRefMessage,
            (snapshot) => {
                // Handle the data changes here
                const data = snapshot.val();
                let groupChat = Object.keys(data);
                let checkDataMessage = groupChat.filter(
                    (item) => item === dataProfile?.data?.uid
                ).length;
                if (checkDataMessage > 0) {
                    const dataRef = ref(
                        database,
                        `messages/${dataProfile?.data?.uid}`
                    );
                    onValue(
                        dataRef,
                        (snapshot) => {
                            // Handle the data changes here
                            refetch();
                        },
                        (error) => {
                            console.log(
                                'Error retrieving real-time data:',
                                error.code,
                                error.message
                            );
                        }
                    );
                } else {
                    // setDataUsers([]);
                }
            },
            (error) => {
                console.log(
                    'Error retrieving real-time data:',
                    error.code,
                    error.message
                );
            }
        );
    };
    React.useEffect(() => {
        getDatamessage();
        refetch();
    }, []);
    return (
        <>
            <Row>
                {data?.data?.notifications?.length > 0 ? (
                    data?.data?.notifications?.map((notification, key) => {
                        return (
                            <NotificationListItem
                                notification={notification}
                                key={key}
                            />
                        );
                    })
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                        <EmptyJob title={'No notifications'} notes="" />
                    </div>
                )}
            </Row>
            {data?.meta?.info?.count > 1 && (
                <div className="job-pagination">
                    <PaginationTable
                        showSizeChanger={false}
                        data={data}
                        refetch={onRefetchCandidates}
                        params={params}
                    />
                </div>
            )}
        </>
    );
};
export default NotificationTab;
