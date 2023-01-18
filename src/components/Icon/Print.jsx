import React from 'react';
import { color } from '../Utils/variable';

const PrintIcon = ({ active = false }) => {
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
                    d="M16 4H17C18.7 4 20 5.3 20 7V14C20 15.7 18.7 17 17 17H16V19C16 19.3 15.9 19.5 15.7 19.7C15.5 19.9 15.3 20 15 20H5C4.7 20 4.5 19.9 4.3 19.7C4.1 19.5 4 19.3 4 19V17H3C1.3 17 0 15.7 0 14V7C0 5.3 1.3 4 3 4H4V1C4 0.7 4.1 0.5 4.3 0.3C4.5 0.1 4.7 0 5 0H15C15.3 0 15.5 0.1 15.7 0.3C15.9 0.5 16 0.7 16 1V4ZM14 2H6V4H14V2ZM6 18H14V14H6V18ZM17.7 14.7C17.9 14.5 18 14.3 18 14V7C18 6.7 17.9 6.5 17.7 6.3C17.5 6.1 17.3 6 17 6H3C2.7 6 2.5 6.1 2.3 6.3C2.1 6.5 2 6.7 2 7V14C2 14.3 2.1 14.5 2.3 14.7C2.5 14.9 2.7 15 3 15H4V13C4 12.7 4.1 12.5 4.3 12.3C4.5 12.1 4.7 12 5 12H15C15.3 12 15.5 12.1 15.7 12.3C15.9 12.5 16 12.7 16 13V15H17C17.3 15 17.5 14.9 17.7 14.7ZM16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44771 14.4477 8 15 8C15.5523 8 16 8.44771 16 9Z"
                    fill={color.employee.primary}
                />
            </svg>
        </span>
    );
};
export default PrintIcon;
