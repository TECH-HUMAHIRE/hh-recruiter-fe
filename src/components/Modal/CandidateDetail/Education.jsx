import React from 'react';
import { Col, Row } from '../../Grid';

const Education = ({ data = [] }) => {
    return (
        <div>
            <Row>
                {data.map((item, key) => {
                    return (
                        <Col
                            className={`referred-experience ${
                                key === 0 ? 'current' : ''
                            }`}
                            key={key}
                            xl={12}>
                            <h2 className="title">
                                {item.name}{' '}
                                {key === 0 && (
                                    <span className="referred-experience__current">
                                        Current
                                    </span>
                                )}
                            </h2>
                            <div className="referred-experience__job">
                                {item.job_location}
                            </div>
                            <div className="referred-experience__date">
                                {item.date} • {item.last}
                            </div>
                            <div className="referred-experience__location">
                                {item.location}
                            </div>
                            <div className="referred-experience__desc">
                                {item.desc}
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default Education;
