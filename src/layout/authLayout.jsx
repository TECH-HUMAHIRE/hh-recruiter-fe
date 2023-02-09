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
import { useGetProfileQuery } from '../app/actions/profile';
// import UnCompleteProfile from '../components/Modal/UnCompleteProfile';
// import { useGetMyCompanyQuery } from '../app/actions/companyApi';

const AuthLayout = () => {
    const location = useLocation();
    const [paramsUrl, setParamspUrl] = useSearchParams();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = React.useState(false);
    const [isOpen, setOpen] = React.useState(false);
    const { data, isError } = useGetProfileQuery();
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
            console.log('error login');
        }
    }, [isError]);
    return (
        <Style id="huma-hire" collapsed={collapsed}>
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
