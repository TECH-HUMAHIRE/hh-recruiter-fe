import styled from 'styled-components';

const PaginationStyle = styled.div`
    .ant-pagination {
        display: flex;
        width: 100%;
        justify-content: end;
        .ant-pagination-options {
            position: absolute;
            left: 0;
        }
    }
`;
export default PaginationStyle;
