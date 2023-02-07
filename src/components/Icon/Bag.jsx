import React from 'react';

// eslint-disable-next-line react/prop-types
const BagIcon = ({ active = false, color = '#666666' }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.5 4H14.5V2C14.5 0.89 13.61 0 12.5 0H8.5C7.39 0 6.5 0.89 6.5 2V4H4.5C2.29 4 0.5 5.79 0.5 8V16C0.5 18.21 2.29 20 4.5 20H16.5C18.71 20 20.5 18.21 20.5 16V8C20.5 5.79 18.71 4 16.5 4ZM8.5 2H12.5V4H8.5V2ZM16.5 18H4.5C3.4 18 2.5 17.1 2.5 16V12.45C3.09 12.79 3.77 13 4.5 13H16.5C17.23 13 17.91 12.79 18.5 12.45V16C18.5 17.1 17.6 18 16.5 18ZM16.5 11H4.5C3.4 11 2.5 10.1 2.5 9V8C2.5 6.9 3.4 6 4.5 6H16.5C17.6 6 18.5 6.9 18.5 8V9C18.5 10.1 17.6 11 16.5 11Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};
export default BagIcon;
