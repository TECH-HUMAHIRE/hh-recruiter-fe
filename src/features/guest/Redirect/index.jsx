import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import { companyApi } from '../../../app/actions/companyApi';

const Redirect = () => {
    const navigate = useNavigate();
    const [paramsUrl, _] = useSearchParams();
    const [token, setToken] = React.useState(false);
    // const [getMyCompany, { isError: unComplateCompany, data, isSuccess }] =
    //     companyApi.endpoints.getMyCompany.useLazyQuery({
    //         fakeAuthProvider: 'myCompany'
    //     });
    React.useEffect(() => {
        if (paramsUrl.get('token') === null) {
            window.location = `${
                import.meta.env.VITE_REDIRECT_URL
            }?isError=true`;
        } else {
            localStorage.setItem('token', paramsUrl.get('token'));
            setToken(paramsUrl.get('token'));
        }
    }, [paramsUrl]);
    React.useEffect(() => {
        if (token) {
            getMyCompany();
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
            if (
                data?.data.why_join_us === null ||
                data?.data.why_join_us === ''
            ) {
                console.log('sukses login');
                // navigate('/verification?page=1');
            }
            if (data?.data.why_join_us?.length > 0) {
                navigate('/');
            }
        }
    }, [isSuccess]);
    return <div>loading...</div>;
};
export default Redirect;
