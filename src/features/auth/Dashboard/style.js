import styled from 'styled-components';

export const MyTaskStyle = styled.div`
    .card {
        &-section {
            min-height: 570px;
            border-radius: 8px;
        }
    }
`;
export const DashboardCandidatesStyle = styled.div`
    .card {
        &-section {
            min-height: 570px;
            border-radius: 8px;
        }
    }
    .ant-tabs-tab {
        border-bottom: 1px solid #e8e8e8;
        margin-right: 10px !important;
        &.ant-tabs-tab-active {
            border: 1px solid #8fe0d4;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
    }
    .referred {
        &-tabs {
            text-align: left;
            &__title {
                font-weight: 600;
                font-size: 12px;
                color: #444444;
                margin-bottom: 5px;
            }
            &__postdate {
                font-weight: 400;
                font-size: 10px;
                color: #666666;
            }
        }
        &-filter {
            color: #444444;
            border-color: #444444;
        }
    }
`;
