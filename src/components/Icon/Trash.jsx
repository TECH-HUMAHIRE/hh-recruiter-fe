import React from 'react';

const TrashIcon = ({ active = false, color = '#444444' }) => {
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
                <g clip-path="url(#clip0_157_49959)">
                    <path
                        d="M20 4H14.62L13.9 2.55C13.72 2.21 13.38 2 13 2H11C10.62 2 10.28 2.21 10.11 2.55L9.38 4H4C3.45 4 3 4.45 3 5C3 5.55 3.45 6 4 6H20C20.55 6 21 5.55 21 5C21 4.45 20.55 4 20 4Z"
                        fill={color}
                    />
                    <path
                        d="M19 8H5.00002C4.72002 8 4.45002 8.12 4.26002 8.32C4.08002 8.53 3.98002 8.81 4.00002 9.08L4.50002 15L4.84002 19.09C4.91002 19.91 5.30002 20.63 5.86002 21.15C6.42002 21.67 7.17002 22 8.00002 22H16C16.83 22 17.58 21.67 18.14 21.15C18.7 20.63 19.09 19.91 19.16 19.09L19.5 15L20 9.08C20.02 8.8 19.93 8.52 19.74 8.32C19.55 8.12 19.28 8 19 8ZM17.17 18.92C17.15 19.19 17.01 19.47 16.78 19.67C16.55 19.87 16.28 20 16 20H8.00002C7.72002 20 7.44002 19.88 7.22002 19.68C7.00002 19.47 6.86002 19.2 6.83002 18.93L6.50002 15L6.09002 10H17.92L17.5 15L17.17 18.92Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_157_49959">
                        <rect
                            width="18"
                            height="20"
                            fill="white"
                            transform="translate(3 2)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </span>
    );
};
export default TrashIcon;
