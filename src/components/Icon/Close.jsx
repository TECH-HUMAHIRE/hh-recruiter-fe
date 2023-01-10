import React from 'react';

// eslint-disable-next-line react/prop-types
const CloseIcon = ({ active = false }) => {
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
                    d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10ZM12.3 6.29C12.69 5.9 13.32 5.9 13.71 6.29C14.1 6.68 14.1 7.32 13.7 7.71L11.41 10L13.7 12.29C14.09 12.68 14.09 13.31 13.7 13.7C13.31 14.09 12.68 14.09 12.29 13.7L10 11.41L7.71001 13.7C7.32001 14.09 6.69001 14.09 6.30001 13.7C5.91001 13.31 5.91001 12.68 6.30001 12.29L8.59001 10L6.30001 7.7C5.91001 7.31 5.91001 6.68 6.30001 6.29C6.69001 5.9 7.32001 5.9 7.71001 6.29L10 8.59L12.3 6.29Z"
                    fill={active ? '#F44336' : '#C4C4C4'}
                />
            </svg>
        </span>
    );
};
export default CloseIcon;
