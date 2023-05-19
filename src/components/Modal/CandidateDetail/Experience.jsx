import moment from 'moment';
import React from 'react';
import { Col, Row } from '../../Grid';

const Experience = ({ data = [] }) => {
    return (
        <div>
            <Row>
                {data.map((item, key) => {
                    var dateStringEnd = item.end_date;
                    var datePartsEnd = dateStringEnd.split('/');

                    // month is 0-based, that's why we need dataParts[1] - 1
                    var dateObjectEnd = new Date(
                        +datePartsEnd[2],
                        datePartsEnd[1] - 1,
                        +datePartsEnd[0]
                    );
                    var dateStringStart = item.start_date;
                    var datePartsStart = dateStringStart.split('/');

                    // month is 0-based, that's why we need dataParts[1] - 1
                    var dateObjectStart = new Date(
                        +datePartsStart[2],
                        datePartsStart[1] - 1,
                        +datePartsStart[0]
                    );
                    return (
                        <Col
                            className={`referred-experience ${
                                item.currently_work_here ? 'current' : ''
                            }`}
                            key={key}
                            xl={12}>
                            <h2 className="title">
                                {item.job_title}{' '}
                                {item.currently_work_here && (
                                    <span className="referred-experience__current">
                                        Current
                                    </span>
                                )}
                            </h2>
                            <div className="referred-experience__job">
                                at {item.company}
                            </div>
                            <div className="referred-experience__date">
                                {moment(dateObjectStart).format('DD MMM YYYY')}{' '}
                                • {moment(dateObjectEnd).format('DD MMM YYYY')}
                            </div>
                            <div className="referred-experience__location">
                                {item.city?.name}, {item.country?.name}
                            </div>
                            <div
                                className="referred-experience__desc"
                                dangerouslySetInnerHTML={{
                                    __html: item.description
                                }}></div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default Experience;
