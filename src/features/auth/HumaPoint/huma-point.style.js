import { Modal } from 'antd';
import styled from 'styled-components';
import { color } from '../../../components/Utils/variable';
export const Style = styled.div`
    .humapoint {
        &-top {
            display: flex;
            align-items: center;
            &__info {
                color: #666666;
                div,
                h4 {
                    margin-bottom: 7px;
                }
                &-note {
                    font-size: 12px;
                }
            }
        }
        &-right {
            justify-content: space-between;
        }
        &-icon {
            background: #fff9f3;
            border-radius: 50%;
            padding: 8px 10px;
            margin-right: 10px;
        }
        &-header {
            margin-bottom: 30px;
        }
        &-card {
            border-color: #fddfc5;
            background-color: #fff9f3;
            margin-bottom: 30px;
        }
        &-notes {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &__icon {
                width: 20px;
                margin-right: 15px;
            }
            &__info {
                display: flex;
                align-items: center;
            }
        }
    }
    .table {
        &-header {
            margin-bottom: 32px;
        }
        &-history {
            .credit {
                color: ${color.employee.primary};
                span {
                    margin-right: 5px;
                }
            }
            .debit {
                color: red;
                span {
                    margin-right: 5px;
                    transform: rotate(180deg);
                }
            }
        }
    }
    .action-table {
        svg {
            fill: #666666 !important;
            width: 20px !important;
            height: 20px !important;
        }
    }
    .ant-tag-green {
        color: ${color.employee.primary};
        background: #e4fffb;
        border-color: #86ffee;
    }
`;
