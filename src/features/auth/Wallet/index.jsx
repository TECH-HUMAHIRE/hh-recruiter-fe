import { Card, message } from 'antd';
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
import {
    usePostWithDrawMutation,
    walletApi
} from '../../../app/actions/walletApi';
import DetailTransasction from '../../../components/Modal/DetailTransasction';

const Wallet = () => {
    const [messageApi, contextHolder] = message.useMessage();
    // STATE
    const { refetch } = useGetProfileQuery({
        fakeAuthProvider: 'myCompany'
    });
    const [isWithdraw, setWithdraw] = React.useState(false);
    const [isDetail, setDetail] = React.useState(false);
    const [transactionDetail, setTransactionDetail] = React.useState(null);
    const [valueForm, setFalueForm] = React.useState(null);
    const [bankId, setBankId] = React.useState(null);
    const [isWithdrawNext, setWithdrawNext] = React.useState(false);
    const [isVerifyEmail, setVerifyEmail] = React.useState(false);
    // fetch api
    const { data } = useGetProfileQuery({
        fakeAuthProvider: 'myCompany'
    });
    const [getTransactionDetail, response] =
        walletApi.endpoints.getTransactionDetail.useLazyQuery();
    const [
        postWithDraw,
        { isSuccess, reset, data: responsePostWithDraw, isLoading }
    ] = usePostWithDrawMutation({
        fixedCacheKey: 'postWithDraw'
    });

    // FUNCTION
    const onShowWithdraw = () => {
        setWithdraw(!isWithdraw);
        setWithdrawNext(false);
    };
    const onShowDetail = (data) => {
        setDetail(!isDetail);
        if (!isDetail) {
            setTransactionDetail(data);
        }
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
        postWithDraw(data);
    };
    React.useEffect(() => {
        if (isSuccess) {
            setWithdrawNext(false);
            messageApi.open({
                type: 'success',
                content: responsePostWithDraw.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            refetch();
            reset();
        }
    }, [isSuccess]);
    return (
        <Style>
            {contextHolder}
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
                        children: (
                            <TransactionHistory onShowDetail={onShowDetail} />
                        )
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
            <DetailTransasction
                isOpen={isDetail}
                onClose={onShowDetail}
                data={transactionDetail}
            />
        </Style>
    );
};
export default Wallet;
