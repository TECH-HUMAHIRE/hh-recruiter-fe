import React from 'react';
import { Col, Row } from '../../Grid';
import Button from '../../Button';
import { Form, Input, InputNumber } from 'antd';
import LockIcon from '../../Assets/icon/lock.png';
import SelectOption from '../../Form/SelectOption';
const AccountNumber = () => {
    const bankDummy = [
        {
            label: 'PT BCA TBK',
            value: 1
        }
    ];
    return (
        <div className="modal-body">
            <Form layout="vertical">
                <Row>
                    <Col xl={6}>
                        <Form.Item
                            label="Select Bank"
                            rules={{
                                required: true,
                                message: 'Please input your bank'
                            }}>
                            <SelectOption options={bankDummy} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item
                            label="Account Number"
                            rules={{
                                required: true,
                                message: 'Please input your account number'
                            }}>
                            <InputNumber
                                size="large"
                                style={{ width: '100%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item
                            label="Account Name"
                            rules={{
                                required: true,
                                message: 'Please input your account name'
                            }}>
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item
                            label="Bank Branch"
                            rules={{
                                required: true,
                                message: 'Please input your bank branch'
                            }}>
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Button block color="outline-primary">
                            Close
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button block color="primary" disabled={true}>
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default AccountNumber;
