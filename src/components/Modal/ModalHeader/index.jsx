import React from 'react';
import Style from './modal-header.style';
import defaultImage from '../../Assets/images/defaultCompany.png';
import TabMenu from '../../Tabs';
import ProfileTab from './Profile';
import EmailTab from './Email';
import PasswordTab from './Password';
import { useNavigate } from 'react-router-dom';
import AccountNumber from './AccountNumber';

const ModalHeader = ({
    isOpen = false,
    onClose = () => {},
    changePassword = () => {},
    verifyEmail = () => {}
}) => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = React.useState('1');
    const onChangeTab = (key) => {
        setActiveTab(key);
    };
    const onCloseModal = () => {
        onChangeTab('1');
        onClose();
    };
    const onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('profile_completed');
        window.location = `${import.meta.env.VITE_REDIRECT_URL}/?logout=true`;
    };
    return (
        <Style width={730} open={isOpen} footer={null} onCancel={onCloseModal}>
            <div className="modal-body">
                <div>
                    <img src={defaultImage} alt="" className="default-image" />
                </div>
            </div>
            <TabMenu
                activeKey={activeTab}
                onChange={onChangeTab}
                item={[
                    {
                        label: `Profile`,
                        key: '1',
                        children: <ProfileTab onClose={onCloseModal} />
                    },
                    {
                        label: `Email`,
                        key: '2',
                        children: (
                            <EmailTab
                                verifyEmail={verifyEmail}
                                onClose={onCloseModal}
                            />
                        )
                    },
                    {
                        label: `Password`,
                        key: '3',
                        children: (
                            <PasswordTab changePassword={changePassword} />
                        )
                    },
                    {
                        label: `Account Number`,
                        key: '4',
                        children: <AccountNumber />
                    }
                ]}
            />
            <div className="modal-body" style={{ paddingTop: 0 }}>
                Change account?{' '}
                <b className="text-primary pointer" onClick={onLogout}>
                    Logout
                </b>
            </div>
        </Style>
    );
};
export default ModalHeader;
