import React from 'react';

// eslint-disable-next-line react/prop-types
const CommunicationIcon = ({ active = false }) => {
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
                <g clipPath="url(#clip0_2653_32924)">
                    <path
                        d="M18 4C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H7.41C6.88 16 6.38 16.21 6 16.59L4 18.59V17V14V6C4 4.9 4.9 4 6 4H18ZM18 2H6C3.79 2 2 3.79 2 6V14V17V19V21C2 21.4 2.24 21.77 2.62 21.92C2.74 21.97 2.87 22 3 22C3.26 22 3.52 21.9 3.71 21.71L7.41 18H18C20.21 18 22 16.21 22 14V6C22 3.79 20.21 2 18 2Z"
                        fill={active ? '#fff' : '#444444'}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2653_32924">
                        <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(2 2)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </span>
    );
};
export default CommunicationIcon;
