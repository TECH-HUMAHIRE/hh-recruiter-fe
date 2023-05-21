import React from 'react';
import Button from '../../Button';
import DetailTransasctionStyle from './detail-transaction.style';
import { Col, Row } from '../../Grid';
import WalletIcon from '../../Icon/Wallet';
// import UserIcon from '../../Icon/User';
import { Card, Skeleton, Tag } from 'antd';
import { formatMoney, percentage } from '../../Utils/formatMoney';
import moment from 'moment';
import DownloadIcon from '../../Icon/Download';
import CalendarIcon from '../../Icon/CalendarIcon';
import { color } from '../../Utils/variable';
import UserIcon from '../../Icon/User';

const DetailTransasction = ({
    isOpen = false,
    isPreview = true,
    onClose = () => {},
    data = false,
    onDownload = () => {}
}) => {
    return (
        <DetailTransasctionStyle
            title={<h3 className="title">Detail transaction</h3>}
            open={isOpen}
            footer={null}
            width={1000}
            onCancel={onClose}>
            <div className="transaction">
                <div className="transaction-header">
                    <div className="transaction-header__right">
                        <h2 className="title">{data?.receipt_number}</h2>
                        <Tag
                            className="transaction-status"
                            color={
                                data?.status === 'request'
                                    ? 'red'
                                    : data?.status === 'receive'
                                    ? 'green'
                                    : 'orange'
                            }>
                            {data?.status}
                        </Tag>
                    </div>
                    <div>
                        <Button
                            size="medium"
                            icon={
                                <DownloadIcon color={color.employee.primary} />
                            }
                            color="outline-primary">
                            Download
                        </Button>
                    </div>
                </div>
                <div className="transaction-information">
                    <Row>
                        <Col md={3}>
                            <div className="transaction-information__card">
                                <div className="transaction-information__icon">
                                    <CalendarIcon />
                                </div>
                                <div>
                                    <div className="transaction-information__label">
                                        Order date
                                    </div>
                                    <div className="transaction-information__value">
                                        {moment(data?.payment_at).format(
                                            'DD-MM-YYYY • HH:mm'
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="transaction-information__card">
                                <div className="transaction-information__icon">
                                    <WalletIcon color="#AAAAAA" />
                                </div>
                                <div>
                                    <div className="transaction-information__label">
                                        Payment method
                                    </div>
                                    <div className="transaction-information__value">
                                        {data?.account_number?.bank?.name}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="transaction-information__card">
                                <div className="transaction-information__icon">
                                    <UserIcon color="#AAAAAA" />
                                </div>
                                <div>
                                    <div className="transaction-information__label">
                                        User
                                    </div>
                                    <div className="transaction-information__value">
                                        {data?.user?.name}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Card>
                    <h3 className="title">Transaction details</h3>
                    <div className="transaction-detail">
                        <div>
                            <h4 className="title title-pack">
                                Withdraw Credit
                            </h4>
                        </div>
                        <div>{formatMoney(data?.withdrawal_amount)}</div>
                    </div>
                    <div className="hr"></div>
                    <div className="transaction-calculate">
                        <div className="transaction-menu">
                            <div className="transaction-menu__label">
                                Subtotal
                            </div>
                            {data ? (
                                <div className="transaction-menu__price">
                                    {formatMoney(data?.withdrawal_amount)}
                                </div>
                            ) : (
                                <Skeleton.Input />
                            )}
                        </div>

                        <div className="transaction-menu">
                            <div className="transaction-menu__label">
                                Admin Service
                            </div>
                            <div className="transaction-menu__price">Free</div>
                        </div>
                        <div className="hr"></div>
                        <div className="transaction-menu">
                            <div className="transaction-menu__label grand_total">
                                Grand total
                            </div>
                            <div className="transaction-menu__price total">
                                {formatMoney(data?.withdrawal_amount)}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </DetailTransasctionStyle>
    );
};
export default DetailTransasction;
