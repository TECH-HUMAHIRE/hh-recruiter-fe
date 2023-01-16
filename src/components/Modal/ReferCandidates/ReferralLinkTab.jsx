import { Form, Input, message } from 'antd';
import { duration } from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';

const ReferralLinkTab = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const onCopyLink = (e) => {
        messageApi.open({
            type: 'success',
            content: 'Copied!',
            style: {
                marginTop: '10vh'
            },
            duration: 1
        });
        return navigator.clipboard.writeText(`asdasdasda`);
    };
    return (
        <Form layout="vertical" form={form}>
            <Form.Item label="Shareable link" style={{ marginBottom: 10 }}>
                <div className="form-shareable">
                    <Input
                        readOnly
                        size="large"
                        value={'https://youtube.com'}
                    />
                    {contextHolder}
                    <Button color="primary" onClick={onCopyLink}>
                        Copy
                    </Button>
                </div>
            </Form.Item>
            <div>
                <Link className="refer-link">
                    <a href="">Preview link in new tab</a>
                </Link>
            </div>
            <div className="refer-email__action">
                <Form.Item style={{ marginRight: 10 }}>
                    <Button color="outline-primary">Close</Button>
                </Form.Item>
            </div>
        </Form>
    );
};
export default ReferralLinkTab;
