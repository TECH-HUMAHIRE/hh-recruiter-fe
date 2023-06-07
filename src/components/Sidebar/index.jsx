import { Menu } from 'antd';
import React from 'react';
import SidebarStyle from './style';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Button from '../Button';
import DraftIcon from '../Icon/Draft';
import WalletIcon from '../Icon/Wallet';
import CommunicationIcon from '../Icon/Communication';
import InfoIcon from '../Icon/Info';
import CompanyIcon from '../Icon/Company';
import HomeIcon from '../Icon/Home';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { color } from '../Utils/variable';
import { useLocation } from 'react-router-dom';
import UsersIcon from '../Icon/Users';
import StarIcon from '../Icon/Star';

const Sidebar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [paramsUrl, _] = useSearchParams();
    // eslint-disable-next-line react/prop-types
    const { toggleCollapsed = () => {}, collapsed } = props;
    const [activeIcon, setActiveIcon] = React.useState('dashboard');

    const routeList = [
        {
            uniqName: 'dashboard',
            label: 'Dashboard',
            path: '/',
            end: true,
            Icon: <HomeIcon active={activeIcon === 'dashboard'} />
        },
        {
            uniqName: 'jobList',
            label: 'Job List',
            path: '/job-list',
            Icon: <DraftIcon active={activeIcon === 'jobList'} />
        },

        {
            uniqName: 'candidates',
            label: 'Candidates',
            path: '/candidates',
            Icon: <UsersIcon active={activeIcon === 'candidates'} />
        },

        {
            uniqName: 'inbox',
            label: 'Inbox',
            path: '/Inbox',
            Icon: <CommunicationIcon active={activeIcon === 'inbox'} />
        },
        {
            uniqName: 'wallet',
            label: 'Wallet',
            path: '/wallet',
            Icon: <WalletIcon active={activeIcon === 'wallet'} />
        },
        {
            uniqName: 'humapoint',
            label: 'Huma Point',
            path: '/huma-point',
            Icon: <StarIcon active={activeIcon === 'humapoint'} />
        },
        {
            uniqName: 'help',
            label: 'Help',
            path: '/help',
            Icon: <InfoIcon active={activeIcon === 'help'} />
        }
    ];
    const onActiveIcon = (key) => {
        if (location.pathname === '/Inbox') {
            navigate({ message: searchParams.toString() });
        }
        //
        setActiveIcon(key);
    };

    const handleOnGetClassName = (isActive, item) => {
        let activeMenu = isActive;
        if (item.uniqName === 'dashboard') {
            var regex =
                /referred-candidates|invited-candidates|hired-candidates|archived|shortlisted-candidates/;
            if (regex.test(location.pathname.split('/'))) {
                activeMenu = true;
            }
        }
        return activeMenu ? 'active nav-link' : 'nav-link';
    };
    React.useEffect(() => {
        if (location.pathname) {
            let activePath = location.pathname.split('/');
            setActiveIcon(activePath[1] === '' ? 'dashboard' : activePath[1]);
        }
    }, [location]);
    return (
        <SidebarStyle collapsed={collapsed}>
            <Button
                className="btn-collapsed"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16
                }}>
                {collapsed ? (
                    <MenuOutlined
                        style={{
                            color: color.employee.primary,
                            fontWeight: 600
                        }}
                    />
                ) : (
                    <CloseOutlined
                        style={{
                            color: color.employee.primary,
                            fontWeight: 600
                        }}
                    />
                )}
            </Button>
            <Menu
                className="nav"
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}>
                {routeList.map((item) => {
                    return (
                        <Menu.Item
                            key={item.uniqName}
                            renderItem={() => {
                                return (
                                    <NavLink
                                        onClick={() =>
                                            onActiveIcon(
                                                item.uniqName,
                                                item.path
                                            )
                                        }
                                        to={item.path}
                                        className={({ isActive }) =>
                                            handleOnGetClassName(isActive, item)
                                        }>
                                        {item.Icon}
                                        <span>{item.label}</span>
                                    </NavLink>
                                );
                            }}
                        />
                    );
                })}
            </Menu>
        </SidebarStyle>
    );
};
export default Sidebar;
