import { Modal } from 'antd';
import styled from 'styled-components';
const JobDetailStyle = styled(Modal)`
    .ant-modal-header {
        border-bottom: none;
    }
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
    .ant-modal-body {
        padding: 0;
    }
    .sub-title {
        color: #444444;
        font-size: 16px;
    }
    .job {
        &-header {
            position: relative;
            margin-bottom: 65px;
            &__info {
                position: absolute;
                left: 0;
                bottom: -42%;
                img {
                    width: 120px;
                    margin-right: 25px;
                }
            }
            &__company {
                display: flex;
                align-items: end;
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
`;
export default JobDetailStyle;
