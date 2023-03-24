import React from 'react';
import MessegerIcon from '../../Icon/Messeger';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import ChatMessegerIcon from '../../Icon/ChatMesseger';
import { Form, Input, message, Radio } from 'antd';
import {
    useGetProfileQuery,
    useUpdateProfileMutation
} from '../../../app/actions/profile';

const ProfileTab = ({ onClose = () => {} }) => {
    const [updateProfile, response] = useUpdateProfileMutation();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isSuccess: successGetProfile } = useGetProfileQuery({
        fakeAuthProvider: 'myCompany'
    });
    const [form] = Form.useForm();
    const [, forceUpdate] = React.useState({});
    const onFinish = (values) => {
        updateProfile({ ...values, email: data?.data?.email });
    };
    // To disable submit button at the beginning.
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    React.useEffect(() => {
        if (successGetProfile) {
            form.setFieldsValue({
                ...data?.data,
                phone: data?.data?.phone
            });
        }
    }, [successGetProfile]);
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
        <Form
            requiredMark={'optional'}
            form={form}
            name="profile"
            layout="vertical"
            onFinish={onFinish}>
            <div className="modal-body">
                {contextHolder}
                <Row>
                    <Col md={6}>
                        <Form.Item
                            name="name"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]}>
                            <Input
                                type={'text'}
                                size="large"
                                placeholder="Username"
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            name="phone"
                            label="Phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone!',
                                    pattern: new RegExp(/^[0-9]+$/)
                                }
                            ]}>
                            <Input
                                size="large"
                                type="number"
                                placeholder="Phone number"
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            label="Linked URL"
                            name="website_url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your linked URL!'
                                },
                                {
                                    type: 'url',
                                    message: 'invalid url'
                                }
                            ]}>
                            <Input
                                type={'text'}
                                size="large"
                                placeholder="Linked URL"
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            // name="departement"
                            label="Recruiting Specialization"
                            // rules={[
                            //     {
                            //         required: false,
                            //         message: 'Please input your departement!'
                            //     }
                            // ]}
                        >
                            <Input
                                type={'text'}
                                size="large"
                                placeholder="Departement"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="modal-body">
                <Row>
                    <Col md={12}>
                        <Form.Item
                            // name="language"
                            label="Language"
                            // rules={[
                            //     {
                            //         required: false,
                            //         message: 'Please input your language!'
                            //     }
                            // ]}
                        >
                            <Radio.Group name="language">
                                <Row>
                                    <Col md={6}>
                                        <Radio
                                            className="radio-label"
                                            value={'English'}>
                                            English
                                        </Radio>
                                    </Col>
                                    <Col md={6}>
                                        <Radio
                                            className="radio-label"
                                            value={'Indonesia'}>
                                            Indonesia
                                        </Radio>
                                    </Col>
                                </Row>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="modal-body">
                <label htmlFor="">HumaHire Customer Service</label>
                <Row>
                    <Col md={6}>
                        <a
                            href="mailto:customer.service@humahire.com"
                            className="mailto">
                            <MessegerIcon /> customer.service@humahire.com
                        </a>
                    </Col>
                    <Col md={6}>
                        <Button
                            icon={<ChatMessegerIcon />}
                            block
                            color="outline-primary">
                            Chat Customer Service
                        </Button>
                    </Col>
                    <Col xl={12}>
                        <div className="operational">
                            Operating hours: 08:00 - 18:00, Monday - Friday.
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button block color="outline-primary" onClick={onClose}>
                            Close
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    loading={response.isLoading}
                                    block
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
                                    Save
                                </Button>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        </Form>
    );
};
export default ProfileTab;
