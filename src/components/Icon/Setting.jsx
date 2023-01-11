import React from 'react';

const SettingIcon = ({ active = false, color = '#AAAAAA' }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.06 2.57L19.06 5.57C20.26 6.29 21 7.6 21 9V15C21 16.4 20.26 17.71 19.06 18.43L14.06 21.43C13.42 21.81 12.71 22 12 22C11.29 22 10.58 21.81 9.94 21.43L4.94 18.43C3.74 17.71 3 16.4 3 15V9C3 7.6 3.74 6.29 4.94 5.57L9.94 2.57C10.58 2.19 11.29 2 12 2C12.71 2 13.42 2.19 14.06 2.57ZM18.03 16.71C18.63 16.36 19 15.7 19 15V9C19 8.3 18.63 7.65 18.03 7.29L13.03 4.29C12.72 4.1 12.36 4 12 4C11.64 4 11.28 4.1 10.97 4.29L5.97 7.29C5.37 7.64 5 8.3 5 9V15C5 15.7 5.37 16.36 5.97 16.71L10.97 19.71C11.28 19.9 11.64 20 12 20C12.36 20 12.72 19.9 13.03 19.71L18.03 16.71ZM8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};
export default SettingIcon;
