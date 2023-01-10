import styled from 'styled-components';
import { width } from '../components/Utils/variable';

const Style = styled.div`
    .section {
        display: flex;
        justify-content: end;
        &-page {
            margin-top: 75px;
            padding: 25px;
            width: ${(props) =>
                props.collapsed
                    ? `calc(100% - 80px)`
                    : `calc(100% - ${width.sidebar}px)`};
            transition: background 0.3s,
                width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        }
    }
    .copy-right {
        color: #aaaaaa;
        text-align: center;
        margin-top: 30px;
        font-size: 12px;
    }
`;
export default Style;
