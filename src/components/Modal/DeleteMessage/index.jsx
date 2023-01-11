import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import DeleteJobIcon from '../../Assets/icon/delete_job.png';

const DeleteMessage = ({ onClose = () => {}, isOpen = true }) => {
    return (
        <Modal open={isOpen} footer={null} onCancel={onClose}>
            <div>
                <img
                    style={{ width: 100, margin: '0 auto 25px' }}
                    src={DeleteJobIcon}
                    alt=""
                />
            </div>
            <h2 className="title">Delete message</h2>
            <div style={{ marginBottom: 30 }}>
                Are you sure to delete this message?
            </div>
            <Row>
                <Col md={6}>
                    <Button block color="outline-primary" onClick={onClose}>
                        Cancel
                    </Button>
                </Col>
                <Col md={6}>
                    <Button block color="primary">
                        Delete
                    </Button>
                </Col>
            </Row>
        </Modal>
    );
};
export default DeleteMessage;
