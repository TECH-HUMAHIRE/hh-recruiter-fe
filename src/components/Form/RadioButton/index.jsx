import { Form, Radio } from 'antd';
import React from 'react';
import { Col, Row } from '../../Grid';
import Style from './radio-button.style';

const RadioButton = (props) => {
    const { item, validateForm, id = '', onGetValue = () => {} } = props;
    const [isValid, setValid] = React.useState(false);
    const [value, setValue] = React.useState(item.value);
    const handleChange = (e) => {
        let valueButton = e.target.value;
        onGetValue({
            id: id,
            name: item.name,
            value: valueButton,
            status:
                item.required === true
                    ? valueButton === '' || valueButton === undefined
                        ? false
                        : true
                    : true
        });
        setValue(valueButton);
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
        <Form.Item>
            {item.labelTop && <label htmlFor="">{item.labelTop}</label>}
            <Style>
                <Radio.Group
                    value={value}
                    name={item.name}
                    onChange={handleChange}
                    defaultValue={1}>
                    <Row>
                        {item.options.map((label, key) => {
                            return (
                                <Col
                                    key={key}
                                    xl={label.col.xl ?? label.col}
                                    lg={label.col.lg ?? label.col}
                                    md={label.col.md ?? label.col}
                                    sm={label.col.sm ?? label.col}
                                    xs={label.col.xs ?? label.col}>
                                    <Radio
                                        className="radio-label"
                                        value={label.value}>
                                        {label.label}
                                    </Radio>
                                </Col>
                            );
                        })}
                    </Row>
                </Radio.Group>
            </Style>
            {isValid && <small>{item.valid}</small>}
        </Form.Item>
    );
};
export default RadioButton;
