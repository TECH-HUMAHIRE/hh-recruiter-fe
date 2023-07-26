import React from 'react';
import { Table } from 'antd';
import ArrowIcon from '../../../../components/Icon/Arrow';
import moment from 'moment';
import { useGetCreditHistoryQuery } from '../../../../app/actions/walletApi';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import PaginationTable from '../../../../components/PaginationTable';

const CreditHistory = ({ dateParams = [] }) => {
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    const { data, refetch } = useGetCreditHistoryQuery(params);
    const onRefetchCandidates = (updateParams) => {
        setParams(updateParams);
        refetch();
    };

    React.useEffect(() => {
        refetch();
    }, []);
    React.useEffect(() => {
        if (dateParams) {
            setParams({
                ...params,
                start_date: dateParams.length > 0 ? dateParams[0] : '',
                end_date: dateParams.length > 0 ? dateParams[1] : ''
            });
            refetch();
        }
    }, [dateParams]);
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
                        dataIndex: 'total_amount',
                        key: 'total_amount',
                        width: 150,
                        render: (total_amount) => {
                            return (
                                <div className={`debit`}>
                                    <span className="value">
                                        {formatMoney(total_amount)}
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
            {data?.meta?.info?.count > 0 && (
                <div style={{ marginTop: 20 }}>
                    <PaginationTable
                        data={data}
                        showSizeChanger={false}
                        refetch={onRefetchCandidates}
                        params={params}
                    />
                </div>
            )}
        </div>
    );
};
export default CreditHistory;
