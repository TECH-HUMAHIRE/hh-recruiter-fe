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
import { onValue, push, ref, set } from 'firebase/database';
import { database } from '../../../../firebase';
import { useNavigate, useSearchParams } from 'react-router-dom';

const MessageTab = ({ message = [1, 2], dataProfile }) => {
    let navigate = useNavigate();
    const [paramsUrl, _] = useSearchParams();
    const [isDelete, setDelete] = React.useState(false);
    const [chatActiveId, setChatAvtiveId] = React.useState(null);
    const [dataUsers, setDataUsers] = React.useState([]);
    const onDeleteMessage = () => {
        setDelete(!isDelete);
    };
    const onTabMessage = (id) => {
        setChatAvtiveId(id);
        navigate(`?message=${id}`);
        paramsUrl.set('message', id);
    };
    React.useEffect(() => {
        const dataRef = ref(database, `messages/${dataProfile?.data?.id}`);

        onValue(
            dataRef,
            (snapshot) => {
                // Handle the data changes here
                const data = snapshot.val();
                const dataChat = Object.values(data);
                // setMessagesData(messageDataList);
                setDataUsers(dataChat);
                console.log('Real-time data:', dataChat);
            },
            (error) => {
                console.log(
                    'Error retrieving real-time data:',
                    error.code,
                    error.message
                );
            }
        );
    }, []);
    React.useEffect(() => {
        if (dataUsers.length > 0 && !paramsUrl.get('message')) {
            console.log('dataUsers');
            setChatAvtiveId(Object.values(dataUsers[0])[0].userId);
        }
    }, [dataUsers]);
    React.useEffect(() => {
        if (paramsUrl.get('message')) {
            setChatAvtiveId(paramsUrl.get('message'));
        }
    }, [paramsUrl]);
    console.log('chatActiveId', paramsUrl.get('message'));
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
                            id={chatActiveId}
                            onDeleteMessage={onDeleteMessage}
                        />
                    ) : (
                        <EmptyMessage />
                    )}
                </Col>
            </Row>
            <DeleteMessage isOpen={isDelete} onClose={onDeleteMessage} />
        </div>
    );
};
export default MessageTab;
