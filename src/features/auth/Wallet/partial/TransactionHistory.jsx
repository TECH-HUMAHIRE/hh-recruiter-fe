import React from 'react';
import { Table, Tag, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import DownloadIcon from '../../../../components/Icon/Download';
import moment from 'moment';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import { useGetWithdrawQuery } from '../../../../app/actions/walletApi';
import PaginationTable from '../../../../components/PaginationTable';

const TransactionHistory = ({ onShowDetail = () => {} }) => {
    // STATE
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    // FETCH API
    const { data: dataTable, isSuccess } = useGetWithdrawQuery();
    // FUNCTION
    const onRefetchCandidates = (updateParams) => {
        setParams(updateParams);
    };
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
                                        {data.receipt_number}
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
                        dataIndex: 'account_number',
                        key: 'account_number',
                        render: (account_number) => {
                            return account_number.account_number;
                        }
                    },
                    {
                        title: 'Withdrawal Amount',
                        dataIndex: 'withdrawal_amount',
                        key: 'withdrawal_amount',
                        width: 150,
                        render: (withdrawal_amount) => {
                            return formatMoney(withdrawal_amount);
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
                pagination={false}
                dataSource={dataTable?.data}
                scroll={{
                    x: 1500,
                    y: 500
                }}
            />
            {dataTable?.meta?.info?.count > 0 && (
                <div style={{ marginTop: 20 }}>
                    <PaginationTable
                        data={dataTable}
                        showSizeChanger={false}
                        refetch={onRefetchCandidates}
                        params={params}
                    />
                </div>
            )}
        </div>
    );
};
export default TransactionHistory;
