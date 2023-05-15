import React from 'react';
import { Col, Row } from '../../Grid';
import { monthName } from '../../Utils/variable';

const Education = ({ data = [] }) => {
    return (
        <div>
            <Row>
                {data &&
                    data.map((item, key) => {
                        return (
                            <Col
                                className={`referred-experience ${
                                    key === 0 ? 'current' : ''
                                }`}
                                key={key}
                                xl={12}>
                                <h2 className="title">{item.school_name} </h2>
                                <div className="referred-experience__job">
                                    {/* {item.city.name}, {item.country.name} */}
                                </div>
                                <div className="referred-experience__date">
                                    {monthName[item.start_month]}{' '}
                                    {item.start_year} •{' '}
                                    {monthName[item.end_month]} {item.end_year}
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
export default Education;
