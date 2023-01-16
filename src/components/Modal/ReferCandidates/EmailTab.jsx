import { Form, Input } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Row, Col } from '../../Grid';

const EmailTab = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = React.useState({});
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    return (
        <Form requiredMark={'optional'} layout="vertical" form={form}>
            <Row>
                <Col md={6}>
                    <Form.Item
                        name="name"
                        label="Full name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!'
                            }
                        ]}>
                        <Input
                            type={'text'}
                            size="large"
                            placeholder="Full name"
                        />
                    </Form.Item>
                </Col>
                <Col md={6}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            }
                        ]}>
                        <Input
                            type={'email'}
                            size="large"
                            placeholder="Email"
                        />
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your message!'
                            }
                        ]}>
                        <Input.TextArea rows={7} placeholder="Message" />
                    </Form.Item>
                </Col>
                <Col xl={12}>
                    <div className="refer-email__action">
                        <Form.Item style={{ marginRight: 10 }}>
                            <Button color="outline-primary">Cancel</Button>
                        </Form.Item>

                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    color="primary"
                                    htmlType="submit"
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form
                                            .getFieldsError()
                                            .filter(
                                                ({ errors }) => errors.length
                                            ).length
                                    }>
                                    Send Referral
                                </Button>
                            )}
                        </Form.Item>
                    </div>
                </Col>
            </Row>
        </Form>
    );
};
export default EmailTab;
