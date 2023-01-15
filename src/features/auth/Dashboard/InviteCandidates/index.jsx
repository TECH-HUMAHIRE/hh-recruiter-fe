import { Card } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { MyTaskStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';

const InviteCandidates = () => {
    return (
        <MyTaskStyle>
            <Row>
                <Col xl={12}>
                    <Card className="card-section">
                        <EmptyJob />
                    </Card>
                </Col>
            </Row>
        </MyTaskStyle>
    );
};
export default InviteCandidates;
