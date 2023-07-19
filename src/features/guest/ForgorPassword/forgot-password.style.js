import styled from 'styled-components';
import { color } from '../../../components/Utils/variable';
const Style = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 830px;
    .registration {
        color: #fff;
        background: ${color.employee.primary};
        padding: 80px;
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .title {
            color: #fff;
        }
        .icon-top {
            top: 0;
            left: 0;
            position: absolute;
            width: 100px;
            &__right {
                top: 50px;
                right: 40px;
                position: absolute;
                width: 30px;
            }
        }
        .icon-bottom {
            bottom: 0;
            right: 0;
            position: absolute;
            width: 75px;
        }
        &-logo {
            margin-bottom: 55px;
            img {
                width: 150px;
            }
        }
        > .title {
            color: #fff;
            margin-bottom: 30px;
        }
        &-desc {
            margin-bottom: 30px;
            .title {
                color: #fff;
            }
            &__icon {
                width: 40px;
                margin-bottom: 15px;
            }
        }
    }
    .code {
        &-verification {
            margin-bottom: 25px;
        }
        &-resend {
            color: #137466;
            margin-top: 8px;
            cursor: pointer;
            margin-bottom: 40px;
        }
    }
    .form-verification {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;
export default Style;
