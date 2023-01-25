import { Modal } from 'antd';
import styled from 'styled-components';
const WithdrawMethodStyle = styled(Modal)`
    .close-icon {
        width: 20px;
        margin-right: 10px;
        height: fit-content;
        cursor: pointer;
    }

    .modal {
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__info {
                &-location {
                    font-weight: 400;
                    font-size: 16px;
                    color: #444444;
                }
                &-name {
                    font-size: 24px;
                    margin-bottom: 5px;
                }
            }
            &__left {
                display: flex;
                align-items: center;
                .title {
                    margin: 0px;
                }
            }
        }
        &-body {
            padding: 24px;
        }
    }
    .payment {
        &-list {
            margin-bottom: 25px;
            .ant-radio-wrapper {
                align-items: center;
            }
        }
        &-instructions {
            .ant-list {
                &:before {
                    content: '';
                    position: absolute;
                    z-index: 1;
                    width: 1px;
                    background-color: #e6e6e6;
                    left: 10px;
                    top: 10px;
                    bottom: 10px;
                }
            }
            &__list {
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
                &-number {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #666666;
                    border-radius: 50%;
                    margin-right: 15px;
                    font-size: 12px;
                    z-index: 2;
                    background: #fff;
                }
                &-desc {
                    width: calc(100% - 20px);
                }
            }
        }
        &-account {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &__info {
                margin-right: 40px;
            }
            &__number {
                font-weight: 400;
            }
            &__image {
                width: 100px;
            }
        }
    }
`;
export default WithdrawMethodStyle;
