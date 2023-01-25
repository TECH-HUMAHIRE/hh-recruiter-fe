import React from 'react';
import Button from '../Button';
import { formatMoney, formatNumber } from '../Utils/formatMoney';
import OrderSummaryStyle from './order-summary.style';

const OrderSummary = ({ onAction = () => {}, packageItem }) => {
    return (
        <OrderSummaryStyle>
            <h2 className="title">Order Summary</h2>
            <h4 className="title">
                Withdraw Credit <br />
                {formatMoney(1000000)}
            </h4>
            <div className="hr"></div>
            <div className="order-menu">
                <div className="order-menu__label">Subtotal</div>
                <div className="order-menu__price">
                    {formatMoney(packageItem?.price) || '-'}
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
                    {formatMoney(packageItem?.price) || '-'}
                </div>
            </div>
            <Button block color="primary" onClick={() => onAction(packageItem)}>
                Withdraw now
            </Button>
        </OrderSummaryStyle>
    );
};
export default OrderSummary;
