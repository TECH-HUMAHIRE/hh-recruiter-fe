import styled from 'styled-components';
const SelectStyle = styled.div`
    position: relative;
    select {
        border-radius: 8px;
    }
    .prefix-icon {
        position: absolute;
        top: 8px;
        z-index: 1;
        left: 11px;
    }
    .ant-select-selector {
        padding: 0 11px 0
            ${(props) => (props.frontIcon && props.multiple ? '40px' : '11px')} !important;
        border-radius: 8px !important;
    }
    .ant-select-selection-item {
        padding-left: ${(props) =>
            props.multiple
                ? '8px'
                : props.frontIcon
                ? '30px !important'
                : '8px'};
    }
    .ant-select-selection-search-input,
    .ant-select-selection-placeholder {
        padding-left: ${(props) =>
            props.frontIcon ? '30px !important' : '0px'};
    }
`;
export default SelectStyle;
