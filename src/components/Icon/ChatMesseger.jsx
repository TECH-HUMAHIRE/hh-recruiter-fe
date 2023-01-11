import React from 'react';
import { color } from '../Utils/variable';

const ChatMessegerIcon = ({ active = false }) => {
    return (
        <span
            role="img"
            aria-label="container"
            className="anticon anticon-container ant-menu-item-icon">
            <svg
                width="18"
                height="15"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.49998 1.33333C10.4333 1.33333 12.8333 3.4 12.8333 6C12.8333 8.6 10.4333 10.6667 7.49998 10.6667H3.09998L3.16665 10.6C3.63331 10.1333 3.69998 9.33333 3.23331 8.8C2.56665 8 2.16665 7 2.16665 6C2.16665 3.4 4.56665 1.33333 7.49998 1.33333ZM7.49998 0C3.83331 0 0.833313 2.66667 0.833313 6C0.833313 7.4 1.36665 8.66667 2.23331 9.66667L1.03331 10.8667C0.966646 10.9333 0.966646 11 0.89998 11.0667V11.1333C0.89998 11.2 0.89998 11.2667 0.833313 11.3333V11.3333C0.833313 11.4 0.833313 11.4667 0.89998 11.5333C0.89998 11.6 0.966646 11.6667 1.03331 11.7333L1.09998 11.8L1.23331 11.8667H1.29998C1.36665 12 1.43331 12 1.49998 12H7.49998C11.1666 12 14.1666 9.33333 14.1666 6C14.1666 2.66667 11.1666 0 7.49998 0Z"
                    fill={color.employee.primary}
                />
            </svg>
        </span>
    );
};
export default ChatMessegerIcon;
