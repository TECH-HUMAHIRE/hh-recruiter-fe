/* eslint-disable react/prop-types */
import { Form, InputNumber } from 'antd';
import React from 'react';
import { Col } from '../../Grid';
import Style from './input-price.styles';
const InputPrice = (props) => {
    const { item, id = '', onGetValue = () => {} } = props;
    const [value, setValue] = React.useState(item.value);
    const handleChange = (valueTarget, dataIndex) => {
        if (item.range) {
            if (dataIndex === 'minimum') {
                onGetValue({
                    id: id,
                    name: item.name,
                    value: {
                        min: valueTarget,
                        max: value.max || 0
                    },
                    status:
                        item.required === true
                            ? valueTarget === 0
                                ? false
                                : true
                            : true
                });
                setValue({
                    min: valueTarget,
                    max: value.max || 0
                });
            } else {
                onGetValue({
                    id: id,
                    name: item.name,
                    value: {
                        min: value.min || 0,
                        max: valueTarget
                    },
                    status:
                        item.required === true
                            ? valueTarget < value.min
                                ? false
                                : true
                            : true
                });
                setValue({
                    max: valueTarget,
                    min: value.min || 0
                });
            }
        } else {
            onGetValue({
                id: id,
                name: item.name,
                value: valueTarget,
                status:
                    item.required === true
                        ? valueTarget === 0
                            ? false
                            : true
                        : true
            });
            setValue(valueTarget);
        }

        setValid(!item.status);
    };

    return (
        <Style align="center" range={item.range}>
            <Col sm={item.range ? 6 : 12}>
                <Form.Item
                    label={item.label}
                    help={item.helper}
                    name={item.name}
                    rules={item.rules}>
                    <InputNumber
                        pattern="[^0-9]"
                        id={item.id}
                        name={item.name}
                        disabled={item.disabled}
                        value={item.range ? value.min : value}
                        formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                        type="tel"
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={(value) => handleChange(value, 'minimum')}
                        size={'large'}
                        width="100%"
                        placeholder={item.placeholder}
                        prefix={item.frontIcon ? item.frontIcon : false}
                    />
                </Form.Item>
            </Col>
            {item.range && (
                <React.Fragment>
                    <Col sm={6}>
                        <Form.Item
                            label={item.labelMore}
                            name={item.nameMore}
                            help={item.helperMore}
                            rules={item.rulesMore}>
                            <InputNumber
                                className={value.max < value.min ? 'error' : ''}
                                id={item.id}
                                name={item.name}
                                disabled={item.disabledMore}
                                value={value.max}
                                width="100%"
                                formatter={(value) =>
                                    `${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                                parser={(value) =>
                                    value.replace(/\$\s?|(,*)/g, '')
                                }
                                onChange={(value) =>
                                    handleChange(value, 'maximum')
                                }
                                size={'large'}
                                placeholder={item.placeholderMore}
                                prefix={item.frontIcon ? item.frontIcon : false}
                            />
                        </Form.Item>
                    </Col>
                </React.Fragment>
            )}
        </Style>
    );
};
export default InputPrice;
