import { Form } from 'antd';
import React from 'react';
import Style from './textarea.style';

const TextArea = (props) => {
    const { item, validateForm, id = '', onGetValue = () => {} } = props;
    const [value, setValue] = React.useState(item.value);
    const [isValid, setValid] = React.useState(false);
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
        setValid(!item.status);
        setValue(valueInput);
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
        <Form.Item label={item.labelTop}>
            <Style
                name={item.name}
                onChange={handleChange}
                value={value}
                rows={item.rows}
                placeholder={item.placeholder}
                className={item.className}
            />
            {isValid && <small>{item.valid}</small>}
        </Form.Item>
    );
};
export default TextArea;
