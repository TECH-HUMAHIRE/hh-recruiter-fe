import { Modal } from 'antd';
import styled from 'styled-components';

const ReferCandidatesStyle = styled(Modal)`
    .refer {
        &-company {
            display: flex;
            &__logo {
                margin-right: 25px;
                width: 80px;
            }
            .title {
                margin-bottom: 5px;
            }
            &__name {
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
                color: #666666;
                margin-bottom: 5px;
            }
            &__city {
                font-weight: 400;
                font-size: 10px;
                line-height: 15px;
                color: #666666;
            }
        }
        &-email {
            &__action {
                display: flex;
                justify-content: end;
                button {
                    padding: 8px 32px;
                    width: 170px;
                    font-weight: 600;
                }
            }
        }
        &-link {
            text-decoration: underline;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #444444;
        }
    }
    .form {
        &-shareable {
            display: flex;
            align-items: center;
            input {
                margin-right: 12px;
            }
        }
    }
`;
export default ReferCandidatesStyle;
