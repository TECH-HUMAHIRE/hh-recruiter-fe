import { Card } from 'antd';
import styled from 'styled-components';
import { color } from '../Utils/variable';
const MessageBoxStyle = styled(Card)`
    position: relative;
    .ant-card-body {
        padding: 16px 0 0;
    }
    .message {
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px 16px;
            border-bottom: 1px solid #e8e8e8;
            &__top {
                display: flex;
                align-items: center;
            }
            &__avatar {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }
        }
        &-body {
            position: relative;
            overflow-y: auto;
            &__chat {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                overflow-y: auto;
                padding: 16px;
            }
            &__conversation {
                background: #e8e8e8;
                border: 1px solid #c4c4c4;
                border-radius: 4px;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                width: max-content;
                padding: 4px 12px;
                color: #666666;
                margin: auto;
                margin-bottom: 30px;
            }
        }
        &-box {
            padding: 8px 16px;
            position: relative;
            font-size: 16px;
            color: #666666;
            display: flex;
            align-items: flex-end;
            width: max-content;
            max-width: 80%;
            &__sender {
                background-color: #f4fcfb;
                border: 1px solid #8fe0d4;
                margin: 0 0 0 auto;
                margin-bottom: 20px;
                border-radius: 8px 8px 0px 8px;
            }
            &__for {
                background-color: #ffffff;
                border: 1px solid #e8e8e8;
                margin: 0 auto 0 0;
                margin-bottom: 20px;
                border-radius: 0px 8px 8px 8px;
            }
            &__text {
                margin-right: 15px;
                p {
                    margin: 0px;
                }
            }
            &__time {
                font-size: 10px;
            }
        }
        &-bottom {
            padding: 16px 24px;
            display: flex;
            align-items: center;
            &__attach {
                border-color: #e8e8e8;
                padding: 12px 15px;
            }
            .form-input {
                margin: 0 15px;
                width: 100%;
            }
        }
        &-upload {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 99;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 50px;
                margin: 0px auto 15px;
            }
            &__name {
                color: ${color.employee.primary};
                font-weight: 500;
                font-size: 18px;
            }
            &__cancel {
                position: absolute;
                top: 20px;
                right: 20px;
                cursor: pointer;
            }
        }
    }
    .btn-download {
        cursor: pointer;
        position: absolute;
        right: 36px;
        top: 20px;
    }
    .ql-container.ql-snow {
        border-radius: 8px;
        .ql-editor {
            font-size: 16px;
            padding: 10px 15px;
        }
    }
`;
export default MessageBoxStyle;
