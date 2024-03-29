import React from 'react';
import { Col, Row } from '../../../components/Grid';
import Style from './forgot-password.style';
import Logo from '../../../components/Assets/icon/huma_hire.png';
import DescIcon from '../../../components/Assets/icon/registration_desc.png';
import IconTop from '../../../components/Assets/icon/background-icon.png';
import IconBottom from '../../../components/Assets/icon/resgistration-icon-bottom.png';
import IconTopRight from '../../../components/Assets/icon/registration-top-right.png';
import Button from '../../../components/Button';
import { Form, Input, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForgotPasswordMutation } from '../../../app/actions/userAuth';
const ForgorPassword = () => {
    const [paramsUrl, _] = useSearchParams();
    const [messageApi, contextHolder] = message.useMessage();
    let navigate = useNavigate();

    const [forgotPassword, { data, isSuccess, isError, error, isLoading }] =
        useForgotPasswordMutation();

    const onSubmitForm = (values) => {
        let token = paramsUrl.get('token');
        let body = {
            ...values,
            token: token.replace(/ /g, '+')
        };
        forgotPassword({ ...body });
    };
    React.useEffect(() => {
        if (!paramsUrl.get('token') || paramsUrl.get('token')?.length < 20) {
            navigate('/');
        }
    }, [paramsUrl]);
    React.useEffect(() => {
        if (isSuccess) {
            messageApi.open({
                type: 'success',
                content: data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        if (isError) {
            messageApi.open({
                type: 'error',
                content: error.data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
        }
    }, [isSuccess, isError]);
    return (
        <Style>
            {contextHolder}
            <Row style={{ height: '100%' }}>
                <Col md={4}>
                    <div className="registration">
                        <div>
                            <img className="icon-top" src={IconTop} alt="" />
                            <img
                                className="icon-bottom"
                                src={IconBottom}
                                alt=""
                            />
                            <img
                                className="icon-top__right"
                                src={IconTopRight}
                                alt=""
                            />
                            <div className="registration-logo">
                                <img src={Logo} alt="HumaHire" />
                            </div>
                            <h1 className="title">New Password</h1>
                            <div className="registration-desc">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="form-verification">
                        <Row justify="center" align="center">
                            <Col md={12}>
                                <Form layout="vertical" onFinish={onSubmitForm}>
                                    <h1 className="title">
                                        Create new password
                                    </h1>
                                    <div style={{ marginBottom: 25 }}>
                                        Make a new password to sign in to
                                        Humahire.
                                    </div>
                                    <div className="code-verification">
                                        <Form.Item
                                            name="new_password"
                                            label="New Password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Input your new password'
                                                },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (value.length < 6) {
                                                            return Promise.reject(
                                                                new Error(
                                                                    'Minimum 6 characters'
                                                                )
                                                            );
                                                        } else if (
                                                            value.length > 12
                                                        ) {
                                                            return new Promise.reject(
                                                                new Error(
                                                                    'Maximum 12 characters'
                                                                )
                                                            );
                                                        }
                                                        return Promise.resolve();
                                                    }
                                                })
                                            ]}>
                                            <Input.Password
                                                placeholder="6 - 12 Characters"
                                                size="large"
                                                prefix={
                                                    <LockOutlined className="site-form-item-icon" />
                                                }
                                            />
                                        </Form.Item>
                                    </div>

                                    <Button
                                        loading={isLoading}
                                        color="primary"
                                        block
                                        htmlType="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Style>
    );
};
export default ForgorPassword;
