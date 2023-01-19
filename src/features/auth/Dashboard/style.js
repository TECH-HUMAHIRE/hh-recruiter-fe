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
    .ant-tabs-nav {
        width: 35%;
    }
    .ant-tabs-tab-btn {
        width: 100%;
    }
    .card {
        &-section {
            min-height: 570px;
            border-radius: 8px;
        }
        &-earn {
            &__price {
                position: absolute;
                right: 0;
                background: linear-gradient(
                    229.81deg,
                    #304ffe 0%,
                    #00bcd4 100%
                );
                border-radius: 0px 9px 0px 32px;
                top: 0;
                padding: 3px 30px;
                color: #fff;
                font-weight: 600;
                width: max-content;
                font-size: 14px;
                span {
                    font-weight: 300;
                }
            }
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
        &-card {
            display: flex;
            align-items: flex-start;
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

        &-filter {
            color: #444444;
            border-color: #444444;
        }
    }
`;
