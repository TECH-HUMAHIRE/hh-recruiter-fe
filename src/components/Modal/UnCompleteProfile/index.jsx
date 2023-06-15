import { Modal } from 'antd';
import React from 'react';
import Button from '../../Button';
import { Col, Row } from '../../Grid';
import unComplete from '../../Assets/images/unComplete.png';
import { useGetMyCompanyQuery } from '../../../app/actions/companyApi';

const UnCompleteProfile = ({
    onClose = () => {},
    isOpen = false,
    onAction = () => {}
}) => {
    const { data } = useGetMyCompanyQuery({
        fakeAuthProvider: 'myCompany'
    });
    return (
        <Modal open={isOpen} footer={null} onCancel={onClose} width={720}>
            <div>
                <img
                    style={{ width: 150, margin: '0 auto 25px' }}
                    src={unComplete}
                    alt=""
                />
            </div>
            <h2 className="title text-center">
                Hi, {data?.data?.name}! Welcome to Humahire 🥳
            </h2>
            <div className="text-center" style={{ marginBottom: 30 }}>
                Complete your profile to immediately post job vacancies and get
                the best talents in Humahire in no time.
            </div>
            <Row>
                <Col md={6}>
                    <Button block color="outline-primary" onClick={onClose}>
                        I’ll do it later
                    </Button>
                </Col>
                <Col md={6}>
                    <Button block color="primary" onClick={() => onAction()}>
                        Complete now
                    </Button>
                </Col>
            </Row>
        </Modal>
    );
};
export default UnCompleteProfile;
