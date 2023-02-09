import React from 'react';
import Style from './modal-header.style';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import Button from '../../Button';
import { Form, Input, message } from 'antd';
import LockIcon from '../../Assets/icon/lock.png';
import { Row } from '../../Grid';
import { Col } from '../../Grid';
import { useChangePasswordMutation } from '../../../app/actions/profile';

const ChangePassword = ({ isOpen = false, onClose = () => {} }) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [, forceUpdate] = React.useState({});
    const [changePassword, { isLoading, isError, error }] =
        useChangePasswordMutation({
            fixedCacheKey: 'change_password'
        });
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    const onFinish = (values) => {
        changePassword({ ...values });
    };

    React.useEffect(() => {
        if (isError) {
            messageApi.open({
                type: 'error',
                content: error.data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 3
            });
        }
    }, [isError]);
    return (
        <Style
            open={isOpen}
            footer={null}
            closable={false}
            title={
                <>
                    <h3 className="title modal-header">
                        <img
                            src={ArrowLeft}
                            alt=""
                            onClick={onClose}
                            className="close-icon"
                        />{' '}
                        Change Password
                    </h3>
                </>
            }>
            {contextHolder}
            <div className="modal-body">
                <Form
                    requiredMark={'optional'}
                    form={form}
                    layout="vertical"
                    name="change_password"
                    onFinish={onFinish}>
                    <Row>
                        <Col xl={12}>
                            <Form.Item
                                name="old_password"
                                label="Current password"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your current password!'
                                    }
                                ]}>
                                <Input.Password
                                    prefix={<img src={LockIcon} alt="" />}
                                    type={'password'}
                                    size="large"
                                    placeholder="Current password"
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={12}>
                            <Form.Item
                                name="new_password"
                                label="New password"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your new password!'
                                    }
                                ]}>
                                <Input.Password
                                    prefix={<img src={LockIcon} alt="" />}
                                    type={'password'}
                                    size="large"
                                    placeholder="New password"
                                />
                            </Form.Item>
                        </Col>
                        <Col xl={12}>
                            <div className="text-right">
                                <Form.Item shouldUpdate>
                                    {() => (
                                        <Button
                                            loading={isLoading}
                                            block
                                            color="outline-primary"
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
                                            Change Password
                                        </Button>
                                    )}
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Style>
    );
};
export default ChangePassword;
