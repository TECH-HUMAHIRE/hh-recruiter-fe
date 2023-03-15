import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import LockIcon from '../../Assets/icon/Lock_background.png';
import WalletIcon from '../../Icon/Wallet';
import { color } from '../../Utils/variable';
import Style from './unlock-candidates.style';

const UnlockCandidates = ({ onClose = () => {}, isOpen = true }) => {
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
                    <Button block color="primary">
                        Unlock 2.000 Pts
                    </Button>
                </Col>
            </Row>
            <div className="modal-bottom">
                <WalletIcon
                    width="22"
                    height="22"
                    color={color.employee.primary}
                />{' '}
                My Point: <b>50.000 Pts</b>
            </div>
        </Style>
    );
};
export default UnlockCandidates;
