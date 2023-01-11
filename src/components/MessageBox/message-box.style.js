import { Card } from 'antd';
import styled from 'styled-components';
const MessageBoxStyle = styled(Card)`
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
    }
`;
export default MessageBoxStyle;
