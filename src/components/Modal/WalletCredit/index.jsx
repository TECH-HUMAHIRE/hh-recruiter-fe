import { Card, Form, InputNumber } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import WalletIcon from '../../Icon/Wallet';
import { formatMoney } from '../../Utils/formatMoney';
import { color } from '../../Utils/variable';
import WalletCreditStyle from './wallet-credit.style';

const WalletCredit = ({
    open = false,
    onClose = () => {},
    onShowWithdrawNext = () => {},
    data
}) => {
    const nominalButton = [
        {
            value: 1000000
        },
        {
            value: 3000000
        },
        {
            value: 5000000
        },
        {
            value: 10000000
        }
    ];
    const [form] = Form.useForm();
    const [isActive, setActive] = React.useState(false);
    const [, forceUpdate] = React.useState({});

    const onChangeForm = (changedFields, allFields) => {
        setActive('');
    };
    const onClickNominal = (value) => {
        setActive(value);
        form.setFieldsValue({
            withdraw_nominal: value
        });
    };
    const handleAllBalance = () => {
        form.setFieldsValue({
            withdraw_nominal: (data?.wallet_balance / 100) * 90
        });
    };
    React.useEffect(() => {
        forceUpdate({});
    }, []);
    React.useEffect(() => {
        if (open) {
            setActive(form.getFieldValue('withdraw_nominal'));
        }
    }, [open]);
    return (
        <WalletCreditStyle
            open={open}
            footer={null}
            title="Withdraw credit"
            width={780}
            onCancel={onClose}>
            <Card className="card-wallet">
                <div className="card-wallet__info">
                    <div className="card-wallet__info-icon">
                        <WalletIcon color={color.employee.primary} />
                    </div>
                    <div>
                        Max Withdraw Balance :{' '}
                        <b>{formatMoney((data?.wallet_balance / 100) * 90)}</b>
                    </div>
                </div>
            </Card>
            <Form
                requiredMark={'optional'}
                form={form}
                name="withdraw"
                onFieldsChange={onChangeForm}
                onFinish={onShowWithdrawNext}
                autoComplete="off"
                layout="vertical">
                <Row justify="center">
                    <Col xl={12}>
                        <div style={{ position: 'relative' }}>
                            <Form.Item
                                label="Input Nominal Withdraw"
                                name="withdraw_nominal"
                                help="Minimum Withdraw Rp 500.000"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your  minimum withdraw!'
                                    },
                                    ({}) => ({
                                        validator(_, value) {
                                            if (value < 500000) {
                                                return Promise.reject(
                                                    new Error(
                                                        'Minimum withdraw less than Rp 500.000'
                                                    )
                                                );
                                            }
                                            return Promise.resolve();
                                        }
                                    })
                                ]}>
                                <InputNumber
                                    style={{ width: '100%' }}
                                    // pattern="[^0-9]"
                                    formatter={(value) =>
                                        `${value}`.replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ','
                                        )
                                    }
                                    type="tel"
                                    size={'large'}
                                    parser={(value) =>
                                        value.replace(/\$\s?|(,*)/g, '')
                                    }
                                    prefix="Rp "
                                />
                            </Form.Item>
                            <div
                                className="withdraw-all"
                                onClick={handleAllBalance}>
                                All Balance
                            </div>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <Row>
                            {nominalButton.map((item, key) => {
                                return (
                                    <Col md={3} key={key}>
                                        <Button
                                            className={`btn-withdraw ${
                                                isActive === item.value
                                                    ? 'active'
                                                    : ''
                                            }`}
                                            block
                                            onClick={() =>
                                                onClickNominal(item.value)
                                            }>
                                            {formatMoney(item.value)}
                                        </Button>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    color="primary"
                                    htmlType="submit"
                                    block
                                    disabled={
                                        form
                                            .getFieldsError()
                                            .filter(
                                                ({ errors }) => errors.length
                                            ).length > 0
                                    }>
                                    Next
                                </Button>
                            )}
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </WalletCreditStyle>
    );
};
export default WalletCredit;
