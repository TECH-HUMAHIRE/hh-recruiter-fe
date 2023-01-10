import styled from 'styled-components';
import { color, width } from '../Utils/variable';

const SidebarStyle = styled.aside`
    width: ${(props) => (props.collapsed ? `80px` : `${width.sidebar}px`)};
    border-right: 1px solid ${color.employee.borderColor};
    position: fixed;
    left: 0;
    height: 100%;
    transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    padding-top: 90px;
    .btn-collapsed {
        margin-left: ${(props) => (props.collapsed ? `19px` : `33px`)};
        padding-left: 15px;
        padding-right: 15px;
    }
    .ant-menu {
        padding: 0 12px 0 20px;
        &-item {
            padding: 0 !important;
            border-radius: 8px;
            a {
                font-weight: 600;
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 24px;
                transition: unset;
                span {
                    transition: unset;
                }
                &.active {
                    background-color: ${color.employee.primary};
                    color: #fff;
                    path {
                        fill: #fff !important;
                    }
                }
            }
            &-selected {
                background-color: ${color.employee.primary} !important;
                &:after {
                    display: none;
                }
                .nav {
                    &-link {
                        color: #fff !important;
                    }
                }
            }
            &:hover {
                color: inherit;
            }
        }
        &-inline-collapsed {
            .anticon {
                vertical-align: -0.4em;
            }
            .ant-menu-item {
                padding: 0 12px;
            }
        }
        &.ant-menu-inline-collapsed {
            a {
                padding: 0px;
            }
            .anticon {
                padding: 6px 6px 6px 11px;
            }
        }
    }
    .nav-link {
        &:hover {
            color: inherit;
        }
    }
`;
export default SidebarStyle;
