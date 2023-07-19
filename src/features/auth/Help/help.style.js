import styled from 'styled-components';

const Style = styled.div`
    .help {
        &-header {
            .title {
                margin-bottom: 0;
            }
            .text-primary {
                margin-bottom: 25px;
            }
        }
        &-contact {
            margin-bottom: 50px;
            span {
                font-weight: 400;
            }
            &__email {
                margin-bottom: 0;
            }
            &__more {
                margin: 8px 0 10px;
            }
        }
        &-section {
            margin-bottom: 70px;
        }
        .btn-show {
            color: #f57f17;
            border-color: #f57f17;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
`;
export default Style;
