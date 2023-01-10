import React from 'react';

// eslint-disable-next-line react/prop-types
const HomeIcon = ({ active = false }) => {
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
                <g clipPath="url(#clip0_2653_32881)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.61 10.21L12.61 3.21C12.25 2.93 11.74 2.93 11.38 3.21L2.38 10.21C1.94 10.55 1.87 11.18 2.2 11.61C2.41 11.87 2.7 11.98 3 11.98V17C3 19.21 4.79 21 7 21H8H10H14H16H17C19.21 21 21 19.21 21 17V11.98C21.3 11.98 21.59 11.86 21.79 11.61C22.13 11.18 22.05 10.55 21.61 10.21ZM14 19H10V16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16V19ZM17 19H16V16C16 13.79 14.21 12 12 12C9.79 12 8 13.79 8 16V19H7C5.9 19 5 18.1 5 17V10.71L12 5.27L19 10.71V17C19 18.1 18.1 19 17 19Z"
                        fill={active ? '#fff' : '#444444'}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2653_32881">
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
export default HomeIcon;
