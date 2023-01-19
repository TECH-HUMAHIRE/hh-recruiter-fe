import React from 'react';

const ChattingIcon = ({ active = false, color = '#20C1AA' }) => {
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
                <g clipPath="url(#clip0_2937_15106)">
                    <path
                        d="M15.0001 3.33317C15.9167 3.33317 16.6667 4.08317 16.6667 4.99984V11.6665C16.6667 12.5832 15.9167 13.3332 15.0001 13.3332H6.17508C5.73341 13.3332 5.31675 13.5082 5.00008 13.8248L3.33341 15.4915V14.1665V11.6665V4.99984C3.33341 4.08317 4.08341 3.33317 5.00008 3.33317H15.0001ZM15.0001 1.6665H5.00008C3.15841 1.6665 1.66675 3.15817 1.66675 4.99984V11.6665V14.1665V15.8332V17.4998C1.66675 17.8332 1.86675 18.1415 2.18341 18.2665C2.28341 18.3082 2.39175 18.3332 2.50008 18.3332C2.71675 18.3332 2.93341 18.2498 3.09175 18.0915L6.17508 14.9998H15.0001C16.8417 14.9998 18.3334 13.5082 18.3334 11.6665V4.99984C18.3334 3.15817 16.8417 1.6665 15.0001 1.6665Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2937_15106">
                        <rect
                            width="16.6667"
                            height="16.6667"
                            fill="white"
                            transform="translate(1.66675 1.6665)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </span>
    );
};
export default ChattingIcon;
