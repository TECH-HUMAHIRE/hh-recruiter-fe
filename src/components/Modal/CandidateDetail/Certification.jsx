import React from 'react';
import { Row, Col } from '../../Grid';
import { monthName } from '../../Utils/variable';
const Certification = ({ data }) => {
    return (
        <div>
            <div>
                <Row>
                    {data?.map((item, key) => {
                        return (
                            <Col key={key} xl={12}>
                                <div className="referred-certification">
                                    <div className="referred-certification__info">
                                        <div className="referred-header">
                                            <div
                                                style={{
                                                    marginBottom: 10
                                                }}>
                                                <h4
                                                    className="title"
                                                    style={{
                                                        margin: 0,
                                                        fontSize: 18
                                                    }}>
                                                    {item.certification_name}
                                                </h4>
                                                <div>{item.organization}</div>
                                            </div>
                                        </div>

                                        <div className="referred-experience__date">
                                            {monthName[item.issue_month - 1]}{' '}
                                            {item.issue_year} •{' '}
                                            {monthName[item.expire_month - 1]}{' '}
                                            {item.expire_year}
                                        </div>
                                        <div className="referred-experience__location">
                                            Credential ID {item.credential_id} •{' '}
                                            <a
                                                href={item.credential_url}
                                                target="_blank">
                                                Show Credential
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};
export default Certification;
