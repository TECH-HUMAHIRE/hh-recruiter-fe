/* eslint-disable react/prop-types */
import { Form, Input, Select } from 'antd';
import React from 'react';
import { CheckBoxStyle, SelectStyle } from './checkbox.style';

const CheckBoxForm = (props) => {
    const {
        label,
        onChange = () => {},
        onPassValue = () => {},
        checked
    } = props;

    const onGetValue = (e) => {
        onChange(e.target.checked);
        onPassValue(e.target.checked);
    };

    return (
        <CheckBoxStyle checked={checked} onChange={onGetValue}>
            {label}
        </CheckBoxStyle>
    );
};
export default CheckBoxForm;
