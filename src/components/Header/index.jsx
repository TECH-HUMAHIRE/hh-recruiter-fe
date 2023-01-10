import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/images/logo.png';
import userDefault from '../Assets/icon/user.png';
import { Col, Row } from '../Grid';
import HeaderStyle from './header.style';
// import ModalHeader from '../Modal/ModalHeader';
// import ChangePassword from '../Modal/ModalHeader/ChangePassword';
// import EmailVerification from '../Modal/ModalHeader/EmailVerification';
// // import { useGetMyCompanyQuery } from '../../app/actions/companyApi';
// import { notification } from 'antd';
const Header = () => {
    const [isOpen, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const [isChangePass, setChangePass] = React.useState(false);
    const [isFirstLoad, setFirstLoad] = React.useState(true);
    const [isVerifyEmail, setVerifyEmail] = React.useState(false);
    const showModal = () => {
        setOpen(!isOpen);
    };
    // const { isError: unComplateCompany, data } = useGetMyCompanyQuery({
    //     fakeAuthProvider: 'myCompany'
    // });
    // const dataProfile = data?.data || '';
    // const changePassword = () => {
    //     setChangePass(true);
    //     setOpen(!isOpen);
    // };
    // const closeChangePassword = () => {
    //     setChangePass(false);
    //     setOpen(!isOpen);
    // };
    // const verifyEmail = () => {
    //     setVerifyEmail(true);
    //     setOpen(!isOpen);
    // };
    // const closeCVerifyEmail = () => {
    //     setVerifyEmail(false);
    //     setOpen(!isOpen);
    // };
    // React.useEffect(() => {
    //     if (unComplateCompany && isFirstLoad) {
    //         setFirstLoad(false);
    //         notification.open({
    //             message: 'Notification',
    //             description: 'Please complete your company profile',
    //             onClick: () => {
    //                 // navigate('/my-company');
    //                 window.location.pathname = '/my-company';
    //             },
    //             duration: 5.0
    //         });
    //     }
    // }, [isFirstLoad]);
    return (
        <HeaderStyle>
            <Row justify="space-between">
                <Col sm={2}>
                    <Link to={'/'}>
                        <img className="logo" src={Logo} alt="Huma Hire" />
                    </Link>
                </Col>
                <Col xs={6}>
                    <div className="header-user">
                        <div className="header-user__info">
                            <div className="header-user__info-name">
                                Hi, Recruiter
                            </div>
                            <div className="header-user__info-employee">
                                {/* {dataProfile.name} */}
                            </div>
                        </div>
                        <div className="header-user__image" onClick={showModal}>
                            <img
                                className="img-user"
                                src={userDefault}
                                alt="default user"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <ModalHeader
                isOpen={isOpen}
                onClose={showModal}
                changePassword={changePassword}
                verifyEmail={verifyEmail}
            />
            <ChangePassword
                isOpen={isChangePass}
                onClose={closeChangePassword}
            />
            <EmailVerification
                isOpen={isVerifyEmail}
                onClose={closeCVerifyEmail}
            /> */}
        </HeaderStyle>
    );
};
export default Header;
