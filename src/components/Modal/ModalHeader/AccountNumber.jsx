import React from 'react';
import MessegerIcon from '../../Icon/Messeger';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import ChatMessegerIcon from '../../Icon/ChatMesseger';
import { Form, Input, Radio } from 'antd';
import SelectOption from '../../Form/SelectOption';

const bankList = [
    {
        label: 'BCA',
        value: 'BCA'
    }
];
const AccountNumber = ({ onClose = () => {} }) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = React.useState({});
    const onFinish = (values) => {};
    // To disable submit button at the beginning.
    React.useEffect(() => {
        forceUpdate({});
    }, []);

    return (
        <Form
            requiredMark={'optional'}
            form={form}
            name="profile"
            layout="vertical"
            onFinish={onFinish}>
            <div className="modal-body">
                <Row>
                    <Col md={6}>
                        <Form.Item
                            name="bank"
                            label="Select Bank"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]}>
                            <SelectOption options={bankList} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            name="Account Number"
                            label="accountNumber"
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
                            // name="job_role"
                            label="Account Name"
                            // rules={[
                            //     {
                            //         required: false,
                            //         message: 'Please input your job!'
                            //     }
                            // ]}
                        >
                            <Input
                                type={'text'}
                                size="large"
                                placeholder="Account Name"
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            // name="departement"
                            label="Bank Branch"
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
                                placeholder="Bank Branch"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
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
                                                ({ errors }) => errors.length
                                            ).length
                                    }>
                                    Save
                                </Button>
                            )}
                        </Form.Item>
                    </Col>
                    <Col md={4}>
                        <Button block color="outline-primary" onClick={onClose}>
                            Close
                        </Button>
                    </Col>
                </Row>
            </div>
        </Form>
    );
};
export default AccountNumber;
