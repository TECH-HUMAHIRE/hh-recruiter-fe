import React from 'react';
import { Outlet } from 'react-router-dom';
import Style from './style';

const GuestLayout = () => {
    return (
        <Style id="huma-hire">
            <Outlet></Outlet>
        </Style>
    );
};
export default GuestLayout;
