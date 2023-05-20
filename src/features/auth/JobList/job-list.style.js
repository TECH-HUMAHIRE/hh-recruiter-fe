import styled from 'styled-components';
import { color } from '../../../components/Utils/variable';

export const MyTaskStyle = styled.div`
    .card {
        &-section {
            min-height: 570px;
            border-radius: 8px;
        }
    }
`;
export const DashboardCandidatesStyle = styled.div`
    .ant-tabs-nav {
        width: 35%;
    }
    .ant-tabs-tab-btn {
        width: 100%;
    }
    .message {
        &-filter {
            color: #444444;
            border-color: #e8e8e8;
        }
    }
    .card {
        &-section {
            min-height: 570px;
            border-radius: 8px;
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
                font-size: 14px;
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
    }
    .ant-tabs-tab {
        border: 1px solid #e8e8e8;
        border-radius: 8px;
        margin-right: 10px !important;
        &.ant-tabs-tab-active {
            border: 1px solid ${color.employee.seconday};
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
    }
    .job {
        &-card {
            display: flex;
            align-items: flex-start;
            img {
                width: 60px;
                margin-right: 10px;
                border-radius: 8px;
            }
        }
        &-tabs {
            text-align: left;
            padding-top: 40px;
            font-weight: 600;
            font-size: 16px;
            color: #444444;
            margin-bottom: 5px;
            &__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .ant-dropdown-trigger {
                    margin: 0;
                }
            }
            &__company {
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
                color: #666666;
            }
            &__city {
                font-weight: 300;
                font-size: 12px;
                line-height: 18px;
                color: #666666;
                margin-bottom: 15px;
            }
        }

        &-filter {
            color: #444444;
            border-color: #444444;
        }
        &-pagination {
            margin-top: 30px;
            width: 35%;
        }
        &-count {
            margin-bottom: 15px;
        }
    }
`;
export const SectionDetailStyle = styled.div`
    border: 1px solid #e8e8e8;
    border-radius: 8px 8px 0px 0px;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        &-left {
            display: flex;
            align-items: center;
        }
        &-logo {
            display: block;
            margin-right: 25px;
            width: 40px;
            object-fit: contain;
        }
        .title {
            margin-bottom: 5px;
            line-height: 36px;
        }
    }
    .sub-title {
        color: #444444;
        font-size: 16px;
    }
    .job {
        &-header {
            position: relative;
            margin-bottom: 65px;
            > img {
                border-radius: 8px 8px 0px 0px;
                height: 150px;
                width: 100%;
                object-fit: cover;
            }
            &__info {
                position: absolute;
                left: 0;
                bottom: -65%;
            }
            &__company {
                display: flex;
                align-items: end;
                > img {
                    width: 120px;
                    margin-right: 25px;
                }
                .title {
                    margin-bottom: 8px;
                }
            }
        }
        &-info {
            padding: 24px;
        }
        &-note {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            border: 1px solid #cbd3ff;
            background: #f5f6ff;
            border-radius: 8px;
            color: #444444;
            margin-bottom: 24px;
            img {
                width: 20px;
                margin-right: 10px;
            }
        }
        &-job__title {
            color: #666666;
            margin-bottom: 25px;
        }
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
            &__label {
                font-size: 14px;
                font-weight: 700;
                color: #666666;
                margin-bottom: 10px;
            }
            &__value {
                font-size: 14px;
            }
        }
        &-overview {
            &__desc {
                min-height: 100px;
            }
        }
    }
    .btn {
        padding-left: 50px;
        padding-right: 50px;
        &-cancel {
            margin-right: 10px;
        }
        span {
            width: 50px;
        }
    }
    .card-earn__price {
        bottom: -28px;
        top: unset;
        border-radius: 0px 0px 0px 32px;
    }
    .footer-action {
        padding: 24px;
        text-align: right;
        border-top: 1px solid #e8e8e8;
        button {
            padding-right: 75px;
            padding-left: 75px;
        }
    }
`;
