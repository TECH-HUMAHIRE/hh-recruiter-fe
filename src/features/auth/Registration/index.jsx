import React from 'react';
import { Col, Row } from '../../../components/Grid';
import InputVerification from '../../../components/InputVerification';
import Style from './resgistration.style';
import Logo from '../../../components/Assets/icon/huma_hire.png';
import DescIcon from '../../../components/Assets/icon/registration_desc.png';
import IconTop from '../../../components/Assets/icon/background-icon.png';
import IconBottom from '../../../components/Assets/icon/resgistration-icon-bottom.png';
import IconTopRight from '../../../components/Assets/icon/registration-top-right.png';
import Button from '../../../components/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    useGetProfileQuery,
    useResendOTPEmailMutation,
    useSendOTPEmailMutation
} from '../../../app/actions/profile';
import { message } from 'antd';
const Registration = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const [setOptEmail, response] = useSendOTPEmailMutation();
    const [resetOtp, { data, isLoading, isSuccess }] =
        useResendOTPEmailMutation();
    const [otp, setOtp] = React.useState('');
    const { data: profile, refetch } = useGetProfileQuery();
    const onSubmitOtp = (data) => {
        var otp = '';
        for (var el in data) {
            // eslint-disable-next-line no-prototype-builtins
            if (data.hasOwnProperty(el)) {
                otp += data[el];
            }
        }
        setOtp({ otp: otp });
    };
    const handleResendOtp = () => {
        resetOtp();
    };
    const onSubmit = () => {
        const uid = profile.data.uid;
        setOptEmail({ uid, ...otp });
    };
    React.useEffect(() => {
        if (response?.isSuccess) {
            navigate('/');
        }
        if (response?.isError) {
            messageApi.open({
                type: 'error',
                content: response?.meta?.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
        }
    }, [response]);
    React.useEffect(() => {
        if (isSuccess) {
            // setChangePass(false);
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
        <Style>
            {contextHolder}
            <Row>
                <Col md={4}>
                    <div className="registration">
                        <img className="icon-top" src={IconTop} alt="" />
                        <img className="icon-bottom" src={IconBottom} alt="" />
                        <img
                            className="icon-top__right"
                            src={IconTopRight}
                            alt=""
                        />
                        <div className="registration-logo">
                            <img src={Logo} alt="HumaHire" />
                        </div>
                        <h1 className="title">Benefit</h1>
                        <div className="registration-desc">
                            <div>
                                <img
                                    src={DescIcon}
                                    alt=""
                                    className="registration-desc__icon"
                                />
                            </div>
                            <h2 className="title">Lorem</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className="registration-desc">
                            <div>
                                <img
                                    src={DescIcon}
                                    alt=""
                                    className="registration-desc__icon"
                                />
                            </div>
                            <h2 className="title">Lorem</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className="registration-desc">
                            <div>
                                <img
                                    src={DescIcon}
                                    alt=""
                                    className="registration-desc__icon"
                                />
                            </div>
                            <h2 className="title">Lorem</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={8} style={{ display: 'flex' }}>
                    <div className="form-verification">
                        <Row justify="center" align="center">
                            <Col md={6}>
                                <h1 className="title">Email Verification</h1>
                                <div style={{ marginBottom: 25 }}>
                                    Please enter the verification code that we
                                    have sent to your email.
                                </div>
                                <div className="code-verification">
                                    <InputVerification onSubmit={onSubmitOtp} />
                                </div>
                                <div>
                                    Haven't received the verification code yet?
                                </div>
                                {isLoading ? (
                                    <div style={{ marginBottom: 40 }}>
                                        Sending OTP...
                                    </div>
                                ) : (
                                    <div
                                        className="code-resend"
                                        onClick={handleResendOtp}>
                                        Resending Code
                                    </div>
                                )}
                                <Button
                                    loading={response.isLoading}
                                    color="primary"
                                    block
                                    onClick={onSubmit}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Style>
    );
};
export default Registration;
