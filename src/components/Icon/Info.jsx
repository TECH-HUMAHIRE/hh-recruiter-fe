import React from 'react';

const InfoIcon = ({ active = false }) => {
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
                <g clipPath="url(#clip0_2654_37616)">
                    <path
                        d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
                        fill={active ? '#fff' : '#444444'}
                    />
                    <path
                        d="M12 10C11.45 10 11 10.45 11 11V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V11C13 10.45 12.55 10 12 10Z"
                        fill={active ? '#fff' : '#444444'}
                    />
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                        fill={active ? '#fff' : '#444444'}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2654_37616">
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
export default InfoIcon;
