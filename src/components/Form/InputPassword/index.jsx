/* eslint-disable react/prop-types */
import { Form } from 'antd';
import React from 'react';
import InputStyle from './input-text.style';
const InputPassword = (props) => {
    const { item, validateForm, id = '', onGetValue = () => {} } = props;
    const [isValid, setValid] = React.useState(false);
    const [value, setValue] = React.useState(item.value);

    const handleChange = (e) => {
        let valueInput = e.target.value;
        onGetValue({
            id: id,
            name: item.name,
            value: valueInput,
            status:
                item.required === true
                    ? item.character === undefined
                        ? valueInput === ''
                            ? false
                            : true
                        : item.character.min.length > valueInput.length ||
                          item.character.max.length < valueInput.length
                        ? false
                        : true
                    : true
        });
        setValue(valueInput);
        setValid(!item.status);
    };
    const handleSetValid = () => {
        if (!validateForm) {
            setValid(!item.status);
        }
    };
    const handleSetValidCallback = React.useCallback(handleSetValid, [
        handleSetValid
    ]);
    React.useEffect(() => {
        handleSetValidCallback();
    }, [handleSetValidCallback]);
    React.useEffect(() => {
        if (item.value !== value) {
            setValue(item.value);
        }
        // eslint-disable-next-line
    }, [item]);
    return (
        <Form.Item label={item.labelTop} help={item.helper}>
            <InputStyle
                id={item.id}
                name={item.name}
                type={item.type}
                disabled={item.disabled}
                value={value}
                onChange={handleChange}
                size={item.size}
                placeholder={item.placeholder}
                prefix={item.frontIcon ? item.frontIcon : false}
            />
            {isValid && (
                <small>
                    <i className="text-danger">{item.valid}</i>
                </small>
            )}
            {/* {!isValid && value !== '' && (
                <small>
                    <i className="text-success">{item.successText}</i>
                </small>
            )} */}
        </Form.Item>
    );
};
export default InputPassword;
