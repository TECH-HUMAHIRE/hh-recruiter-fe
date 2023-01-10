import React from 'react';

// eslint-disable-next-line react/prop-types
const ChatIcon = ({ active = false }) => {
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3C12 2.45 11.55 2 11 2H3C2.45 2 2 2.45 2 3V9V10.59C2.38 10.21 2.88 10 3.41 10H11C11.55 10 12 9.55 12 9V3ZM3 0H11C12.66 0 14 1.34 14 3V9C14 10.66 12.66 12 11 12H3.41L1.71 13.71C1.52 13.9 1.26 14 1 14C0.87 14 0.74 13.98 0.62 13.92C0.24 13.77 0 13.4 0 13V12V11V9V3C0 1.34 1.34 0 3 0ZM16 6H17C18.66 6 20 7.34 20 9V15V17V18V19C20 19.4 19.76 19.77 19.38 19.92C19.26 19.98 19.13 20 19 20C18.74 20 18.48 19.9 18.3 19.71L16.59 18H9C7.34 18 6 16.66 6 15V14H8V15C8 15.55 8.45 16 9 16H16.59C17.12 16 17.62 16.21 18 16.59V15V9C18 8.45 17.55 8 17 8H16V6Z"
                    fill={active ? '#19CBB0' : '#C4C4C4'}
                />
            </svg>
        </span>
    );
};
export default ChatIcon;
