import { Card } from 'antd';
import styled from 'styled-components';

const OrderSummaryStyle = styled(Card)`
    .order {
        &-menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            &__label {
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #666666;
            }
            &__price {
                font-weight: 700;
                font-size: 14px;
                line-height: 21px;
                color: #222222;
                &.total {
                    font-size: 16px;
                }
            }
        }
        &-detail {
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            color: #666666;
            &__list {
                list-style: disc;
                padding: 0 14px;
                &-menu {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 28px;
                    color: #222222;
                }
            }
        }
    }
`;
export default OrderSummaryStyle;
