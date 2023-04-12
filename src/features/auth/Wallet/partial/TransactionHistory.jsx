import React from 'react';
import { Table, Tag, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import DownloadIcon from '../../../../components/Icon/Download';
import moment from 'moment';
import { formatMoney } from '../../../../components/Utils/formatMoney';

const TransactionHistory = ({ onShowDetail = () => {} }) => {
    return (
        <div>
            <Table
                columns={[
                    {
                        title: 'Date',
                        width: 100,
                        dataIndex: 'created_at',
                        key: 'created_at',
                        render: (date) => {
                            return moment(date).format('DD-MM-Y');
                        }
                    },

                    {
                        title: 'Recipt',
                        width: 100,
                        dataIndex: '',
                        render: (data) => {
                            return (
                                <>
                                    <span style={{ marginRight: 5 }}>
                                        {data.code}
                                    </span>
                                    <Tag
                                        color={
                                            data.status === 'UNPAID'
                                                ? 'red'
                                                : data.status === 'PAID'
                                                ? 'green'
                                                : 'orange'
                                        }>
                                        {data.status}
                                    </Tag>
                                </>
                            );
                        },
                        key: 'invoice'
                    },
                    {
                        title: 'Account Number',
                        width: 100,
                        dataIndex: 'user',
                        key: 'user.name',
                        render: (user) => {
                            return user.name;
                        }
                    },
                    {
                        title: 'Withdrawal Amount',
                        dataIndex: 'items',
                        key: 'items[0].item',
                        width: 150,
                        render: (item) => {
                            return item[0].item;
                        }
                    },
                    
                    {
                        title: 'Action',
                        dataIndex: '',
                        key: 'data',
                        fixed: 'right',
                        width: 100,
                        render: (value) => {
                            return (
                                <div className="action-table">
                                    <Button
                                        type="link"
                                        onClick={() => onShowDetail(value)}>
                                        <EyeOutlined
                                            width={'44px'}
                                            style={{ fill: '#aaaa' }}
                                        />
                                    </Button>
                                    <Button type="link">
                                        <DownloadIcon />
                                    </Button>
                                </div>
                            );
                        }
                    }
                ]}
                dataSource={[]}
                scroll={{
                    x: 1500,
                    y: 500
                }}
            />
        </div>
    );
};
export default TransactionHistory;
