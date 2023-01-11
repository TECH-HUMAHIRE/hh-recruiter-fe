import { Input } from 'antd';
import React from 'react';
import { Col } from '../Grid';
import { Row } from '../Grid';
import Style from './input-verification.style.';

const InputVerification = () => {
    const [valueForm, setValueForm] = React.useState({
        formone: '',
        formtwo: '',
        formthree: '',
        formfour: '',
        formfive: '',
        formsix: ''
    });
    const form1 = React.useRef(null);
    const form2 = React.useRef(null);
    const form3 = React.useRef(null);
    const form4 = React.useRef(null);
    const form5 = React.useRef(null);
    const form6 = React.useRef(null);
    const handleChange = async (e, next, prev) => {
        let value = e.target.value;
        let id = e.target.id;
        if (value.length > 0) {
            next.current.focus();
        } else {
            prev.current.focus();
        }
        await setValueForm({
            ...valueForm,
            [id]: value
        });
    };
    return (
        <Style>
            <Row>
                <Col md={2}>
                    <Input
                        onChange={(e) => handleChange(e, form2, form1)}
                        maxLength={1}
                        size="large"
                        id="formone"
                        ref={form1}
                    />
                </Col>
                <Col md={2}>
                    <Input
                        onChange={(e) => handleChange(e, form3, form1)}
                        maxLength={1}
                        size="large"
                        id="formtwo"
                        ref={form2}
                    />
                </Col>
                <Col md={2}>
                    <Input
                        onChange={(e) => handleChange(e, form4, form2)}
                        maxLength={1}
                        size="large"
                        id="formthree"
                        ref={form3}
                    />
                </Col>
                <Col md={2}>
                    <Input
                        onChange={(e) => handleChange(e, form5, form3)}
                        maxLength={1}
                        size="large"
                        id="formfour"
                        ref={form4}
                    />
                </Col>
                <Col md={2}>
                    <Input
                        onChange={(e) => handleChange(e, form6, form4)}
                        maxLength={1}
                        size="large"
                        id="formfive"
                        ref={form5}
                    />
                </Col>
                <Col md={2}>
                    <Input
                        onChange={(e) => handleChange(e, form6, form5)}
                        maxLength={1}
                        size="large"
                        id="formsix"
                        ref={form6}
                    />
                </Col>
            </Row>
        </Style>
    );
};
export default InputVerification;
