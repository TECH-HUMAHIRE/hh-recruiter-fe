import { Form, Select } from 'antd';
import React from 'react';
import SelectStyle from './select-option.style';
const SelectOption = (props) => {
    const {
        frontIcon,
        disabled = false,
        multiple = false,
        placeholder,
        size = 'large',
        filterSort = false,
        options = [],
        allowClear = true,
        onChange = () => {},
        value
    } = props;
    const onGetValue = (value) => {
        onChange(value);
    };
    return (
        <SelectStyle frontIcon={frontIcon} multiple={multiple}>
            {frontIcon && <div className="prefix-icon">{frontIcon}</div>}
            <Select
                disabled={disabled}
                value={value}
                onChange={onGetValue}
                showSearch
                style={{
                    width: '100%'
                }}
                mode={multiple && 'multiple'}
                allowClear={allowClear}
                placeholder={placeholder}
                size={size}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    (option?.label ?? '')
                        .toLowerCase()
                        .includes(input.toLowerCase())
                }
                filterSort={
                    filterSort
                        ? (optionA, optionB) =>
                              (optionA?.label ?? '')
                                  .toLowerCase()
                                  .localeCompare(
                                      (optionB?.label ?? '').toLowerCase()
                                  )
                        : false
                }
                options={options}
            />
        </SelectStyle>
    );
};
export default SelectOption;
