import React from 'react';
import Style from './modal-header.style';
import defaultImage from '../../Assets/images/defaultCompany.png';
import TabMenu from '../../Tabs';
import ProfileTab from './Profile';
import EmailTab from './Email';
import PasswordTab from './Password';
import { useNavigate } from 'react-router-dom';
import AccountNumber from './AccountNumber';
import UploadImages from '../../Form/UploadImages';
import { useUploadeImageMutation } from '../../../app/actions/profile';

const ModalHeader = ({
    isOpen = false,
    onClose = () => {},
    changePassword = () => {},
    verifyEmail = () => {}
}) => {
    const navigate = useNavigate();

    // state
    const [activeTab, setActiveTab] = React.useState('1');
    const [profile, setProfile] = React.useState([]);
    const [nameUpload, setNameUpload] = React.useState('');

    // fetch api

    const [uploadImage, { isSuccess: successUpload, data: responseUpload }] =
        useUploadeImageMutation();

    // function
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
    const onUploadImageLogo = (value, name) => {
        if (value.length > 0) {
            const formData = new FormData();
            formData.append('file', value[0].originFileObj);
            formData.append('type', 'recruiter');
            setNameUpload(name);
            uploadImage(formData);
        } else {
            setNameUpload('');
        }
    };

    React.useEffect(() => {
        if (successUpload) {
            setProfile([{ url: responseUpload.data }]);
        }
    }, [successUpload, nameUpload]);
    return (
        <Style width={730} open={isOpen} footer={null} onCancel={onCloseModal}>
            <div className="modal-body">
                <UploadImages
                    name="logo_url"
                    onChange={onUploadImageLogo}
                    width="170px"
                    label="Add Photo Profile"
                    height="170px"
                    className="default-image"
                    maxCount={1}
                />
                {/* <div>
                    <img src={defaultImage} alt="" className="default-image" />
                </div> */}
            </div>
            <TabMenu
                activeKey={activeTab}
                onChange={onChangeTab}
                item={[
                    {
                        label: `Profile`,
                        key: '1',
                        children: (
                            <ProfileTab
                                profile={profile}
                                onClose={onCloseModal}
                            />
                        )
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
                        children: (
                            <AccountNumber changePassword={changePassword} />
                        )
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
