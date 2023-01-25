import { Modal } from 'antd';
import styled from 'styled-components';
import { color } from '../../../components/Utils/variable';
export const Style = styled.div`
    .wallet {
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
    }
    .table {
        &-history {
            .credit {
                color: red;
                span {
                    margin-right: 5px;
                    transform: rotate(180deg);
                }
            }
            .debit {
                color: ${color.employee.primary};
                span {
                    margin-right: 5px;
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
export const ModalSuccessStyle = styled(Modal)`
    .ant-modal-header {
        border-bottom: unset;
        .anticon-close {
            cursor: pointer;
        }
    }
    .success {
        text-align: center;
        &-icon {
            width: 120px;
            margin: 0 auto 32px;
        }
        &-info {
            margin-bottom: 25px;
        }
    }
`;
