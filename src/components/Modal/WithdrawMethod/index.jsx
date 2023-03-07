import { Card, List, Radio } from 'antd';
import React from 'react';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import PrintIcon from '../../Icon/Print';
import OrderSummary from '../../OrderSummary';
import WithdrawMethodStyle from './withdraw-methods.style';
import bcaIcon from '../../Assets/images/example2.png';

const WithdrawMethod = ({
    isOpen = true,
    packageItem,
    onClose = () => {},
    onShowVerify = () => {}
}) => {
    return (
        <WithdrawMethodStyle
            title={
                <div className="modal-header">
                    <div className="modal-header__left">
                        <img
                            src={ArrowLeft}
                            alt=""
                            onClick={onClose}
                            className="close-icon"
                        />
                        <h3 className="title">Withdraw methods</h3>
                    </div>
                </div>
            }
            open={isOpen}
            footer={null}
            width={1200}
            closable={false}>
            <Row>
                <Col md={7}>
                    <h3 className="title">Select Account Number</h3>
                    <div className="payment-list">
                        <div>
                            <Radio.Group name="payment-channel">
                                <Radio value="transfer">
                                    <div className="payment-account">
                                        <div className="payment-account__info">
                                            <div className="payment-account__bank">
                                                PT BCA TBK
                                            </div>
                                            <div className="payment-account__number">
                                                08872661237 an John Doe
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src={bcaIcon}
                                                alt=""
                                                className="payment-account__image"
                                            />
                                        </div>
                                    </div>
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="payment-instructions">
                        <h4 className="title">Instructions</h4>
                        <List itemLayout="vertical">
                            <List.Item.Meta
                                description={
                                    <div className="payment-instructions__list">
                                        <span className="payment-instructions__list-number">
                                            1
                                        </span>{' '}
                                        <span className="payment-instructions__list-desc">
                                            Lorem Ipsum is simply dummy text of
                                            the printing.
                                        </span>
                                    </div>
                                }
                            />
                            <List.Item.Meta
                                description={
                                    <div className="payment-instructions__list">
                                        <span className="payment-instructions__list-number">
                                            2
                                        </span>{' '}
                                        <span className="payment-instructions__list-desc">
                                            {' '}
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                        </span>
                                    </div>
                                }
                            />
                            <List.Item.Meta
                                description={
                                    <div className="payment-instructions__list">
                                        <span className="payment-instructions__list-number">
                                            3
                                        </span>{' '}
                                        <span className="payment-instructions__list-desc">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                        </span>
                                    </div>
                                }
                            />
                            <List.Item.Meta
                                description={
                                    <div className="payment-instructions__list">
                                        <span className="payment-instructions__list-number">
                                            4
                                        </span>
                                        <span className="payment-instructions__list-desc">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s.
                                        </span>
                                    </div>
                                }
                            />
                            <List.Item.Meta
                                description={
                                    <div className="payment-instructions__list">
                                        <span className="payment-instructions__list-number">
                                            5
                                        </span>{' '}
                                        <span className="payment-instructions__list-desc">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s.
                                        </span>
                                    </div>
                                }
                            />
                        </List>
                    </div>
                </Col>
                <Col md={5}>
                    <OrderSummary
                        onAction={onShowVerify}
                        packageItem={packageItem}
                    />
                </Col>
            </Row>
        </WithdrawMethodStyle>
    );
};
export default WithdrawMethod;