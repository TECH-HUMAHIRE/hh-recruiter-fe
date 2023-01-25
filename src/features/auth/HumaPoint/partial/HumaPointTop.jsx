import { CalendarOutlined } from '@ant-design/icons';
import React from 'react';
import Button from '../../../../components/Button';
import { Col, Row } from '../../../../components/Grid';
import CalendarIcon from '../../../../components/Icon/CalendarIcon';
import StarIcon from '../../../../components/Icon/Star';
import WalletIcon from '../../../../components/Icon/Wallet';
import {
    formatMoney,
    formatNumber
} from '../../../../components/Utils/formatMoney';
import { color } from '../../../../components/Utils/variable';

const HumaPointTop = ({ onShowWithdraw = () => {} }) => {
    return (
        <Row align="center">
            <Col md={6} style={{ borderRight: '1px solid #E8E8E8' }}>
                <div className="humapoint-top">
                    <div className="humapoint-icon">
                        <StarIcon color={color.employee.primary} />
                    </div>
                    <div className="humapoint-top__info">
                        <div>My Credit</div>
                        <h4>
                            <b>{formatNumber(5000)} pts</b>
                        </h4>
                        <div className="humapoint-top__info-note text-danger">
                            <b>5000</b> Point expired on 12 Feb 2022
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={3} style={{ borderRight: '1px solid #E8E8E8' }}>
                <div className="humapoint-top humapoint-right">
                    <div className="humapoint-top">
                        <div className="humapoint-icon">
                            <CalendarIcon color={color.employee.primary} />
                        </div>
                        <div className="humapoint-top__info">
                            <div>Earned This Week</div>
                            <h4>
                                <b>{formatNumber(5000)} pts</b>
                            </h4>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="humapoint-top humapoint-right">
                    <div className="humapoint-top">
                        <div className="humapoint-icon">
                            <CalendarIcon color={color.employee.primary} />
                        </div>
                        <div className="humapoint-top__info">
                            <div>Earned This Month</div>
                            <h4>
                                <b>{formatNumber(5000)} pts</b>
                            </h4>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
export default HumaPointTop;
