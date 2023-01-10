import styled from 'styled-components';
import { Button } from 'antd';
import { color } from '../Utils/variable';

const Style = styled(Button)`
    height: auto;
    color: ${(props) =>
        props.type === 'primary'
            ? '#fff'
            : props.type === 'outline-primary'
            ? color.employee.primary
            : '#fff'};
    background: ${(props) =>
        props.type === 'primary'
            ? color.employee.primary
            : props.type === 'outline-primary'
            ? '#fff'
            : props.type};
    border: ${(props) =>
        props.type === 'primary'
            ? `1px solid ${color.employee.primary}`
            : props.type === 'outline-primary'
            ? `1px solid  ${color.employee.primary}`
            : `1px solid  ${props.type}`};
    font-weight: ${(props) => props.weight || 500};
    transform: translateY(0px);
    transition: all 0.25s ease;
    border-radius: 8px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: ${(props) => (props.size ? props.size + 'px' : '14px')};
    &:hover {
        color: ${(props) =>
            props.type === 'primary'
                ? '#fff'
                : props.type === 'outline-primary'
                ? color.employee.primary
                : '#fff'};
        background: ${(props) =>
            props.type === 'primary'
                ? color.employee.primary
                : props.type === 'outline-primary'
                ? '#fff'
                : props.type};
        border: ${(props) =>
            props.type === 'primary'
                ? `1px solid ${color.employee.primary}`
                : props.type === 'outline-primary'
                ? `1px solid ${color.employee.primary}`
                : `1px solid  ${props.type}`};
        opacity: 0.8;
        transform: translateY(-1px);
    }
    &:disabled {
        color: #aaaaaa;
        background: #e8e8e8;
        border: 1px solid #e8e8e8;
        font-weight: 700;
    }
    &:focus {
        color: ${(props) =>
            props.type === 'primary'
                ? '#fff'
                : props.type === 'outline-primary'
                ? color.employee.primary
                : '#fff'};
        background: ${(props) =>
            props.type === 'primary'
                ? color.employee.primary
                : props.type === 'outline-primary'
                ? '#fff'
                : props.type};
        border: ${(props) =>
            props.type === 'primary'
                ? `1px solid ${color.employee.primary}`
                : props.type === 'outline-primary'
                ? `1px solid  ${color.employee.primary}`
                : `1px solid  ${props.type}`};
        opacity: 0.8;
        transform: translateY(-1px);
    }
`;
export default Style;
