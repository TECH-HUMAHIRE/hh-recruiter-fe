import { Card } from 'antd';
import React from 'react';
import { Row, Col } from '../../../components/Grid';
import { Style } from './wallet.style';
import TabMenu from '../../../components/Tabs';
import CreditHistory from './partial/CreditHistory';
import TransactionHistory from './partial/TransactionHistory';
import WalletTop from './partial/WalletTop';
import WalletCredit from '../../../components/Modal/WalletCredit';
import WithdrawMethod from '../../../components/Modal/WithdrawMethod';
import EmailVerification from '../../../components/Modal/ModalHeader/EmailVerification';

const Wallet = () => {
    const [isWithdraw, setWithdraw] = React.useState(false);
    const [isWithdrawNext, setWithdrawNext] = React.useState(false);
    const [isVerifyEmail, setVerifyEmail] = React.useState(false);

    const onShowWithdraw = () => {
        setWithdraw(!isWithdraw);
        setWithdrawNext(false);
    };
    const onShowWithdrawNext = () => {
        setWithdraw(!isWithdraw);
        setWithdrawNext(!isWithdrawNext);
        setVerifyEmail(false);
    };
    const onShowVerify = () => {
        setWithdrawNext(!isWithdrawNext);
        setVerifyEmail(!isVerifyEmail);
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
            <WalletCredit
                open={isWithdraw}
                onClose={onShowWithdraw}
                onShowWithdrawNext={onShowWithdrawNext}
            />
            <WithdrawMethod
                isOpen={isWithdrawNext}
                onClose={onShowWithdrawNext}
                onShowVerify={onShowVerify}
            />
            <EmailVerification
                verificationText="SMS"
                isOpen={isVerifyEmail}
                onClose={onShowVerify}
            />
        </Style>
    );
};
export default Wallet;
