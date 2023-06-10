import { Form, Input, message } from 'antd';
import React from 'react';
import { useSendReferEmailMutation } from '../../../app/actions/jobApi';
import Button from '../../Button';
import { Row, Col } from '../../Grid';

const EmailTab = ({ onClose = () => {}, data }) => {
    const [messageApi, contextHolder] = message.useMessage();
    // state
    const [form] = Form.useForm();
    const [, forceUpdate] = React.useState({});
    // fetch api
    const [
        sendReferEmail,
        { isSuccess, reset, isError, data: response, error, isLoading }
    ] = useSendReferEmailMutation();

    const onSubmit = (values) => {
        let body = {
            job_id: data?.job_id,
            ...values
        };
        sendReferEmail(body);
    };
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    React.useEffect(() => {
        if (isSuccess) {
            messageApi.open({
                type: 'success',
                content: response.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 3
            });
            form.setFieldsValue({
                candidate_full_name: '',
                candidate_email: '',
                recruiter_message: ''
            });
            onClose();
            reset();
        }
        if (isError) {
            messageApi.open({
                type: 'error',
                content: error.data.meta.message,
                style: {
                    marginTop: '16vh'
                },
                duration: 2
            });
            reset();
        }
    }, [isSuccess, isError]);
    return (
        <Form
            requiredMark={'optional'}
            layout="vertical"
            form={form}
            onFinish={onSubmit}>
            {contextHolder}
            <Row>
                <Col md={6}>
                    <Form.Item
                        name="candidate_full_name"
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
                        name="candidate_email"
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
                        name="recruiter_message"
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
                            <Button color="outline-primary" onClick={onClose}>
                                Cancel
                            </Button>
                        </Form.Item>

                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    loading={isLoading}
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
