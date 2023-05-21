import { Modal } from 'antd';
import styled from 'styled-components';
import { color } from '../../Utils/variable';
const DetailTransasctionStyle = styled(Modal)`
    .ant-modal-header {
        border-bottom: none;
    }
    .modal-body {
        padding: 24px;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        .title {
            margin-bottom: 5px;
            line-height: 36px;
        }
    }
    .transaction {
        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            &__right {
                display: flex;
                align-items: center;
                .title {
                    margin-right: 8px;
                    margin-bottom: 0;
                }
            }
        }
        &-information {
            margin-bottom: 30px;
            &__card {
                display: flex;
                align-items: center;
                margin-bottom: 25px;
            }
            &__icon {
                margin-right: 10px;
                padding: 10px 11px;
                border-radius: 50%;
                background: #fafafa;
                display: flex;
                align-items: center;
                img {
                    width: 22px;
                    height: 22px;
                    object-fit: contain;
                }
                span {
                    width: 24px;
                    height: 24px;
                    object-fit: contain;
                }
            }
            &__label {
                font-size: 14px;
                font-weight: 700;
                color: #666666;
            }
            &__value {
                font-size: 14px;
            }
        }
        &-status {
            font-size: 16px;
        }
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
                &.grand_total {
                    color: #444444;
                    font-weight: 700;
                }
            }
            &__price {
                font-weight: 700;
                font-size: 14px;
                line-height: 21px;
                color: #444444;
                &.total {
                    font-size: 16px;
                    color: ${color.employee.primary};
                }
            }
        }
        &-detail {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            color: #666666;
            .title {
                &-pack {
                    margin-bottom: 10px;
                }
            }
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
    .ant-tag-green {
        color: ${color.employee.primary};
        background: #e4fffb;
        border-color: #86ffee;
    }
`;
export default DetailTransasctionStyle;
