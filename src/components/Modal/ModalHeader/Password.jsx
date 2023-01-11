import React from 'react';
import { Col, Row } from '../../Grid';
import Button from '../../Button';
import { Form } from 'antd';
import LockIcon from '../../Assets/icon/lock.png';

const PasswordTab = ({ changePassword = () => {} }) => {
    return (
        <React.Fragment>
            <div className="modal-body">
                <Form layout="vertical">
                    <Row>
                        <Col xl={12}>
                            <Form.Item label="Password">
                                <div className="password-form">
                                    <img
                                        src={LockIcon}
                                        alt=""
                                        className="password-icon"
                                    />{' '}
                                    <span className="text-password">
                                        password
                                    </span>
                                    <div
                                        className="password-change"
                                        onClick={changePassword}>
                                        Change Password
                                    </div>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button block color="outline-primary">
                                Close
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Button block color="primary" disabled={true}>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </React.Fragment>
    );
};
export default PasswordTab;
