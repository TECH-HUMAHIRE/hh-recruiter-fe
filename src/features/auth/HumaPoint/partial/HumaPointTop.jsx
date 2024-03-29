import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import React from 'react';
import { useGetProfileQuery } from '../../../../app/actions/profile';
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
    const { data, refetch } = useGetProfileQuery();
    React.useEffect(() => {
        refetch();
    }, []);
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
                            <b>
                                {formatNumber(
                                    data?.data?.credit_amount -
                                        (data?.data?.credit_used || 0)
                                )}{' '}
                                pts
                            </b>
                        </h4>
                        <div className="humapoint-top__info-note text-danger">
                            <b>
                                {formatNumber(
                                    data?.data?.credit_amount -
                                        (data?.data?.credit_used || 0)
                                )}
                            </b>{' '}
                            Point expired on {data?.data?.credit_expired_at ? moment(data?.data?.credit_expired_at).format("DD MMM YYYY") : "-"}
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
