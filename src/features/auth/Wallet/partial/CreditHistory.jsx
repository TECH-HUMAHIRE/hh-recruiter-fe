import React from 'react';
import { Table } from 'antd';
import ArrowIcon from '../../../../components/Icon/Arrow';
import moment from 'moment';
import { useGetCreditHistoryQuery } from '../../../../app/actions/walletApi';

const CreditHistory = () => {
    const { data } = useGetCreditHistoryQuery();
    console.log(data);
    return (
        <div className="table-history">
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
                        title: 'Job ID',
                        width: 100,
                        dataIndex: 'job_id',
                        key: 'job_id'
                    },
                    {
                        title: 'User',
                        width: 100,
                        dataIndex: 'user',
                        key: 'user.name',
                        render: (user) => {
                            return user.name;
                        }
                    },
                    {
                        title: 'Job',
                        dataIndex: 'Job',
                        key: 'Job',
                        width: 150
                    },
                    {
                        title: 'Item',
                        dataIndex: 'item',
                        key: 'item',
                        width: 150
                    },
                    {
                        title: 'Total Amount',
                        dataIndex: 'total_amount',
                        key: '1',
                        width: 150,
                        render: (user) => {
                            return (
                                <div className={`credit`}>
                                    <ArrowIcon color={`red`} />
                                    <span className="value">
                                        {user.total_amount}
                                    </span>
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
export default CreditHistory;
