import { Card, Dropdown, Form, Input } from 'antd';
import React from 'react';
import EmptyMessage from '../../../../components/EmptyMessage';
import { Col, Row } from '../../../../components/Grid';
import UserListMessage from './UserListMessage';
// import TabMenu from '../../../../components/Tabs';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button';
import MessageBox from '../../../../components/MessageBox';
import DeleteMessage from '../../../../components/Modal/DeleteMessage';
import { onValue, push, ref, remove, set, update } from 'firebase/database';
import { database } from '../../../../firebase';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { CardMenu } from '../../../../components/Card/card.style';

const MessageTab = ({ message = [1, 2], dataProfile }) => {
    let navigate = useNavigate();
    const location = useLocation();
    const [paramsUrl, _] = useSearchParams();
    const [searchName, setSearchName] = React.useState('');
    const [messageDeleteTarget, setMessageDeleteTarget] = React.useState('');
    const [isDelete, setDelete] = React.useState(false);
    const [totalDataMessage, setTotalDataMessage] = React.useState([]);
    const [chatActiveId, setChatAvtiveId] = React.useState(null);
    const [dataUsers, setDataUsers] = React.useState([]);
    const items = [
        {
            key: '1',
            label: (
                <CardMenu onClick={() => handleunViewAllMessageFilter()}>
                    View All
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu onClick={() => handleunReadMessageFilter()}>
                    Unread
                </CardMenu>
            )
        }
    ];
    const handleunViewAllMessageFilter = () => {
        getDatamessage();
    };
    const handleunReadMessageFilter = () => {
        let filterData = dataUsers;
        totalDataMessage.map((item) => {
            setDataUsers(
                filterData.filter(
                    (data) => item.dataUnread > 0 && data.uid === item.uid
                )
            );
        });
    };
    const handleDeleteMassage = () => {
        const messageRef = ref(database, messageDeleteTarget);
        remove(messageRef)
            .then(async () => {
                await getDatamessage();
                setDelete(false);
                setChatAvtiveId(dataUsers[0]?.uid || '');
                navigate(
                    dataUsers[0]?.uid ? `?message=${dataUsers[0]?.uid}` : ''
                );
            })
            .catch((error) => {
                console.error('Error deleting message:', error);
            });
    };
    const onDeleteMessage = (messageTarget) => {
        setMessageDeleteTarget(messageTarget);
        setDelete(!isDelete);
    };
    const onTabMessage = (uid) => {
        setChatAvtiveId(uid);
        navigate(`?message=${uid}`);
        paramsUrl.set('message', uid);
    };
    const updateStatusReadMessage = () => {
        const chatRef = ref(
            database,
            `messages/${dataProfile?.data?.uid}/${paramsUrl.get('message')}`
        );
        const chatRefSending = ref(
            database,
            `messages/${paramsUrl.get('message')}/${dataProfile?.data?.uid}`
        );
        onValue(chatRef, (snapshot) => {
            let chats = snapshot.val();
            let getKey = Object.keys(chats);
            getKey.map((item) => {
                const chatRefKey = ref(
                    database,
                    `messages/${dataProfile?.data?.uid}/${paramsUrl.get(
                        'message'
                    )}/${item}`
                );

                if (chats[item].sender !== dataProfile?.data?.uid) {
                    if (chats[item].read === false) {
                        update(chatRefKey, { ...chats[item], read: true });
                    }
                }
            });
        });
        onValue(chatRefSending, (snapshot) => {
            let chats = snapshot.val();
            let getKey = Object.keys(chats);
            getKey.map((item) => {
                const chatRefKey = ref(
                    database,
                    `messages/${paramsUrl.get('message')}/${
                        dataProfile?.data?.uid
                    }/${item}`
                );

                if (chats[item].sender === paramsUrl.get('message')) {
                    if (chats[item].read === false) {
                        update(chatRefKey, { ...chats[item], read: true });
                    }
                }
            });
        });
    };
    const listenForChat = () => {
        const chatRef = ref(database, `messages/${dataProfile?.data?.uid}/`);
        onValue(chatRef, (snapshot) => {
            let chats = snapshot.val();

            let groupChat = Object.keys(chats);
            let arr = [];

            groupChat.map((item) => {
                return arr.push({
                    uid: item,
                    dataUnread: Object.values(chats[item])
                        .filter(
                            (item) => item.sender !== dataProfile?.data?.uid
                        )
                        .filter((item) => item.read === false).length
                });
            });
            setTotalDataMessage(arr);
            // return messageTargetList;
        });
    };
    const onSearchMessage = (e) => {
        let value = e.target.value;
        setSearchName(value.toLowerCase());
    };
    const getDatamessage = () => {
        const dataRef = ref(database, `messages/${dataProfile?.data?.uid}`);
        onValue(
            dataRef,
            (snapshot) => {
                // Handle the data changes here
                const data = snapshot.val();
                let groupChat = Object.keys(data);
                let arr = [];
                groupChat.map((item) => {
                    return arr.push({
                        uid: item,
                        data: Object.values(data[item])
                    });
                });
                // setMessagesData(messageDataList);
                setDataUsers(arr);
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
        listenForChat();
    }, []);
    React.useEffect(() => {
        if (dataUsers?.length > 0 && !paramsUrl.get('message')) {
            setChatAvtiveId(dataUsers[0].uid);
        }
    }, [dataUsers]);
    React.useEffect(() => {
        if (
            paramsUrl.get('message') &&
            paramsUrl.get('message') !== dataProfile?.data?.uid
        ) {
            setChatAvtiveId(paramsUrl.get('message'));
            updateStatusReadMessage();
        }
    }, [paramsUrl]);

    return (
        <div>
            <Row>
                <Col md={4}>
                    <Row>
                        <Col md={10}>
                            <Form.Item>
                                <Input
                                    onChange={onSearchMessage}
                                    prefix={<SearchOutlined />}
                                    size="large"
                                    type={'text'}
                                    placeholder="Search by name"
                                />
                            </Form.Item>
                        </Col>
                        <Col md={2} style={{ paddingLeft: 0 }}>
                            <Dropdown
                                menu={{
                                    items,
                                    selectable: true,
                                    defaultSelectedKeys: ['1']
                                }}
                                trigger={'click'}>
                                <Button
                                    className="message-filter"
                                    block
                                    icon={<FilterOutlined />}></Button>
                            </Dropdown>
                        </Col>
                    </Row>
                    {dataUsers?.length > 0 &&
                        dataUsers?.map((item, key) => {
                            return (
                                <UserListMessage
                                    searchName={searchName}
                                    totalDataMessage={totalDataMessage}
                                    onTabMessage={onTabMessage}
                                    data={item.data}
                                    key={key}
                                />
                            );
                        })}

                    {/* <TabMenu item={itemTabs} tabPosition="left" /> */}
                </Col>
                <Col md={8}>
                    {chatActiveId ? (
                        <MessageBox
                            uid={chatActiveId}
                            onDeleteMessage={onDeleteMessage}
                        />
                    ) : (
                        <EmptyMessage />
                    )}
                </Col>
            </Row>
            <DeleteMessage
                isOpen={isDelete}
                onClose={onDeleteMessage}
                onAction={handleDeleteMassage}
            />
        </div>
    );
};
export default MessageTab;
