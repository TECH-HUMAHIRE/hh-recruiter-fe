import { CheckOutlined, LockOutlined, MoreOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Form, Input } from 'antd';
import React from 'react';
import dummyUser from '../Assets/images/dummyuserchat.png';
import MessageBoxStyle from './message-box.style';
import Background from '../Assets/images/background-massage.png';
import Button from '../Button';
import AttachIcon from '../Assets/icon/attach.png';
import DeleteIcon from '../Assets/icon/Trash.png';
import { CardMenu } from '../Card/card.style';
import { database } from '../../firebase';
import { useGetProfileQuery } from '../../app/actions/profile';
import { onValue, push, ref, set, update } from 'firebase/database';
import moment from 'moment';
import { useGetUserDetailQuery } from '../../app/actions/candidates';
import { useNavigate } from 'react-router-dom';
const MessageData = ({
    messagesRef,
    messagesRefForCandidate,
    onDeleteMessage = () => {},
    dataProfile,
    uid
}) => {
    const navigate = useNavigate();
    const boxRef = React.useRef(null);
    const [messagesData, setMessagesData] = React.useState([]);
    const [isScroll, setScroll] = React.useState(false);
    const [form] = Form.useForm();
    const { data } = useGetProfileQuery();
    const { data: dataUser } = useGetUserDetailQuery(uid);
    const items = [
        {
            key: '2',
            label: (
                <CardMenu
                    onClick={() =>
                        onDeleteMessage(
                            `messages/${dataProfile?.data?.uid}/${uid}/`
                        )
                    }>
                    <img src={DeleteIcon} alt="" />
                    Delete message
                </CardMenu>
            )
        }
    ];
    const createMessage = (messageSender, messageSending) => {
        const newMessageRef = push(messagesRef);
        set(newMessageRef, messageSender)
            .then(() => {
                boxRef.current.scrollTop = boxRef.current.scrollHeight;
            })
            .catch((error) => {
                console.log('Error creating message:', error);
            });
        const newMessageRefCandidate = push(messagesRefForCandidate);
        set(newMessageRefCandidate, messageSending)
            .then(() => {
                boxRef.current.scrollTop = boxRef.current.scrollHeight;
            })
            .catch((error) => {
                console.log('Error creating message:', error);
            });
    };
    const hanldeSendMessage = async (value) => {
        const messageSender = {
            text: form.getFieldValue('text_chat'),
            sender: data?.data?.uid,
            uid: uid,
            read: false,
            userTarget: uid,
            timestamp: Date.now()
        };
        const messageSending = {
            text: form.getFieldValue('text_chat'),
            sender: data?.data?.uid,
            read: false,
            uid: uid,
            userTarget: dataProfile?.data?.uid,
            timestamp: Date.now()
        };

        await createMessage(messageSender, messageSending);
        form.setFieldsValue({
            text_chat: ''
        });
    };
    const listenForChat = () => {
        const chatRef = ref(database, `messages/${dataProfile?.data?.uid}/`);
        onValue(chatRef, (snapshot) => {
            let chats = snapshot.val();
            let messageDataList = Object.values(chats);
            let messageTargetList = messageDataList.map((item) => {
                let getReadData = Object.values(item);

                getReadData.forEach((chatTarget, chatTargetId) => {
                    if (chatTarget.read === false) {
                        // Update the chat message read status to true
                    }
                });
                return Object.values(item);
            });
            return messageTargetList;
        });
    };
    const updateChatReadStatus = (chatTarget) => {
        const chatRef = ref(database, messagesRef);
        update(chatRef, { read: true });
    };
    React.useEffect(() => {
        return () => {
            // Clean up any listeners if needed
        };
    }, []);
    React.useEffect(() => {
        if (dataUser?.data?.uid !== messagesData[0]?.uid) {
            setScroll(false);
            onValue(
                messagesRef,
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        const messageDataList = Object.values(data);
                        let groupedByTimestamp = messageDataList.reduce(
                            (result, obj) => {
                                const timestamp =
                                    moment(new Date(obj.timestamp)).format(
                                        'DD/MMM/YYYY'
                                    ) ===
                                    moment(new Date()).format('DD/MMM/YYYY')
                                        ? 'Today'
                                        : moment(
                                              new Date(obj.timestamp)
                                          ).format('DD/MMM/YYYY');
                                if (!result[timestamp]) {
                                    result[timestamp] = [];
                                }
                                result[timestamp].push(obj);
                                return result;
                            },
                            {}
                        );

                        setMessagesData(
                            Object.keys(groupedByTimestamp).map((item) => {
                                return {
                                    date: item,
                                    data: groupedByTimestamp[item]
                                };
                            })
                        );
                        // Object.keys(groupedByTimestamp).forEach(
                        //     (chatId, chatData) => {
                        //         console.log('chatId', chatId);
                        //         console.log('chatData', chatData);
                        //     }
                        // );
                        // Object.entries(groupedByTimestamp).forEach(
                        //     ([chatId, chatData]) => {
                        //         chatData.forEach((chatTarget, chatTargetId) => {
                        //             if (!chatTarget.read) {
                        //                 console.log(
                        //                     'chatTarget read',
                        //                     chatTarget
                        //                 );
                        //                 // Update the chat message read status to true
                        //                 updateChatReadStatus(chatTarget);
                        //             }
                        //         });
                        //     }
                        // );

                        setScroll(true);
                    }
                },
                (error) => {
                    console.log('Error retrieving messages:', error);
                }
            );
            listenForChat();
        }
    }, [dataUser]);
    React.useEffect(() => {
        if (messagesData) {
            boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
    }, [messagesData]);
    return (
        <MessageBoxStyle>
            <div className="message-header">
                <div className="message-header__top">
                    <Avatar
                        src={dataUser?.data?.photo_url}
                        className="message-header__avatar"
                    />
                    <div className="message-header__right">
                        <div className="message-tabs__name">
                            {dataUser?.data?.name}
                        </div>
                        <div className="message-tabs__chat">
                            {messagesData[messagesData.length - 1]?.text}
                        </div>
                    </div>
                </div>
                <div className="message-header__action pointer">
                    <Dropdown
                        menu={{ items }}
                        placement="bottomCenter"
                        trigger="click">
                        <MoreOutlined />
                    </Dropdown>
                </div>
            </div>
            <div className="message-body">
                <img
                    src={Background}
                    alt=""
                    className="message-body__background"
                />
                <div ref={boxRef} className="message-body__chat">
                    <div className="message-body__conversation">
                        {' '}
                        <LockOutlined /> This conversation is confidential and
                        cannot be seen by other users.
                    </div>

                    {messagesData.map((date, key) => (
                        <React.Fragment>
                            <div className="message-body__conversation">
                                {date.date}
                            </div>
                            <div key={key}></div>
                            {date.data.map((message, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={`message-box  ${
                                            message.sender ===
                                            dataProfile?.data?.uid
                                                ? 'message-box__sender'
                                                : 'message-box__for'
                                        }`}>
                                        <div className="message-box__text">
                                            {message.text}
                                        </div>
                                        <div className="message-box__time">
                                            {moment(
                                                new Date(message.timestamp)
                                            ).format('HH:mm')}{' '}
                                            {message.sender ===
                                                dataProfile?.data?.uid && (
                                                <span>
                                                    {' '}
                                                    <CheckOutlined
                                                        style={{
                                                            color: message.read
                                                                ? '#20C1AA'
                                                                : '#666666',
                                                            fontSize: 12
                                                        }}
                                                    />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                    {/* CHAT MESSAGE */}
                </div>
            </div>
            <Form form={form} onFinish={hanldeSendMessage}>
                <div className="message-bottom">
                    <Button className="message-bottom__attach">
                        <img src={AttachIcon} alt="" />
                    </Button>
                    <Form.Item name="text_chat" className="form-input">
                        <Input
                            onFocus={() => navigate(`/Inbox?message=${uid}`)}
                            type={'text'}
                            size="large"
                            width={'max-context'}
                        />
                    </Form.Item>
                    <Button color="outline-primary" htmlType="submit">
                        Send
                    </Button>
                </div>
            </Form>
        </MessageBoxStyle>
    );
};
const MessageBox = ({ onDeleteMessage = () => {}, uid }) => {
    const { data: dataProfile } = useGetProfileQuery();
    let messagesRef = ref(
        database,
        `messages/${dataProfile?.data?.uid}/${uid}/`
    );
    let messagesRefForCandidate = ref(
        database,
        `messages/${uid}/${dataProfile?.data?.uid}/`
    );
    return (
        dataProfile?.data &&
        uid && (
            <MessageData
                uid={uid}
                dataProfile={dataProfile}
                onDeleteMessage={onDeleteMessage}
                messagesRef={messagesRef}
                messagesRefForCandidate={messagesRefForCandidate}
            />
        )
    );
};
export default MessageBox;
