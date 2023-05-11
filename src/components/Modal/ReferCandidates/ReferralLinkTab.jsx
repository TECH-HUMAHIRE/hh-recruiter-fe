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
    return (
        <Form layout="vertical" form={form}>
            <Form.Item label="Shareable link" style={{ marginBottom: 10 }}>
                <div className="form-shareable">
                    <Input
                        readOnly
                        size="large"
                        value={
                            window.location.origin +
                            `/huma-hire-job?ref=${data?.job?.referral_code}`
                        }
                    />
                    {contextHolder}
                    <Button
                        color="primary"
                        onClick={() =>
                            onCopyLink(
                                window.location.origin +
                                    `//huma-hire-job?ref=${data?.job?.referral_code}`
                            )
                        }>
                        Copy
                    </Button>
                </div>
            </Form.Item>
            <div>
                <a
                    className="refer-link"
                    href={
                        window.location.origin +
                        `/huma-hire-job?ref=${data?.job?.referral_code}`
                    }
                    target="_blank">
                    Preview link in new tab
                </a>
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
