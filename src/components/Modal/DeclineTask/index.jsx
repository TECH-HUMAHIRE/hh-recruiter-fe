import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';

const DeclineTask = ({
    isOpen = false,
    onClose = () => {},
    data = {},
    onDeleteTask = () => {}
}) => {
    return (
        <Modal open={isOpen} footer={null} onCancel={onClose} width={430}>
            <h2 className="title">Decline task?</h2>
            <div style={{ color: '#666666', marginBottom: 30, fontSize: 16 }}>
                By declining task, the task will dissapear from your task list.
            </div>
            <div>
                <Row justify="space-between">
                    <Col md={6}>
                        <Button color="outline-primary" block onClick={onClose}>
                            Cancel
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Button color="primary" block onClick={onDeleteTask}>
                            Decline Task
                        </Button>
                    </Col>
                </Row>
            </div>
        </Modal>
    );
};
export default DeclineTask;
