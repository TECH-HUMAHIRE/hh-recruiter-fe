import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';

const RemoveCandidate = ({ onClose = () => {}, isOpen = true }) => {
    return (
        <Modal open={isOpen} onCancel={onClose} footer={null}>
            <h2 className="title">Remove this candidate?</h2>
            <div style={{ marginBottom: 20 }}>
                Candidate will be removed from save tab
            </div>
            <Row>
                <Col xl={6}>
                    <Button onClick={onClose} color="outline-primary" block>
                        Cancel
                    </Button>
                </Col>
                <Col xl={6}>
                    <Button color="primary" block>
                        Remove
                    </Button>
                </Col>
            </Row>
        </Modal>
    );
};
export default RemoveCandidate;
