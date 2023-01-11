import React from 'react';
import { Col, Row } from '../../Grid';
import MessegerIcon from '../../Icon/Messeger';
import Button from '../../Button';
import { Form, Input } from 'antd';
import { validateEmail } from '../../Utils/validation';

const EmailTab = ({ verifyEmail = () => {}, onClose = () => {} }) => {
    const [form] = Form.useForm();
    const [isVerify, setVerify] = React.useState(true);
    const [, forceUpdate] = React.useState({});
    const [email, setEmail] = React.useState('');
    const handleChange = (e) => {
        let value = e.target.value;
        setVerify(validateEmail(value));
        setEmail(value);
    };

    // To disable submit button at the beginning.
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    const onFinish = (values) => {
        console.log('Finish:', values);
    };

    return (
        <React.Fragment>
            <div className="modal-body">
                <Form
                    requiredMark={'optional'}
                    form={form}
                    name="profile"
                    layout="vertical"
                    onFinish={onFinish}>
                    <div className="form-email">
                        <Row>
                            <Col xl={6}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your username!'
                                        }
                                    ]}>
                                    <Input
                                        onChange={handleChange}
                                        prefix={<MessegerIcon />}
                                        type={'email'}
                                        size="large"
                                        placeholder="Email"
                                    />
                                </Form.Item>
                                {isVerify && email !== '' && (
                                    <button
                                        color="primary"
                                        className="btn-verify"
                                        onClick={verifyEmail}>
                                        Verify {'>'}
                                    </button>
                                )}
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={6}>
                            <Button
                                block
                                color="outline-primary"
                                onClick={onClose}>
                                Close
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Form.Item shouldUpdate>
                                {() => (
                                    <Button
                                        block
                                        color="primary"
                                        htmlType="submit"
                                        disabled={
                                            !form.isFieldsTouched(true) ||
                                            !!form
                                                .getFieldsError()
                                                .filter(
                                                    ({ errors }) =>
                                                        errors.length
                                                ).length
                                        }>
                                        Save
                                    </Button>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </React.Fragment>
    );
};
export default EmailTab;
