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

const MessageBox = ({ onDeleteMessage = () => {} }) => {
    const [form] = Form.useForm();
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
    const hanldeSendMessage = (value) => {
        form.setFieldValue('text_chat', '');
    };
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
                <div className="message-body__chat">
                    <div className="message-body__conversation">
                        {' '}
                        <LockOutlined /> This conversation is confidential and
                        cannot be seen by other users.
                    </div>
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
export default MessageBox;
