import { Modal } from 'antd';
import styled from 'styled-components';
import { color } from '../../Utils/variable';

const WalletCreditStyle = styled(Modal)`
    .card {
        &-wallet {
            margin-bottom: 20px;
        }
    }
    .withdraw-all {
        cursor: pointer;
        color: ${color.employee.primary};
        position: absolute;
        top: 0px;
        right: 0;
        font-weight: 600;
        font-size: 12px;
    }

    .btn {
        &-withdraw {
            color: #444444;
            border-color: #444444;
            font-size: 14px;
            margin-bottom: 30px;
            &.active {
                color: ${color.employee.primary};
                border-color: ${color.employee.primary};
            }
        }
    }
`;
export default WalletCreditStyle;
