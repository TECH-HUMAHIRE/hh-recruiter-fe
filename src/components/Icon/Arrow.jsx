import React from 'react';

// eslint-disable-next-line react/prop-types
const ArrowIcon = ({ active = false, color = '#aaa', className }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className={`anticon anticon-container ant-menu-item-icon ${className}`}>
            <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.16673 1.66666L4.16673 11.325L1.42507 8.575C1.10007 8.25 0.575067 8.25 0.250067 8.575C-0.0749329 8.89999 -0.0749329 9.425 0.250067 9.75L4.41673 13.9167C4.41673 13.9167 4.42507 13.925 4.4334 13.925C4.5084 14 4.59173 14.0583 4.69173 14.0917C4.89173 14.175 5.12507 14.175 5.3334 14.0917C5.4334 14.05 5.52507 13.9917 5.60007 13.9167C5.60007 13.9167 5.6084 13.9167 5.6084 13.9083L9.77507 9.74166C10.1001 9.41666 10.1001 8.89166 9.77507 8.56666C9.45007 8.24166 8.92507 8.24166 8.60007 8.56666L5.8334 11.325L5.8334 1.66666C5.8334 1.20833 5.4584 0.833328 5.00007 0.833328C4.54173 0.833328 4.16673 1.20833 4.16673 1.66666Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};
export default ArrowIcon;
