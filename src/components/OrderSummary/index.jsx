import React from 'react';
import { usePostWithDrawMutation } from '../../app/actions/walletApi';
import Button from '../Button';
import { formatMoney, formatNumber } from '../Utils/formatMoney';
import OrderSummaryStyle from './order-summary.style';

const OrderSummary = ({ onAction = () => {}, packageItem, valueForm }) => {
    const [_, { isLoading }] = usePostWithDrawMutation({
        fixedCacheKey: 'postWithDraw'
    });
    return (
        <OrderSummaryStyle>
            <h2 className="title">Order Summary</h2>
            <h4 className="title">
                Withdraw Credit <br />
                {formatMoney(valueForm.withdraw_nominal)}
            </h4>
            <div className="hr"></div>
            <div className="order-menu">
                <div className="order-menu__label">Subtotal</div>
                <div className="order-menu__price">
                    {formatMoney(valueForm.withdraw_nominal) || '-'}
                </div>
            </div>
            <div className="order-menu">
                <div className="order-menu__label">Admin Fee (0%)</div>
                <div className="order-menu__price">{formatMoney(0)}</div>
            </div>
            <div className="hr"></div>
            <div className="order-menu">
                <div className="order-menu__label">Grand total</div>
                <div className="order-menu__price total">
                    {formatMoney(valueForm.withdraw_nominal) || '-'}
                </div>
            </div>
            <Button
                loading={isLoading}
                block
                color="primary"
                onClick={() => onAction(packageItem)}>
                Withdraw now
            </Button>
        </OrderSummaryStyle>
    );
};
export default OrderSummary;
