import { Modal } from 'antd';
import styled from 'styled-components';

const Style = styled(Modal)`
    .modal {
        &-bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            font-size: 14px;
            .anticon {
                margin-right: 10px;
            }
        }
    }
`;
export default Style;
