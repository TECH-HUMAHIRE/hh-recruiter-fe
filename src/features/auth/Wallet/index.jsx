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
import { useGetProfileQuery } from '../../../app/actions/profile';

const Wallet = () => {
    // STATE
    const [isWithdraw, setWithdraw] = React.useState(false);
    const [valueForm, setFalueForm] = React.useState(null);
    const [bankId, setBankId] = React.useState(null);
    const [isWithdrawNext, setWithdrawNext] = React.useState(false);
    const [isVerifyEmail, setVerifyEmail] = React.useState(false);
    // fetch api
    const { data } = useGetProfileQuery({
        fakeAuthProvider: 'myCompany'
    });

    // FUNCTION
    const onShowWithdraw = () => {
        setWithdraw(!isWithdraw);
        setWithdrawNext(false);
    };
    const onChooseAccount = (e) => {
        setBankId(e.target.value);
    };
    const onShowWithdrawNext = (values) => {
        // console.log(values);
        setFalueForm(values);
        setWithdraw(!isWithdraw);
        setWithdrawNext(!isWithdrawNext);
        setVerifyEmail(false);
    };
    const onShowVerify = () => {
        let data = {
            amount: valueForm.withdraw_nominal,
            account_number_id: bankId
        };
        console.log(data);
        // HIDE TEMPORARY VERIFICATION SMS
        // setWithdrawNext(!isWithdrawNext);
        // setVerifyEmail(!isVerifyEmail);
    };
    return (
        <Style>
            <h2 className="title">Wallet</h2>
            <Card className="wallet-header">
                <Row>
                    <Col xl={12}>
                        <WalletTop
                            data={data?.data}
                            onShowWithdraw={onShowWithdraw}
                        />
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
                data={data?.data}
                open={isWithdraw}
                onClose={onShowWithdraw}
                onShowWithdrawNext={onShowWithdrawNext}
            />
            <WithdrawMethod
                onChooseAccount={onChooseAccount}
                valueForm={valueForm}
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
