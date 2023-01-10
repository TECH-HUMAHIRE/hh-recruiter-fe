import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TapHeader from '../components/TabHeader';

const DashboardLayout = () => {
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <TapHeader />
            <Outlet></Outlet>
        </>
    );
};
export default DashboardLayout;
