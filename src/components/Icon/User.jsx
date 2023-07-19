import React from 'react';

const UserIcon = ({ active = false, color }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.98 10.26C16 9.5 14.83 8.91 13.55 8.52C14.44 7.62 15 6.38 15 5C15 2.24 12.76 0 10 0C7.24 0 5 2.24 5 5C5 6.38 5.56 7.62 6.45 8.52C5.17 8.91 4 9.5 3.02 10.26C1.2 11.67 0 13.71 0 16C0 18.21 1.79 20 4 20H16C18.21 20 20 18.21 20 16C20 13.71 18.8 11.67 16.98 10.26ZM7 5C7 3.34 8.34 2 10 2C11.66 2 13 3.34 13 5C13 6.66 11.66 8 10 8C8.34 8 7 6.66 7 5ZM16 18H4C2.9 18 2 17.1 2 16C2 14.43 2.81 12.96 4.25 11.84C5.68 10.72 7.72 10 10 10C12.27 10 14.32 10.72 15.75 11.84C17.19 12.96 18 14.43 18 16C18 17.1 17.1 18 16 18Z"
                    fill={active ? '#F57F17' : color}
                />
            </svg>
        </span>
    );
};
export default UserIcon;
