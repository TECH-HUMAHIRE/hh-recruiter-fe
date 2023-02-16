import React from 'react';
import { Col, Row } from '../../Grid';
import MessegerIcon from '../../Icon/Messeger';
import Button from '../../Button';
import { Form, Input, message } from 'antd';
import { validateEmail } from '../../Utils/validation';
import {
    useGetProfileQuery,
    useUpdateProfileMutation
} from '../../../app/actions/profile';

const EmailTab = ({ verifyEmail = () => {}, onClose = () => {} }) => {
    const { data, isSuccess } = useGetProfileQuery({
        fakeAuthProvider: 'myCompany'
    });
    const [updateProfile, response] = useUpdateProfileMutation();
    const [messageApi, contextHolder] = message.useMessage();

    const [form] = Form.useForm();
    const [isVerify, setVerify] = React.useState(true);
    const [, forceUpdate] = React.useState({});
    const handleChange = (e) => {
        let value = e.target.value;
        setVerify(validateEmail(value));
    };
    const onFinish = (values) => {
        updateProfile({
            ...values,
            name: data?.data?.name,
            phone: data?.data?.phone
        });
    };

    // To disable submit button at the beginning.
    React.useEffect(() => {
        forceUpdate({});
    }, []);

    React.useEffect(() => {
        if (isSuccess) {
            form.setFieldsValue({
                ...data?.data
            });
        }
    }, [isSuccess]);
    React.useEffect(() => {
        if (response.isSuccess) {
            messageApi.open({
                type: 'success',
                content: response?.data?.meta?.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
        }
        if (response.error) {
            messageApi.open({
                type: 'error',
                content: response?.data?.meta?.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
        }
    }, [response]);
    return (
        <React.Fragment>
            <div className="modal-body">
                {contextHolder}
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
                                {isVerify &&
                                    form.getFieldsValue('email') !== '' && (
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
