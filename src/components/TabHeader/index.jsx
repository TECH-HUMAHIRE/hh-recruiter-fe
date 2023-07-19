import React from 'react';
import BagIcon from '../Icon/Bag';
import StartIcon from '../Icon/Star';
import UsersIcon from '../Icon/Users';
import CheckIcon from '../Icon/Check';
import CloseIcon from '../Icon/Close';
import { Style, MenuLink } from './style';
import { useCountJobQuery } from '../../app/actions/candidates';

const TapHeader = () => {
    const { data, refetch } = useCountJobQuery();
    const [menu, setMenu] = React.useState([
        {
            total: 0,
            label: 'My Tasks',
            icon: <BagIcon active />,
            activeColor: '#CBD3FF',
            activeLink: '',
            key: 'all'
        },
        {
            total: 0,
            label: 'Invited Candidates',
            icon: <UsersIcon active />,
            activeColor: '#FCD0CD',
            activeLink: 'invited-candidates',
            key: 'invited_candidates'
        },
        {
            total: 0,
            label: 'Referred Candidates',
            icon: <StartIcon active />,
            activeColor: '#FDDFC5',
            activeLink: 'referred-candidates',
            key: 'referred_candidates'
        },
        {
            total: 0,
            label: 'Shortlisted Candidates',
            icon: <CheckIcon active />,
            activeColor: '#FDDFC5',
            activeLink: 'shortlisted-candidates',
            key: 'shorlisted_candidates'
        },
        {
            total: 0,
            label: 'Archived',
            icon: <CloseIcon active />,
            activeColor: '#FCD0CD',
            activeLink: 'archived',
            key: 'archived'
        }
    ]);
    const checkActiveLink = () => {
        let url = window.location.pathname.split('/');
        return url[1];
    };
    React.useEffect(() => {
        if (data?.data) {
            return setMenu(
                menu.map((item) => {
                    return {
                        ...item,
                        total: data?.data[item.key]
                    };
                })
            );
        }
    }, [data]);
    React.useEffect(() => {
        refetch();
    }, []);

    return (
        <Style>
            <div className="job-nav">
                {menu.map((item, key) => {
                    return (
                        <MenuLink
                            onClick={() => refetch()}
                            activecolor={item.activeColor}
                            key={key}
                            to={`/${item.activeLink}`}
                            className={`job-status ${
                                checkActiveLink() === item.activeLink
                                    ? 'active'
                                    : ''
                            }`}>
                            <span className="job-status__total">
                                {item.total}
                            </span>
                            <span className="job-status__label">
                                {item.label}
                            </span>
                            <div className="job-status__icon">{item.icon}</div>
                        </MenuLink>
                    );
                })}
            </div>
        </Style>
    );
};
export default TapHeader;
