import { LockOutlined, MoreOutlined } from '@ant-design/icons';
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
import { onValue, push, ref, set } from 'firebase/database';
import moment from 'moment';
const MessageData = ({
    messagesRef,
    messagesRefForCandidate,
    onDeleteMessage = () => {},
    dataProfile
}) => {
    const boxRef = React.useRef(null);
    const [messagesData, setMessagesData] = React.useState([]);

    const [form] = Form.useForm();
    const { data } = useGetProfileQuery();
    const items = [
        {
            key: '2',
            label: (
                <CardMenu onClick={onDeleteMessage}>
                    <img src={DeleteIcon} alt="" />
                    Delete message
                </CardMenu>
            )
        }
    ];
    const createMessage = (message) => {
        const newMessageRef = push(messagesRef);
        set(newMessageRef, message)
            .then(() => {
                boxRef.current.scrollTop = boxRef.current.scrollHeight;
                console.log('Message created successfully');
            })
            .catch((error) => {
                console.log('Error creating message:', error);
            });
        const newMessageRefCandidate = push(messagesRefForCandidate);
        set(newMessageRefCandidate, message)
            .then(() => {
                boxRef.current.scrollTop = boxRef.current.scrollHeight;
                console.log('Message created successfully');
            })
            .catch((error) => {
                console.log('Error creating message:', error);
            });
    };
    const hanldeSendMessage = async (value) => {
        // const messagesRef = ref(database, 'messages');
        const message = {
            text: form.getFieldValue('text_chat'),
            sender: data?.data?.id,
            timestamp: Date.now()
        };

        await createMessage(message);
        form.setFieldsValue({
            text_chat: ''
        });
    };

    React.useEffect(() => {
        onValue(
            messagesRef,
            (snapshot) => {
                const data = snapshot.val();
                const messageDataList = Object.values(data);
                setMessagesData(messageDataList);
            },
            (error) => {
                console.log('Error retrieving messages:', error);
            }
        );
    }, []);
    React.useEffect(() => {
        if (messagesData.length > 0) {
            boxRef.current.scrollTop = boxRef.current.scrollHeight;
        }
    }, [messagesData]);
    return (
        <MessageBoxStyle>
            <div className="message-header">
                <div className="message-header__top">
                    <Avatar
                        src={dummyUser}
                        className="message-header__avatar"
                    />
                    <div className="message-header__right">
                        <div className="message-tabs__name">Kyari Pamyu</div>
                        <div className="message-tabs__chat">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Animi voluptatum neque ad, ipsam laboriosam
                            iste repellendus aliquid nemo exercitationem
                            provident eum praesentium magnam et quod eveniet ex
                            libero! Distinctio, ad.
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

                    {messagesData.map((message, key) => (
                        <div
                            key={key}
                            className={`message-box  ${
                                message.sender === dataProfile?.data?.id
                                    ? 'message-box__sender'
                                    : 'message-box__for'
                            }`}>
                            <div className="message-box__text">
                                {message.text}
                            </div>
                            <div className="message-box__time">
                                {moment(new Date(message.timestamp)).format(
                                    'HH:mm'
                                )}
                            </div>
                        </div>
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
const MessageBox = ({ onDeleteMessage = () => {} }) => {
    const { data: dataProfile } = useGetProfileQuery();
    const messagesRef = ref(
        database,
        `messages/${dataProfile?.data?.id}/${274}/`
    );
    const messagesRefForCandidate = ref(
        database,
        `messages/${274}/${dataProfile?.data?.id}/`
    );
    return (
        dataProfile?.data && (
            <MessageData
                dataProfile={dataProfile}
                onDeleteMessage={onDeleteMessage}
                messagesRef={messagesRef}
                messagesRefForCandidate={messagesRefForCandidate}
            />
        )
    );
};
export default MessageBox;
