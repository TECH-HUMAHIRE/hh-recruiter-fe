import styled from 'styled-components';

const Style = styled.div`
    border-radius: 8px;
    .ql-editor {
        height: ${(props) =>
            props.height === undefined ? '200px' : `${props.height}px`};
        &:before {
            color: #bfbfbf;
            font-style: unset;
            font-size: 16px;
        }
        p {
            font-size: 16px;
        }
    }
    .label-area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
            font-size: 14px;
            color: #aaa;
        }
    }
    .ql-toolbar {
        border-radius: 8px 8px 0 0;
        border-color: #eeeeee;
    }
    .ql-container {
        border-color: #eeeeee;
        border-bottom: none;
    }
    .text-character {
        color: #666666;
        font-size: 12px;
        padding: 15px;
        text-align: right;
        border: 1px solid #eeeeee;
        border-top: none;
        border-radius: 0 0 8px 8px;
        display: block;
        width: 100%;
    }
`;
export default Style;
