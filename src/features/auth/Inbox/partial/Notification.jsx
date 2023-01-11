import { CheckOutlined, MoreOutlined } from '@ant-design/icons';
import { Dropdown, List } from 'antd';
import React from 'react';
import { CardMenu } from '../../../../components/Card/card.style';
import SettingIcon from '../../../../components/Icon/Setting';
import DeleteIcon from '../../../../components/Assets/icon/Trash.png';
import { Col, Row } from '../../../../components/Grid';

const NotificationTab = () => {
    const items = [
        {
            key: '1',
            label: (
                <CardMenu>
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
    return (
        <Row>
            <Col md={11}>
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
                                    <SettingIcon color="#AAAAAA" />
                                </div>
                            }
                            title={<a href="https://ant.design">lorem ipsum</a>}
                            description="Dear All, Due to scheduled maintenance activity. Will not be available on 8th May 2022 from 02:00 AM to 05:00 AM. Regret inconvenience 
                        caused. Warm Regards, HumaHire"
                        />
                    </List.Item>
                </List>
            </Col>
        </Row>
    );
};
export default NotificationTab;
