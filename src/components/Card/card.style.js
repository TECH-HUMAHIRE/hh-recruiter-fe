import { Card } from 'antd';
import styled from 'styled-components';
import randomColor from '../Utils/RandomColor';
import { color } from '../Utils/variable';
export const CardMenu = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: #444444;
    cursor: pointer;
    padding: 8px 15px;
    width: max-content;
    img,
    span {
        margin-right: 10px;
        width: 18px;
    }
`;
export const CardJobStyle = styled(Card)`
    border-radius: 8px;
    margin-bottom: 30px;
    padding-top: 30px;
    .ant-card-head,
    .ant-card-body {
        padding-right: 15px;
        padding-left: 15px;
    }
    .ant-card-body {
        padding-top: 5px;
    }
    .ant-card-head {
        position: relative;
        border-bottom: unset;
        &:after {
            content: '';
            position: absolute;
            width: 2px;
            height: 30px;
            top: 15px;
            background-color: ${color.employee.primary};
            left: 0;
        }
    }
    .card {
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            cursor: pointer;
            &__info {
                &-location {
                    font-weight: 400;
                    font-size: 10px;
                    color: #666666;
                }
            }
            &__right {
                display: flex;
            }
            &__logo {
                width: 65px;
                margin-right: 10px;
            }
        }
        &-action {
            cursor: pointer;
        }
        &-earn {
            &__price {
                position: absolute;
                right: 0;
                background: linear-gradient(
                    229.81deg,
                    #304ffe 0%,
                    #00bcd4 100%
                );
                border-radius: 0px 9px 0px 32px;
                top: 0;
                padding: 3px 30px;
                color: #fff;
                font-weight: 600;
                width: max-content;
                span {
                    font-weight: 300;
                }
            }
        }
        &-status {
            margin-bottom: 27px;
            font-size: 10px;
            margin-bottom: 5px;
            color: #666666;
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: 400;
            img {
                width: 20px;
                margin-right: 10px;
            }
        }
        &-date {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            margin-bottom: 5px;
            color: #666666;
        }

        &-info {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #e8e8e8;
            &.last {
                border-bottom: unset;
            }
            b {
                text-align: center;
                width: 20px;
                margin-right: 10px;
            }
        }
    }
`;
export const CardReferredStyle = styled(Card)`
    border-radius: 8px;
    height: 390px;
    cursor: pointer;
    .ant-card-head,
    .ant-card-body {
        padding-right: 15px;
        padding-left: 15px;
    }
    .ant-card-body {
        padding-top: 5px;
    }
    .ant-card-head {
        position: relative;
        border-bottom: unset;
    }
    .card {
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            &__info {
                &-location {
                    font-weight: 400;
                    font-size: 10px;
                    color: #666666;
                }
            }
            &__right {
                display: flex;
            }
            &__initial {
                padding: 6px 10px;
                font-size: 20px;
                font-weight: 700;
                margin-right: 10px;
                color: #fff;
                background-color: ${randomColor()};
                border-radius: 8px;
                min-width: 46px;
                text-align: center;
            }

            &__left {
                font-weight: 600;
                font-size: 12px;
                padding: 4px 8px;
                border-radius: 8px;
                background: #fff9f3;
                color: #f57f17;
            }
        }
        &-date {
            font-weight: 400;
            font-size: 10px;
            color: #666666;
            margin-bottom: 17px;
        }
        &-info {
            display: flex;
            align-items: center;
            margin-bottom: 14px;

            img,
            .anticon {
                width: 20px;
                margin-right: 12px;
                display: block;
            }
            &__text {
                font-weight: 400;
                font-size: 12px;
                width: 100%;
                display: block;
                color: #666666;
            }
            &__referred {
                font-weight: 600;
                font-size: 12px;
                color: #137466;
                margin-right: 5px;
            }
            &__rating {
                font-weight: 400;
                font-size: 10px;
                color: #666666;
                display: flex;
                align-items: center;
                .anticon {
                    width: max-content;
                    margin: 3px;
                }
            }
            &__desc {
                font-size: 12px;
                line-height: 24px;
                color: #666666;
                white-space: pre-wrap;
                word-break: keep-all;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
`;
export const CardPruchaseStyle = styled(Card)`
    .ant-card-head {
        background: ${(props) =>
            props.premium
                ? 'linear-gradient(229.81deg, #304FFE 0%, #00BCD4 100%)'
                : '#fff'};
        &-title {
            font-weight: 700;
            text-align: center;
            ${(props) =>
                props.premium &&
                `
        text-align: left;
        color: #fff;
        `}
        }
        .premium-title {
            font-weight: 700;
        }
        .best-value {
            background-color: #f57f17;
            padding: 4px 13px;
            border-radius: 20px;
            font-size: 12px;
            margin-left: 5px;
        }
    }
    .ant-list-item-meta {
        margin: 0;
    }
    .purchase {
        &-price {
            font-weight: 700;
            line-height: 48px;
            color: ${(props) => (props.premium ? '#f57f17' : '#222222')};
            display: flex;
            align-items: end;
            margin-bottom: 15px;
            &__label {
                font-size: 16px;
                margin-bottom: 10px;
                margin-right: 5px;
            }
            &__value {
                font-size: 32px;
            }
        }
        &-desc {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            color: #666666;
            margin-bottom: 25px;
        }
    }
    .ant-list-item-meta-avatar {
        margin: 0;
    }
    .ant-avatar {
        display: flex;
        align-items: center;
        img {
            width: 16px;
            height: 16px;
        }
    }
    .ant-card-actions {
        padding: 0px;
        border-top: none;
        .ant-card-body {
            padding-top: 0;
        }
        li {
            margin: 0;
        }
    }
`;
