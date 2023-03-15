import { Modal } from 'antd';
import styled from 'styled-components';

const Style = styled(Modal)`
    .ant-skeleton-input {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .ant-checkbox-wrapper {
        margin-right: 20px;
        .ant-checkbox-inner {
            border-radius: 3px;
        }
    }
    .job {
        &-card {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 1px solid #cccc;
            padding-bottom: 10px;
            img {
                width: 60px;
                margin-right: 10px;
            }
        }
        &-tabs {
            text-align: left;
            padding-top: 40px;
            font-weight: 600;
            font-size: 16px;
            color: #444444;
            margin-bottom: 5px;
            &__header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .ant-dropdown-trigger {
                    margin: 0;
                }
            }
            &__company {
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
                color: #666666;
            }
            &__city {
                font-weight: 300;
                font-size: 12px;
                line-height: 18px;
                color: #666666;
                margin-bottom: 15px;
            }
        }
    }
`;
export default Style;
