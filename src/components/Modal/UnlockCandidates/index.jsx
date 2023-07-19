import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import LockIcon from '../../Assets/icon/Lock_background.png';
import WalletIcon from '../../Icon/Wallet';
import { color } from '../../Utils/variable';
import Style from './unlock-candidates.style';
import { useGetProfileQuery } from '../../../app/actions/profile';
import { formatNumber } from '../../Utils/formatMoney';

const UnlockCandidates = ({
    onClose = () => {},
    isOpen = true,
    unLockCandidate = () => {}
}) => {
    const { data } = useGetProfileQuery();
    return (
        <Style open={isOpen} footer={null} onCancel={onClose}>
            <div>
                <img
                    style={{ width: 100, margin: '0 auto 25px' }}
                    src={LockIcon}
                    alt=""
                />
            </div>
            <h2 className="title">Unlock all information?</h2>
            <div style={{ marginBottom: 30 }}>
                You will get all information related to this candidate, like
                candidate name & contacts. It will also move to saved tab.
            </div>
            <Row justify="end">
                <Col md={6}>
                    <Button block color="primary" onClick={unLockCandidate}>
                        Unlock 50 Pts
                    </Button>
                </Col>
            </Row>
            <div className="modal-bottom">
                <WalletIcon
                    width="22"
                    height="22"
                    color={color.employee.primary}
                />{' '}
                My Point:{' '}
                <b>
                    {formatNumber(
                        data?.data?.credit_amount - data?.data?.credit_used
                    )}{' '}
                    Pts
                </b>
            </div>
        </Style>
    );
};
export default UnlockCandidates;
