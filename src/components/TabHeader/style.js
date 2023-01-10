import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Style = styled.div`
    margin-bottom: 25px;
    .job {
        position: relative;
        &-nav {
            display: flex;
            align-items: center;
        }
        &-status {
        }
    }
`;
export const MenuLink = styled(Link)`
    height: 75px;
    position: relative;
    display: flex;
    align-items: center;
    width: 16.66%;
    padding: 15px;
    justify-content: center;
    margin-right: 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    &:after {
        content: '';
        position: absolute;
        left: -1px;
        width: 2px;
        background-color: ${(props) => props.activecolor};
        top: 15px;
        bottom: 15px;
    }
    .job-status {
        &__total {
            font-weight: 700;
            width: 20px;
            font-size: 20px;
            color: #444444;
        }
        &__label {
            font-weight: 600;
            font-size: 14px;
            color: #666666;
            margin: 0 10px;
        }
        &__icon {
            padding: 8px 8px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            background-color: #fafafa;
        }
    }
    &.active {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid ${(props) => props.activecolor};
    }
`;
