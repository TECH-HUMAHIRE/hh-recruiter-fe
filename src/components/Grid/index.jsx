import styled from 'styled-components';
import { breakpoint } from '../Utils/breakpoints';
import colSize from '../Utils/colSize';
export const Container = styled.div`
    padding: 0 15px;
    width: 100%;
    margin: auto;
    @media (min-width: ${breakpoint.xs}px) {
        width: 100%;
    }
    @media (min-width: ${breakpoint.sm}px) {
        width: 540px;
    }
    @media (min-width: ${breakpoint.md}px) {
        width: 720px;
    }
    @media (min-width: ${breakpoint.lg}px) {
        width: 960px;
    }
    @media (min-width: ${breakpoint.xl}px) {
        width: 1140px;
    }
`;
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: ${(props) => props.justify || 'start'};
    position: relative;
    align-items: ${(props) => props.align || 'unset'};
`;
export const Col = styled.div`
    padding: 0 15px;
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    @media (min-width: ${breakpoint.xs}px) {
        width: ${(props) => colSize(props.xs)};
    }
    @media (min-width: ${breakpoint.sm}px) {
        width: ${(props) => colSize(props.sm || props.xs)};
    }
    @media (min-width: ${breakpoint.md}px) {
        width: ${(props) => colSize(props.md || props.sm || props.xs)};
    }
    @media (min-width: ${breakpoint.lg}px) {
        width: ${(props) =>
            colSize(props.lg || props.md || props.sm || props.xs)};
    }
    @media (min-width: ${breakpoint.xl}px) {
        width: ${(props) =>
            colSize(props.xl || props.lg || props.md || props.sm || props.xs)};
    }
`;
