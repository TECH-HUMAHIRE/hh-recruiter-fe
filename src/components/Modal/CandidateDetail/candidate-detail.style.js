import { Modal } from 'antd';
import styled from 'styled-components';
import randomColor from '../../Utils/RandomColor';
import { color } from '../../Utils/variable';
const CandidateDetailStyle = styled(Modal)`
    .title {
        font-size: 20px;
    }
    .close-icon {
        width: 20px;
        margin-right: 10px;
        height: fit-content;
        cursor: pointer;
    }
    .ant-modal-body {
        padding: 0;
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
            &__right {
                display: flex;
                align-items: center;
            }
            &__initial {
                padding: 15px 12px;
                font-size: 24px;
                display: flex;
                align-items: center;
                font-weight: 700;
                margin-right: 12px;
                color: #fff;
                background-color: ${(props) => randomColor(props.keyColor - 9)};
                border-radius: 8px;
                min-width: 46px;
                text-align: center;
                display: flex;
                justify-content: center;
            }

            &__left {
                .ant-btn-outline-primary {
                    margin-right: 15px;
                }
            }
        }
        &-body {
            padding: 24px;
        }
    }
    .referred {
        &-information {
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
            &__contact {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 25px;
                .border {
                    position: relative;
                    padding-right: 12px;
                    &:before {
                        position: absolute;
                        content: '';
                        right: 0;
                        width: 1px;
                        background-color: #e8e8e8;
                        height: 25px;
                    }
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
            &__user {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            &__profile {
                display: flex;
                margin-right: 40px;
            }
            &__avatar {
                width: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
            &__email {
                a {
                    white-space: pre-wrap;
                    word-break: keep-all;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    max-width: 100%;
                    max-height: 100%;
                    display: flex;
                    align-items: center;
                    span {
                        margin-right: 5px;
                    }
                }
            }
            &__chat {
                cursor: pointer;
                color: ${color.employee.seconday};
                display: flex;
                align-items: center;
                span {
                    margin-right: 5px;
                }
            }
        }
        &-experience {
            padding-left: 45px;
            position: relative;
            font-size: 14px;
            line-height: 22px;
            color: #666666;
            font-weight: 400;
            padding-bottom: 16px;
            &:before {
                position: absolute;
                left: 15px;
                top: 8px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #fff;
                border: 1px solid ${color.employee.primary};
                content: '';
            }
            &:after {
                position: absolute;
                left: 18px;
                top: 28px;
                bottom: 10px;
                width: 1px;
                background-color: ${color.employee.primary};
                content: '';
            }
            &__current {
                margin-left: 10px;
                color: ${color.employee.primary};
                font-weight: 600;
                font-size: 12px;
                padding: 3px 10px;
                border-radius: 20px;
                border: 1px solid ${color.employee.primary};
            }
            &.current {
                &:before {
                    position: absolute;
                    left: 15px;
                    top: 8px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: ${color.employee.primary};
                    border: 1px solid ${color.employee.primary};
                    box-shadow: 0px 0px 5px 5px #5ff1dc;
                    content: '';
                }
            }
            .title {
                font-size: 16px;
                margin-bottom: 8px;
            }
            &__date,
            &__location {
                margin-bottom: 8px;
            }
            &__job {
                font-weight: 600;
                font-size: 14px;
                color: #444444;
                margin-bottom: 8px;
            }
            &__desc {
                font-size: 12px;
            }
        }
        &-certification {
            display: flex;
            padding-bottom: 20px;
            margin-bottom: 20px;
            &__info {
                width: 100%;
            }
        }
    }
`;
export default CandidateDetailStyle;
