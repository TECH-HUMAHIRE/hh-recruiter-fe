import React from 'react';
import { Table } from 'antd';
import ArrowIcon from '../../../../components/Icon/Arrow';
import moment from 'moment';
import { useGetCreditHistoryQuery } from '../../../../app/actions/walletApi';
import { formatMoney } from '../../../../components/Utils/formatMoney';

const CreditHistory = () => {
    const { data } = useGetCreditHistoryQuery();
    return (
        <div className="table-history">
            <Table
                columns={[
                    {
                        title: 'Date',
                        width: 100,
                        dataIndex: 'date',
                        key: 'date',
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
                        key: 'user'
                    },
                    {
                        title: 'Job',
                        dataIndex: 'job',
                        key: 'job',
                        width: 150
                    },
                    {
                        title: 'Item',
                        dataIndex: 'item',
                        key: 'item',
                        width: 150,
                        render: (date) => {
                            return 'Success Reffered';
                        }
                    },
                    {
                        title: 'Total Amount',
                        dataIndex: 'commission',
                        key: 'commission',
                        width: 150,
                        render: (commission) => {
                            return (
                                <div className={`debit`}>
                                    <span className="value">
                                        {formatMoney(commission)}
                                    </span>
                                </div>
                            );
                        }
                    }
                ]}
                dataSource={data?.data}
                scroll={{
                    x: 1500,
                    y: 500
                }}
            />
        </div>
    );
};
export default CreditHistory;
