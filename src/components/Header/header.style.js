import styled from 'styled-components';
import { color } from '../Utils/variable';

const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1060;
    padding: 14px 20px;
    display: block;
    width: 100%;
    box-shadow: 1px 4px 10px 2px rgba(0, 0, 0, 0.1);
    border-top: 2px solid ${color.employee.primary};
    background-color: #fff;
    .logo {
        width: 125px;
    }
    .header {
        &-user {
            text-align: right;
            display: flex;
            justify-content: end;
            align-items: center;
            &__info {
                margin-right: 16px;
                width: max-content;

                &-name {
                    font-weight: 600;
                    font-size: 16px;
                }
                &-employee {
                    font-weight: 400;
                    font-size: 12px;
                    text-align: left;
                }
            }
            &__image {
                width: 40px;
                cursor: pointer;
            }
        }
    }
`;
export default HeaderStyle;
