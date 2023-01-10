import { Tabs } from 'antd';
import styled from 'styled-components';
const Style = styled(Tabs)`
    .ant-tabs-nav:before {
        border-bottom: unset;
    }
    .ant-tabs-tab-btn {
        font-weight: 600;
        color: #666666;
    }
`;
export default Style;
