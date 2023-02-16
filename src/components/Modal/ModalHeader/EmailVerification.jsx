import React from 'react';
import Style from './modal-header.style';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import InputVerification from '../../InputVerification';
import { Row } from '../../Grid';
import { Col } from '../../Grid';

const EmailVerification = ({ isOpen = false, onClose = () => {} }) => {
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
            <div className="modal-body">
                <Row justify="flex-end">
                    <Col md={12}>
                        <div className="code-verification">
                            <InputVerification />
                        </div>
                        <div>Haven't received the verification code yet?</div>
                        <div className="code-resend">Resending Code</div>
                    </Col>
                </Row>
            </div>
        </Style>
    );
};
export default EmailVerification;
