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
import { onValue, ref } from 'firebase/database';
import { database } from '../../../../firebase';

const MessageTab = ({ message = [1, 2], dataProfile }) => {
    const [isDelete, setDelete] = React.useState(false);
    const [dataUsers, setDataUsers] = React.useState([]);
    const onDeleteMessage = () => {
        setDelete(!isDelete);
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
        // const dataRef = ref(database, 'test/');
        // get(dataRef)
        //     .then((snapshot) => {
        //         if (snapshot.exists()) {
        //             const data = snapshot.val();
        //             console.log('data', data);
        //             // Do something with the data
        //         } else {
        //             console.log('No data available');
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }, []);
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
                    {dataUsers.map((item, key) => {
                        return <UserListMessage data={item} key={key} />;
                    })}

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
