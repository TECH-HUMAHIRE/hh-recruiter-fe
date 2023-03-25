import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';

const SaveCandidate = ({ onClose = () => {}, isOpen = true }) => {
    return (
        <Modal open={isOpen} onCancel={onClose} footer={null}>
            <h2 className="title">Save this candidate?</h2>
            <div style={{ marginBottom: 20 }}>
                For saved candidates will be moved to the saved tab.
            </div>
            <Row>
                <Col xl={6}>
                    <Button onClick={onClose} color="outline-primary" block>
                        Cancel
                    </Button>
                </Col>
                <Col xl={6}>
                    <Button color="primary" block>
                        Save
                    </Button>
                </Col>
            </Row>
        </Modal>
    );
};
export default SaveCandidate;
