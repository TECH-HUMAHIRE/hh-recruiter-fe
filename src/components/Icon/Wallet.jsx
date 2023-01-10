import React from 'react';

// eslint-disable-next-line react/prop-types
const WalletIcon = ({ active = false, color = '#444444' }) => {
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
                <g clipPath="url(#clip0_2654_37604)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.1 2.6C17.29 3.33 18 4.61 18 6C20.21 6 22 7.79 22 10V11V13V15V17V18C22 20.21 20.21 22 18 22H6C3.79 22 2 20.21 2 18V10C2 8.55 2.78 7.29 3.94 6.59C3.96017 6.57656 3.97983 6.56311 3.99933 6.54978C4.06686 6.50361 4.13241 6.4588 4.21 6.42L12.21 2.42C12.78 2.14 13.39 2 14 2C14.73 2 15.46 2.2 16.1 2.6ZM14 4C13.69 4 13.39 4.07 13.11 4.21L9.53 6H16C16 5.3 15.65 4.67 15.05 4.3C14.73 4.1 14.37 4 14 4ZM18 20C19.1 20 20 19.1 20 18V10C20 8.9 19.1 8 18 8H6C4.9 8 4 8.9 4 10V18C4 19.1 4.9 20 6 20H18ZM18 14C18 15.1046 17.1046 16 16 16C14.8954 16 14 15.1046 14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14Z"
                        fill={active ? '#fff' : color}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2654_37604">
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
export default WalletIcon;
