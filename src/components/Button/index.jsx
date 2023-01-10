/* eslint-disable react/prop-types */
import React from 'react';
import Style from './button.style';
const Button = (props) => {
    const {
        color = '',
        onClick = () => {},
        loading = false,
        className,
        disabled = false,
        weight = 500,
        block,
        style,
        size = 'large',
        icon,
        htmlType
    } = props;
    return (
        <Style
            htmlType={htmlType}
            icon={icon}
            block={block}
            style={{ ...style }}
            weight={weight}
            className={className}
            type={color}
            onClick={onClick}
            loading={loading}
            disabled={disabled}
            size={size}>
            {props.children}
        </Style>
    );
};
export default Button;
