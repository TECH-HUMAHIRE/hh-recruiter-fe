import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { profileAuth } from '../../../app/actions/profile';

const RedirectPage = () => {
    const navigate = useNavigate();
    const [paramsUrl, _] = useSearchParams();
    const [token, setToken] = React.useState(false);
    const [getProfileAcount, { isError: unComplateCompany, data, isSuccess }] =
        profileAuth.endpoints.getProfile.useLazyQuery();
    React.useEffect(() => {
        if (paramsUrl.get('token') === null) {
            window.location = `${
                import.meta.env.VITE_REDIRECT_URL
            }?isError=true`;
        } else {
            localStorage.setItem('token', paramsUrl.get('token'));
            localStorage.setItem(
                'refresh_token',
                paramsUrl.get('refresh_token')
            );
            setToken(paramsUrl.get('token'));
        }
    }, [paramsUrl]);
    React.useEffect(() => {
        if (token) {
            getProfileAcount();
        }
    }, [token]);
    React.useEffect(() => {
        if (unComplateCompany) {
            localStorage.removeItem('token');
            localStorage.removeItem('profile_completed');
            window.location = `${
                import.meta.env.VITE_REDIRECT_URL
            }?logout=true`;
        }
    }, [unComplateCompany]);

    React.useEffect(() => {
        if (isSuccess) {
            if (!data?.data?.profile_completed) {
                navigate('/?completed=false');
            }
            if (data?.data?.isVerification === false) {
                navigate('/registration');
            }
            if (data?.data.email_verified === false) {
                navigate('/verification');
                // navigate('/');
            }
            if (data?.data.email_verified) {
                navigate('/');
            }
        }
    }, [isSuccess]);

    return <div>loading...</div>;
};
export default RedirectPage;
