import { format } from 'prettier';
import React from 'react';
import Button from '../../../../components/Button';
import { Col, Row } from '../../../../components/Grid';
import WalletIcon from '../../../../components/Icon/Wallet';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import { color } from '../../../../components/Utils/variable';

const WalletTop = ({ onShowWithdraw = () => {} }) => {
    return (
        <Row align="center">
            <Col md={6} style={{ borderRight: '1px solid #E8E8E8' }}>
                <div className="wallet-top">
                    <div className="wallet-icon">
                        <WalletIcon color={color.employee.primary} />
                    </div>
                    <div className="wallet-top__info">
                        <div>All balance</div>
                        <h4>
                            <b>{formatMoney(2000000)}</b>
                        </h4>
                        <div className="wallet-top__info-note">
                            You can only withdraw <b>90%</b> of the total
                            balance
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="wallet-top wallet-right">
                    <div className="wallet-top">
                        <div className="wallet-icon">
                            <WalletIcon color={color.employee.primary} />
                        </div>
                        <div className="wallet-top__info">
                            <div>All balance</div>
                            <h4>
                                <b>{formatMoney(2000000)}</b>
                            </h4>
                        </div>
                    </div>
                    <div>
                        <Button color="primary" onClick={onShowWithdraw}>
                            Withdraw credit
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
export default WalletTop;
