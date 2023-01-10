/* eslint-disable react/prop-types */
import React from 'react';
import InputStyle from './input-text.style';
const InputText = (props) => {
    const {
        type,
        disabled,
        size = 'large',
        placeholder,
        frontIcon,
        onChange = () => {},
        value
    } = props;
    const onGetValue = (e) => {
        onChange(e.target.value);
    };
    return (
        <InputStyle
            value={value}
            onChange={onGetValue}
            type={type}
            disabled={disabled}
            size={size}
            placeholder={placeholder}
            prefix={frontIcon ? frontIcon : false}
        />
    );
};
export default InputText;
