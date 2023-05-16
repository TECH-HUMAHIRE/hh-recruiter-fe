import React from 'react';
import MessegerIcon from '../../Icon/Messeger';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import ChatMessegerIcon from '../../Icon/ChatMesseger';
import { Form, Input, message, Radio } from 'antd';
import SelectOption from '../../Form/SelectOption';
import {
    useGetBankListQuery,
    usePostBankMutation
} from '../../../app/actions/profile';
import { PlusOutlined } from '@ant-design/icons';

const bankList = [
    {
        label: 'BCA',
        value: 'BCA'
    }
];
const AccountNumber = ({ onClose = () => {} }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [, forceUpdate] = React.useState({});

    // STATE
    const [isShowForm, setShowForm] = React.useState(false);

    // FETCH API
    const [postBank, { data, isSuccess, reset, isLoading }] =
        usePostBankMutation();
    const { data: bankListQuery } = useGetBankListQuery();
    const onFinish = (values) => {
        postBank(values);
    };

    // function
    const onShowForm = () => {
        setShowForm(!isShowForm);
    };
    // To disable submit button at the beginning.
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    React.useEffect(() => {
        if (isSuccess) {
            messageApi.open({
                type: 'success',
                content: data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 3
            });
            form.setFieldsValue({
                bank: '',
                account_number: '',
                bank_branch: '',
                account_name: ''
            });
            setShowForm(!isShowForm);
            reset();
        }
    }, [isSuccess]);
    return (
        <React.Fragment>
            {contextHolder}
            {bankListQuery?.data?.length > 0 && (
                <div className="modal-body">
                    <div className="text-right">
                        <Button
                            onClick={onShowForm}
                            icon={!isShowForm && <PlusOutlined />}
                            color="outline-primary">
                            {!isShowForm ? 'Account Number' : 'Close'}
                        </Button>
                    </div>
                </div>
            )}
            {bankListQuery?.data?.length < 1 ||
                (isShowForm && (
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
                                                message:
                                                    'Please input your username!'
                                            }
                                        ]}>
                                        <SelectOption options={bankList} />
                                    </Form.Item>
                                </Col>
                                <Col md={6}>
                                    <Form.Item
                                        label="Account Number"
                                        name="account_number"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your phone!',
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
                                        name="account_name"
                                        label="Account Name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your job!'
                                            }
                                        ]}>
                                        <Input
                                            type={'text'}
                                            size="large"
                                            placeholder="Account Name"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={6}>
                                    <Form.Item
                                        name="bank_branch"
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
                                <Col
                                    md={
                                        bankListQuery?.data?.length > 0 ? 12 : 8
                                    }>
                                    <Form.Item shouldUpdate>
                                        {() => (
                                            <Button
                                                loading={isLoading}
                                                block
                                                color="primary"
                                                htmlType="submit"
                                                disabled={
                                                    !form.isFieldsTouched(
                                                        true
                                                    ) ||
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
                                {bankListQuery?.data?.length < 1 && (
                                    <Col md={4}>
                                        <Button
                                            block
                                            color="outline-primary"
                                            onClick={onClose}>
                                            Close
                                        </Button>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </Form>
                ))}
            {bankListQuery?.data?.length > 0 && (
                <div className="modal-body">
                    {bankListQuery?.data?.map((item, key) => {
                        return (
                            <div className="account-list" key={key}>
                                <div>
                                    <h4 className="title">{item.bank}</h4>
                                    <div>
                                        {item.account_number} an{' '}
                                        {item.account_name}
                                    </div>
                                </div>
                                <div>{/* IMAGE BANK */}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </React.Fragment>
    );
};
export default AccountNumber;
