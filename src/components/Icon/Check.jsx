import React from 'react';

// eslint-disable-next-line react/prop-types
const CheckIcon = ({ active = false, color = false }) => {
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
                    d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10ZM8.99995 10.59L12.2899 7.28998C12.6799 6.89998 13.3199 6.89998 13.7099 7.29998C14.0999 7.68998 14.0999 8.31998 13.7099 8.70998L9.70995 12.71C9.51995 12.9 9.26995 13 8.99995 13C8.72995 13 8.47995 12.9 8.29995 12.7L6.29995 10.7C5.90995 10.31 5.90995 9.67998 6.29995 9.28998C6.68995 8.89998 7.31995 8.89998 7.70995 9.28998L8.99995 10.59Z"
                    fill={active ? '#19CBB0' : '#C4C4C4'}
                />
            </svg>
        </span>
    );
};
export default CheckIcon;
