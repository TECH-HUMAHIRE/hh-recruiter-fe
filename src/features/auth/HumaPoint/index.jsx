import { Card, DatePicker, Table } from 'antd';
import React from 'react';
import { Row, Col } from '../../../components/Grid';
import { Style } from './huma-point.style';
import HumaPointTop from './partial/HumaPointTop';
import Button from '../../../components/Button';
import InfoIcon from '../../../components/Assets/icon/info.png';
import { walletApi } from '../../../app/actions/walletApi';
import ArrowIcon from '../../../components/Icon/Arrow';
import { color } from '../../../components/Utils/variable';
import PaginationTable from '../../../components/PaginationTable';
import moment from 'moment';
import CalendarIcon from '../../../components/Icon/CalendarIcon';
const { RangePicker } = DatePicker;

const HumaPoint = () => {
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });

    const [dateParams, setDateParams] = React.useState([]);
    const [dateRangeValue, setDateRangeValue] = React.useState([]);
    const [getHumaPoint, { data }] =
        walletApi.endpoints.humaPoint.useLazyQuery();

    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        getHumaPoint(updateParams);
    };
    const onChangeFilterDate = (dates) => {
        if (dates) {
            setDateParams([
                moment(dates[0]).format('YYYYMMDD'),
                moment(dates[1]).format('YYYYMMDD')
            ]);
            setDateRangeValue(dates);
        } else {
            setDateParams([]);
            setDateRangeValue([]);
        }
    };
    React.useEffect(() => {
        getHumaPoint(params);
    }, []);
    React.useEffect(() => {
        if (dateParams) {
            getHumaPoint({
                ...params,
                start_date: dateParams.length > 0 ? dateParams[0] : '',
                end_date: dateParams.length > 0 ? dateParams[1] : ''
            });
            setParams({
                ...params,
                start_date: dateParams.length > 0 ? dateParams[0] : '',
                end_date: dateParams.length > 0 ? dateParams[1] : ''
            });
        }
    }, [dateParams]);
    return (
        <Style>
            <h2 className="title">Huma Point</h2>
            <Card className="humapoint-header">
                <Row>
                    <Col xl={12}>
                        <HumaPointTop />
                    </Col>
                </Row>
            </Card>
            <Card className="humapoint-card">
                <div className="humapoint-notes">
                    <div className="humapoint-notes__info">
                        <div>
                            <img
                                src={InfoIcon}
                                alt=""
                                className="humapoint-notes__icon"
                            />
                        </div>
                        <div>
                            <div>
                                <b>
                                    Maximize your recruitment process with
                                    Humapoint
                                </b>
                            </div>
                            <div>
                                You can unlock more candidate and job, also
                                refer extra candidate to any employer
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button color="primary" size="medium">
                            Learn more
                        </Button>
                    </div>
                </div>
            </Card>
            <div className="table-header">
                <div>Point history</div>
                <RangePicker
                    suffixIcon={<CalendarIcon />}
                    size="large"
                    value={dateRangeValue}
                    style={{ width: 400 }}
                    format={'YYYY-MM-DD'}
                    onChange={(dates, dateStrings) => onChangeFilterDate(dates)}
                />
            </div>
            <div className="table-history">
                <Table
                    columns={[
                        {
                            title: 'Date',
                            width: 100,
                            dataIndex: 'created_at',
                            key: 'created_at',
                            render: (created_at) => {
                                return moment(created_at).format('DD-MM-Y');
                            }
                        },

                        {
                            title: 'Item',
                            width: 100,
                            dataIndex: 'item',
                            key: 'item'
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
                            title: 'Total Amount',
                            key: '1',
                            width: 150,
                            render: (data) => {
                                return (
                                    <div
                                        className={
                                            data.transaction_type === 'Debet'
                                                ? 'debit'
                                                : `credit`
                                        }>
                                        <ArrowIcon
                                            color={
                                                data.transaction_type ===
                                                'Debet'
                                                    ? `red`
                                                    : color.employee.primary
                                            }
                                        />
                                        <span className="value">
                                            {data.amount}
                                        </span>
                                    </div>
                                );
                            }
                        }
                    ]}
                    pagination={false}
                    dataSource={data?.data}
                    scroll={{
                        x: 1500,
                        y: 500
                    }}
                />
            </div>
            {data?.meta?.info?.total_page > 1 && (
                <div style={{ marginTop: 20 }}>
                    <PaginationTable
                        data={data}
                        refetch={onRefetchCandidates}
                        params={params}
                    />
                </div>
            )}
        </Style>
    );
};
export default HumaPoint;
