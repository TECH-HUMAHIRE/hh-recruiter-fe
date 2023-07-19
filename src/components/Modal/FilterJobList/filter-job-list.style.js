import { Modal } from 'antd';
import styled from 'styled-components';
const FilterJobListStyle = styled(Modal)`
    .close-icon {
        width: 20px;
        margin-right: 10px;
        height: fit-content;
        cursor: pointer;
    }
    .modal {
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                margin: 0px;
            }
            &__right {
                display: flex;
                align-items: center;
            }
        }
    }
    .select-currency {
        width: max-content;
    }
`;
export default FilterJobListStyle;
