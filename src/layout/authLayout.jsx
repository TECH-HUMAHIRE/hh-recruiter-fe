import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import navMenu from '../components/Utils/navMenu.jsx';
import Style from './style';
import {
    Outlet,
    useLocation,
    useNavigate,
    useSearchParams
} from 'react-router-dom';
import {
    useGetProfileQuery,
    useRefreshTokenMutation
} from '../app/actions/profile';
// import UnCompleteProfile from '../components/Modal/UnCompleteProfile';
// import { useGetMyCompanyQuery } from '../app/actions/companyApi';

const AuthLayout = () => {
    const location = useLocation();
    const [paramsUrl, setParamspUrl] = useSearchParams();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = React.useState(false);
    const [isOpen, setOpen] = React.useState(false);
    const { data, isError, isSuccess } = useGetProfileQuery();
    const [
        refreshToken,
        {
            data: dataRefreshToken,
            reset: resetResponseRefreshToken,
            isSuccess: successRefresToken
        }
    ] = useRefreshTokenMutation();
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    React.useEffect(() => {
        if (location.pathname) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);
    React.useEffect(() => {
        if (
            data?.data?.profile_completed === false &&
            localStorage.getItem('profile_completed') === null &&
            paramsUrl.get('completed') === 'false'
        ) {
            setOpen(true);
            localStorage.setItem(
                'profile_completed',
                data?.data?.profile_completed
            );
        }
    }, [data, localStorage]);
    React.useEffect(() => {
        if (isError) {
            return (window.location = `${
                import.meta.env.VITE_REDIRECT_URL
            }?logout=true`);
        }
    }, [isError]);
    React.useEffect(() => {
        if (isSuccess) {
            if (data?.data?.user_type !== 'RECRUITER') {
                return (window.location = `${
                    import.meta.env.VITE_REDIRECT_URL
                }?logout=true`);
            } else if (data?.data?.email_verified === false) {
                navigate('/verification');
            } else {
                return false;
            }
        }
    }, [isSuccess]);
    React.useEffect(() => {
        if (isSuccess) {
            if (localStorage.getItem('EX') === null) {
                let ex_date = new Date();
                localStorage.setItem(
                    'EX',
                    `${new Date(ex_date.getTime() + 0.5 * 60 * 60 * 1000)}`
                );
            }
        }
    }, [isSuccess]);
    const useOutsideAlerter = (ref) => {
        // eslint-disable-next-line react/prop-types
        React.useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                let expired = localStorage.getItem('EX');
                var countDownDate = new Date(expired).getTime();

                // Update the count down every 1 second
                var x = setInterval(function () {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
                    if (distance < 0) {
                        clearInterval(x);
                        refreshToken({
                            refresh_token: localStorage.getItem('refresh_token')
                        });
                        // LocalStorage().remove("EX");
                        // LocalStorage().remove("auth");
                        // LocalStorage().remove(`${token?.access_token}`);
                    }
                }, 1000);
            }
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    };
    React.useEffect(() => {
        if (successRefresToken) {
            localStorage.setItem('token', dataRefreshToken?.data?.id_token);
            localStorage.setItem(
                'refresh_token',
                dataRefreshToken?.data?.refresh_token
            );
            let ex_date = new Date();
            localStorage.setItem(
                'EX',
                `${new Date(ex_date.getTime() + 0.5 * 60 * 60 * 1000)}`
            );
            resetResponseRefreshToken();
        }
    });
    const wrapperRef = React.useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <Style ref={wrapperRef} id="huma-hire" collapsed={collapsed}>
            <Header collapsed={collapsed} />
            <section className="section">
                <Sidebar
                    navMenu={navMenu}
                    collapsed={collapsed}
                    toggleCollapsed={toggleCollapsed}
                />
                <div className="section-page">
                    <Outlet></Outlet>
                    <div className="copy-right">Copyright © 2022 HumaHire</div>
                </div>
            </section>
            {/* <UnCompleteProfile
                isOpen={isOpen}
                onClose={() => setOpen(!isOpen)}
                onAction={() => {
                    setOpen(!isOpen);
                    window.location.pathname = '/my-company';
                }}
            /> */}
        </Style>
    );
};
export default AuthLayout;
