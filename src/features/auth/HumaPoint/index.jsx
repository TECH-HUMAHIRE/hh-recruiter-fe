import { Card, Table } from 'antd';
import React from 'react';
import { Row, Col } from '../../../components/Grid';
import { Style } from './huma-point.style';
import HumaPointTop from './partial/HumaPointTop';
import moment from 'moment';
import Button from '../../../components/Button';
import InfoIcon from '../../../components/Assets/icon/info.png';

const HumaPoint = () => {
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
            </div>
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
                            title: 'Value',
                            dataIndex: 'user',
                            key: '1',
                            width: 150,
                            render: (user) => {
                                return (
                                    <div className={`credit`}>
                                        <ArrowIcon color={`red`} />
                                        <span className="value">
                                            {user.credit_used}
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
        </Style>
    );
};
export default HumaPoint;
