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
import { useSendOTPEmailMutation } from '../../../app/actions/userAuth';
import { useSearchParams } from 'react-router-dom';
const Registration = () => {
    const [setOptEmail, response] = useSendOTPEmailMutation();
    const [paramsUrl, _] = useSearchParams();

    React.useEffect(() => {}, []);
    return (
        <Style>
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
                                    <InputVerification />
                                </div>
                                <div>
                                    Haven't received the verification code yet?
                                </div>
                                <div className="code-resend">
                                    Resending Code
                                </div>
                                <Button color="primary" block>
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
