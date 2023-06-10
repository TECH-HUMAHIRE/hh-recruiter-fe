import {
    CheckOutlined,
    CloseOutlined,
    LockOutlined,
    MoreOutlined
} from '@ant-design/icons';
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
import {
    useGetProfileQuery,
    useUploadeFileMutation
} from '../../app/actions/profile';
import { onValue, push, ref, set, update } from 'firebase/database';
import moment from 'moment';
import { useGetUserDetailQuery } from '../../app/actions/candidates';
import { useNavigate } from 'react-router-dom';
import pdf_icon from '../Assets/icon/cvIcon.png';
import ReactQuill from 'react-quill';
import CloseIcon from '../Icon/Close';
import DownloadIcon from '../Icon/Download';
const { TextArea } = Input;
const MessageData = ({
    messagesRef,
    messagesRefForCandidate,
    onDeleteMessage = () => {},
    dataProfile,
    uid
}) => {
    const navigate = useNavigate();
    const boxRef = React.useRef(null);
    const uploadRef = React.useRef(null);
    const [messagesData, setMessagesData] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const [isUpload, setUpload] = React.useState(false);
    const [fileValue, setFileValue] = React.useState('');
    const [isScroll, setScroll] = React.useState(false);
    const [form] = Form.useForm();
    const { data } = useGetProfileQuery();
    const { data: dataUser } = useGetUserDetailQuery(uid);
    const [uploadFile, { data: responseUpload, isSuccess, reset, error }] =
        useUploadeFileMutation({
            fixedCacheKey: 'upload_cv'
        });
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
                setFileValue('');
                setInputValue('');
                setUpload(false);
                boxRef.current.scrollTop = boxRef.current.scrollHeight;
            })
            .catch((error) => {
                console.log('Error creating message:', error);
            });
        const newMessageRefCandidate = push(messagesRefForCandidate);
        set(newMessageRefCandidate, messageSending)
            .then(() => {
                setFileValue('');
                setInputValue('');
                setUpload(false);
                boxRef.current.scrollTop = boxRef.current.scrollHeight;
            })
            .catch((error) => {
                console.log('Error creating message:', error);
            });
    };
    const hanldeSendMessage = async (value) => {
        const messageSender = {
            text: inputValue,
            sender: data?.data?.uid,
            name: dataUser?.data?.name,
            uid: uid,
            link: fileValue,
            read: false,
            userTarget: uid,
            timestamp: Date.now()
        };
        const messageSending = {
            text: inputValue,
            sender: data?.data?.uid,
            name: data?.data?.name,
            link: fileValue,
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
    const onRefUpload = () => {
        uploadRef.current.click();
    };
    const onUploadFile = (e) => {
        let value = e.target.files;
        if (value.length > 0) {
            const formData = new FormData();
            formData.append('file', value[0]);
            formData.append('type', 'message');
            // setNameUpload(name);
            uploadFile(formData);
        }
    };
    const onCancelUpload = () => {
        setUpload(false);
        setInputValue('');
        setFileValue('');
    };
    const onChangeMessage = (value) => {
        setInputValue(value);
    };
    const onDownloadFile = (value) => {
        window.open(
            import.meta.env.VITE_BASE_URL_API + `/download?file_link=${value}`
        );
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
    React.useEffect(() => {
        if (isSuccess) {
            let textValue = responseUpload.data.split('message/');
            setInputValue(textValue[1]);
            setUpload(true);
            setFileValue(responseUpload.data);
            reset();
        }
    }, [isSuccess]);
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
                                        <div
                                            style={{
                                                display: 'block'
                                            }}>
                                            {message?.link?.length > 0 && (
                                                <div
                                                    className="btn-download"
                                                    onClick={() =>
                                                        onDownloadFile(
                                                            message.link
                                                        )
                                                    }>
                                                    <DownloadIcon color="#4d63e2" />
                                                </div>
                                            )}

                                            {message?.link?.length > 0 && (
                                                <div
                                                    style={{
                                                        margin: '0px auto 10px'
                                                    }}>
                                                    <img
                                                        style={{
                                                            width: 30,
                                                            margin: '0px auto 10px'
                                                        }}
                                                        src={pdf_icon}
                                                        alt=""
                                                    />
                                                </div>
                                            )}
                                            <div
                                                className="message-box__text"
                                                dangerouslySetInnerHTML={{
                                                    __html: message.text
                                                }}></div>
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
                                                            color:
                                                                message.read ===
                                                                true
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
                {isUpload ? (
                    <div className="message-upload">
                        <div className="text-center">
                            <div
                                className="message-upload__cancel"
                                onClick={onCancelUpload}>
                                {' '}
                                <CloseIcon />
                            </div>
                            <img src={pdf_icon} alt="" />
                            <p className="message-upload__name">{inputValue}</p>
                            <Button color="primary" htmlType="submit">
                                Send
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="message-bottom">
                        <Button
                            className="message-bottom__attach"
                            onClick={onRefUpload}>
                            <img src={AttachIcon} alt="" />
                        </Button>
                        <input
                            type={'file'}
                            style={{ display: 'none' }}
                            ref={uploadRef}
                            onChange={onUploadFile}
                        />
                        <Form.Item name="text_chat" className="form-input">
                            <ReactQuill
                                value={inputValue}
                                onChange={onChangeMessage}
                                style={{ borderRadius: 8 }}
                                onFocus={() =>
                                    navigate(`/Inbox?message=${uid}`)
                                }
                                formats={[]}
                                modules={{
                                    toolbar: false
                                }}
                                width={'max-context'}
                            />
                        </Form.Item>
                        <Button color="outline-primary" htmlType="submit">
                            Send
                        </Button>
                    </div>
                )}
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
