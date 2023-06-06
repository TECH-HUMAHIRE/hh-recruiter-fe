import { Card, Form, Input } from 'antd';
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
import { useNavigate, useSearchParams } from 'react-router-dom';

const MessageTab = ({ message = [1, 2], dataProfile }) => {
    let navigate = useNavigate();
    const [paramsUrl, _] = useSearchParams();
    const [messageDeleteTarget, setMessageDeleteTarget] = React.useState('');
    const [isDelete, setDelete] = React.useState(false);
    const [totalDataMessage, setTotalDataMessage] = React.useState([]);
    const [chatActiveId, setChatAvtiveId] = React.useState(null);
    const [dataUsers, setDataUsers] = React.useState([]);
    const handleDeleteMassage = () => {
        const messageRef = ref(database, messageDeleteTarget);
        remove(messageRef)
            .then(() => {
                setDelete(false);
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
                if (
                    chats[item].sender !== dataProfile?.data?.uid &&
                    chats[item].read === false
                ) {
                    update(chatRefKey, { ...chats[item], read: true });
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
    React.useEffect(() => {
        const dataRef = ref(database, `messages/${dataProfile?.data?.uid}`);
        onValue(
            dataRef,
            (snapshot) => {
                // Handle the data changes here
                const data = snapshot.val();
                const dataChat = Object.values(data);

                // setMessagesData(messageDataList);
                setDataUsers(dataChat);
            },
            (error) => {
                console.log(
                    'Error retrieving real-time data:',
                    error.code,
                    error.message
                );
            }
        );
        listenForChat();
    }, []);
    React.useEffect(() => {
        if (dataUsers.length > 0 && !paramsUrl.get('message')) {
            setChatAvtiveId(Object.values(dataUsers[0])[0].userTarget);
        }
    }, [dataUsers]);
    React.useEffect(() => {
        if (paramsUrl.get('message')) {
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
                                    prefix={<SearchOutlined />}
                                    size="large"
                                    type={'text'}
                                    placeholder="Search by name"
                                />
                            </Form.Item>
                        </Col>
                        <Col md={2} style={{ paddingLeft: 0 }}>
                            <Button
                                className="message-filter"
                                block
                                icon={<FilterOutlined />}></Button>
                        </Col>
                    </Row>
                    {dataUsers.length > 0 &&
                        dataUsers.map((item, key) => {
                            return (
                                <UserListMessage
                                    totalDataMessage={totalDataMessage}
                                    onTabMessage={onTabMessage}
                                    data={item}
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
