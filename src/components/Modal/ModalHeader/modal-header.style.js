import { Modal } from 'antd';
import styled from 'styled-components';
const Style = styled(Modal)`
    .ant-modal-header {
        border-bottom: none;
    }
    .modal {
        &-header {
            display: flex;
            align-items: center;
            .sub-title {
                font-size: 14px;
                font-weight: 400;
            }
        }
        &-body {
            padding: 24px;
        }
    }
    .form-email {
        margin-bottom: 15px;
    }
    .ant-modal-body {
        padding: 0;
    }
    .ant-tabs-nav {
        padding: 0 24px;
    }
    .close-icon {
        width: 20px;
        margin-right: 10px;
    }
    .default-image {
        width: 128px;
        display: block;
        margin: auto;
        margin-bottom: 25px;
    }
    .mailto {
        display: flex;
        align-items: center;
        span {
            margin-right: 5px;
        }
    }
    .operational {
        color: #137466;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 25px;
    }
    .btn-verify {
        padding: 0;
        background: transparent;
        border: unset;
        color: #137466;
        text-align: right;
        margin: 0 0 0 auto;
        font-size: 12px;
        float: right;
        cursor: pointer;
        position: absolute;
        z-index: 2;
        bottom: 4px;
        right: 15px;
    }
    .password {
        &-form {
            display: flex;
            align-items: center;
            span {
                width: 100px;
                margin-right: 10px;
            }
        }
        &-icon {
            width: 18px;
            margin-right: 10px;
        }
        &-change {
            color: #137466;
            font-weight: 400;
            font-size: 14px;
            cursor: pointer;
        }
    }
    .code {
        &-verification {
            margin-bottom: 25px;
        }
        &-resend {
            color: #137466;
            margin-top: 8px;
            cursor: pointer;
        }
    }
    .ant-radio-group {
        width: 100%;
    }
    .radio-label {
        span {
            color: #444444;
            font-weight: normal;
        }
    }
`;
export default Style;
