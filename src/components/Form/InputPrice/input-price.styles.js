import styled from 'styled-components';
import { Row } from '../../Grid';

const Style = styled(Row)`
    position: relative;
    .strip {
        border-top: 1px solid #666666;
        width: 100%;
    }
    .ant-input-number-affix-wrapper {
        width: 100%;
        border-radius: 8px;
    }
    .error {
        border-color: red !important;
    }
    &:focus,
    &:hover {
        box-shadow: unset !important;
    }
    ${(props) =>
        props.range &&
        `
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 8px;
    background-color: #666666;
    right: calc(100% - 50% - 10px);
    top: calc(100% - 50% - -2px);
  }
  `}
`;
export default Style;
