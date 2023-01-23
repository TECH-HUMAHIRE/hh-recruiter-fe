import { Card, Progress } from 'antd';
import React from 'react';
import { Row, Col } from '../../../components/Grid';
import Button from '../../../components/Button';
import { Style } from './wallet.style';
import TabMenu from '../../../components/Tabs';
import CreditHistory from './partial/CreditHistory';
import TransactionHistory from './partial/TransactionHistory';
import WalletTop from './partial/WalletTop';
import WalletCredit from '../../../components/Modal/WalletCredit';

const Wallet = () => {
    const [isWithdraw, setWithdraw] = React.useState(false);

    const onShowWithdraw = () => {
        setWithdraw(!isWithdraw);
    };
    return (
        <Style>
            <h2 className="title">Wallet</h2>
            <Card className="wallet-header">
                <Row>
                    <Col xl={12}>
                        <WalletTop onShowWithdraw={onShowWithdraw} />
                    </Col>
                </Row>
            </Card>
            <TabMenu
                item={[
                    {
                        label: `Credit history`,
                        key: '1',
                        children: <CreditHistory />
                    },
                    {
                        label: `Transaction history`,
                        key: '2',
                        children: <TransactionHistory />
                    }
                ]}
            />
            <WalletCredit open={isWithdraw} onClose={onShowWithdraw} />
        </Style>
    );
};
export default Wallet;
