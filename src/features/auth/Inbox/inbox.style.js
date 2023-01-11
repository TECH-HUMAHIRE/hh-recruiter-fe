import styled from 'styled-components';
import { color } from '../../../components/Utils/variable';
const Style = styled.div`
    .inbox {
        &-notification {
            &__icon {
                margin-right: 10px;
                padding: 10px 11px;
                border-radius: 50%;
                background: #fafafa;
                display: flex;
                align-items: center;
                img,
                span {
                    width: 24px;
                    height: 24px;
                    object-fit: contain;
                }
            }
        }
    }
    .message {
        &-avatar {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            display: block;
        }
        &-user {
            margin-right: 30px;
        }
        &-tabs {
            text-align: left;
            display: flex;
            align-items: center;
            cursor: pointer;
            &__name {
                font-weight: 600;
                font-size: 12px;
                color: #444444;
                margin-bottom: 5px;
            }
            &__chat {
                font-weight: 400;
                font-size: 10px;
                color: #666666;
                width: 200px;
                white-space: pre-wrap;
                word-break: keep-all;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }
            &__time {
                text-align: right;
            }
            &__hour {
                font-weight: 400;
                font-size: 10px;
                color: #666666;
                margin-bottom: 5px;
            }
            &__read {
                font-weight: 700;
                font-size: 10px;
                line-height: 15px;
                text-align: center;
                color: #ffffff;
                background-color: ${color.employee.primary};
                padding: 0px -10px;
                border-radius: 50%;
                width: 25px;
                margin: 0 0 0 auto;
                padding: 4px 0px;
                text-align: center;
            }
        }
        &-filter {
            color: #444444;
            border-color: #e8e8e8;
        }
    }
`;
export default Style;
