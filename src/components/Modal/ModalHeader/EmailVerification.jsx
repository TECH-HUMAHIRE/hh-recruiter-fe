import React from 'react';
import Style from './modal-header.style';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import InputVerification from '../../InputVerification';
import { Row } from '../../Grid';
import { Col } from '../../Grid';
import { useResendOTPEmailMutation } from '../../../app/actions/profile';
import { message } from 'antd';

const EmailVerification = ({ isOpen = false, onClose = () => {} }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [resetOtp, {data, isLoading, isSuccess}] = useResendOTPEmailMutation()
    const handleResendOtp = ()=>{
        resetOtp()
    }
    React.useEffect(() => {
        if (isSuccess) {
            setChangePass(false);
            messageApi.open({
                type: 'success',
                content: data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
        }
    }, [isSuccess]);
    return (
        <Style
            open={isOpen}
            footer={null}
            closable={false}
            width={450}
            title={
                <div className="modal-header">
                    
                    <img
                        src={ArrowLeft}
                        alt=""
                        onClick={onClose}
                        className="close-icon"
                    />
                    <div>
                        <h3 className="title">Email Verification </h3>
                        <span className="sub-title">
                            Please enter the verification code that we have sent
                            to your email.
                        </span>
                    </div>
                </div>
            }>
                 {contextHolder}
            <div className="modal-body">
                <Row justify="flex-end">
                    <Col md={12}>
                        <div className="code-verification">
                            <InputVerification />
                        </div>
                        <div>Haven't received the verification code yet?</div>
                       {isLoading ? <div style={{marginBottom: 40}}>Sending OTP...</div> :  <div className="code-resend" onClick={handleResendOtp}>Resending Code</div>}
                    </Col>
                </Row>
            </div>
        </Style>
    );
};
export default EmailVerification;
