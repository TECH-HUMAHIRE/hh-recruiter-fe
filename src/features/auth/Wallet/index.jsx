import { Card, DatePicker, message } from 'antd';
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
import CalendarIcon from '../../../components/Icon/CalendarIcon';
import moment from 'moment';

const { RangePicker } = DatePicker;
const Wallet = () => {
    const [messageApi, contextHolder] = message.useMessage();
    // STATE
    const { refetch } = useGetProfileQuery({
        fakeAuthProvider: 'myCompany'
    });
    const [isWithdraw, setWithdraw] = React.useState(false);
    const [dateParams, setDateParams] = React.useState([]);
    const [dateRangeValue, setDateRangeValue] = React.useState([]);
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
    const onChangeFilterDate = (dates) => {
        if (dates) {
            setDateParams([
                moment(dates[0]).format('YYYYMMDD'),
                moment(dates[1]).format('YYYYMMDD')
            ]);
            setDateRangeValue(dates);
        } else {
            setDateParams([]);
            setDateRangeValue([]);
        }
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
            <div className="section-tab">
                <TabMenu
                    onChange={() => {
                        setDateRangeValue([]);
                        setDateParams([]);
                    }}
                    item={[
                        {
                            label: `Credit history`,
                            key: '1',
                            children: <CreditHistory dateParams={dateParams} />
                        },
                        {
                            label: `Transaction history`,
                            key: '2',
                            children: (
                                <TransactionHistory
                                    dateParams={dateParams}
                                    onShowDetail={onShowDetail}
                                />
                            )
                        }
                    ]}
                />
                <div className="section-tab__datepicker">
                    <RangePicker
                        suffixIcon={<CalendarIcon />}
                        size="large"
                        value={dateRangeValue}
                        style={{ width: 400 }}
                        format={'YYYY-MM-DD'}
                        onChange={(dates, dateStrings) =>
                            onChangeFilterDate(dates)
                        }
                    />
                </div>
            </div>
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
