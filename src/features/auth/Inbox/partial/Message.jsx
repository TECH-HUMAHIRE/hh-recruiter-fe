import { Card, Form, Input } from 'antd';
import React from 'react';
// import EmptyMessage from '../../../../components/EmptyMessage';
import { Col, Row } from '../../../../components/Grid';
import UserListMessage from './UserListMessage';
// import TabMenu from '../../../../components/Tabs';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import Button from '../../../../components/Button';
import MessageBox from '../../../../components/MessageBox';
import DeleteMessage from '../../../../components/Modal/DeleteMessage';

const MessageTab = ({ message = [1, 2] }) => {
    const [isDelete, setDelete] = React.useState(false);
    const onDeleteMessage = () => {
        setDelete(!isDelete);
    };
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
                    <UserListMessage />
                    {/* <TabMenu item={itemTabs} tabPosition="left" /> */}
                </Col>
                <Col md={8}>
                    {/* <EmptyMessage /> */}
                    <MessageBox onDeleteMessage={onDeleteMessage} />
                </Col>
            </Row>
            <DeleteMessage isOpen={isDelete} onClose={onDeleteMessage} />
        </div>
    );
};
export default MessageTab;
