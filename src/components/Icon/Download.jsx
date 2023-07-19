import React from 'react';

// eslint-disable-next-line react/prop-types
const DownloadIcon = ({ active = false, color = '#666666' }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.29004 13.71L1.29004 8.71C0.900041 8.32 0.900041 7.68 1.30004 7.29C1.69004 6.9 2.32004 6.9 2.71004 7.29L6.00004 10.59L6.00004 1C6.00004 0.45 6.45004 0 7.00004 0C7.55004 0 8.00004 0.45 8.00004 1V10.59L11.31 7.29C11.7 6.9 12.33 6.9 12.72 7.29C13.11 7.68 13.11 8.31 12.72 8.7L7.72004 13.7C7.72004 13.71 7.71004 13.71 7.71004 13.71C7.62004 13.8 7.51004 13.87 7.39004 13.92C7.14004 14.02 6.86004 14.02 6.62004 13.92C6.50004 13.88 6.40004 13.81 6.31004 13.72C6.30004 13.72 6.29004 13.71 6.29004 13.71ZM2 18H12C12.55 18 13 18.45 13 19C13 19.55 12.55 20 12 20H2C1.45 20 1 19.55 1 19C1 18.45 1.45 18 2 18Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};
export default DownloadIcon;
