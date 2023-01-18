import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import Cancel_invitation from '../../Assets/icon/Cancel_invitation.png';

const CancelInvitation = ({ onClose = () => {}, isOpen = true }) => {
    return (
        <Modal open={isOpen} footer={null} onCancel={onClose}>
            <div>
                <img
                    style={{ width: 150, margin: '0 auto 25px' }}
                    src={Cancel_invitation}
                    alt=""
                />
            </div>
            <h2 className="title">Cancel Invitation</h2>
            <div style={{ marginBottom: 30 }}>
                Are you sure you want to cancel the invitation?
            </div>
            <Row>
                <Col md={6}>
                    <Button block color="outline-primary" onClick={onClose}>
                        Cancel
                    </Button>
                </Col>
                <Col md={6}>
                    <Button block color="primary">
                        Cancel Invitation
                    </Button>
                </Col>
            </Row>
        </Modal>
    );
};
export default CancelInvitation;
