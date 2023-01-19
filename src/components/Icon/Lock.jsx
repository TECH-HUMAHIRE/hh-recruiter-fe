import React from 'react';

const LockIcon = ({ active = false, color = 'white' }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.25 7V7.55C17.44 8.25 18.25 9.52 18.25 11V16C18.25 18.21 16.46 20 14.25 20H4.25C2.04 20 0.25 18.21 0.25 16V11C0.25 9.52 1.06 8.25 2.25 7.55V7C2.25 3.13 5.38 0 9.25 0C13.12 0 16.25 3.13 16.25 7ZM14.25 7C14.25 4.24 12.01 2 9.25 2C6.49 2 4.25 4.24 4.25 7H14.25ZM14.25 18C15.35 18 16.25 17.1 16.25 16V11C16.25 9.9 15.35 9 14.25 9H4.25C3.15 9 2.25 9.9 2.25 11V16C2.25 17.1 3.15 18 4.25 18H14.25ZM7.25 13C7.25 11.9 8.15 11 9.25 11C10.35 11 11.25 11.9 11.25 13C11.25 13.74 10.85 14.37 10.25 14.72V15C10.25 15.55 9.8 16 9.25 16C8.7 16 8.25 15.55 8.25 15V14.72C7.65 14.38 7.25 13.74 7.25 13Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};
export default LockIcon;
