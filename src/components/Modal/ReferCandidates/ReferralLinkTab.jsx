import { Form, Input, message } from 'antd';
import { duration } from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';

const ReferralLinkTab = ({ onClose = () => {}, data }) => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const onCopyLink = (link) => {
        messageApi.open({
            type: 'success',
            content: 'Copied!',
            style: {
                marginTop: '10vh'
            },
            duration: 1
        });
        return navigator.clipboard.writeText(link);
    };
    console.log('data', data);
    return (
        <Form layout="vertical" form={form}>
            <Form.Item label="Shareable link" style={{ marginBottom: 10 }}>
                <div className="form-shareable">
                    <Input
                        readOnly
                        size="large"
                        value={
                            window.location.origin +
                            `/?ref=${data?.job?.referral_code}`
                        }
                    />
                    {contextHolder}
                    <Button
                        color="primary"
                        onClick={() =>
                            onCopyLink(
                                window.location.origin +
                                    `/?ref=${data?.job?.referral_code}`
                            )
                        }>
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
                    <Button color="outline-primary" onClick={onClose}>
                        Close
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};
export default ReferralLinkTab;
