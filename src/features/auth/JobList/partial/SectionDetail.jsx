import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import starIcon from '../../../../components/Assets/icon/Star.png';
import BagIcon from '../../../../components/Assets/icon/Bag.png';
import dressIcon from '../../../../components/Assets/icon/Dress.png';
import placeIcon from '../../../../components/Assets/icon/place.png';
import chatIcon from '../../../../components/Assets/icon/Chat.png';
import exampleImage from '../../../../components/Assets/images/example.png';
import defaultImage from '../../../../components/Assets/images/defaultImage.png';
import { SectionDetailStyle } from '../job-list.style';
import Button from '../../../../components/Button';
import convertEmployeType from '../../../../components/Utils/convertEmployeType';
const SectionDetail = ({ data = {}, handleAddTask = () => {} }) => {
    return (
        <SectionDetailStyle>
            <div>
                <div>
                    <div className="job-header">
                        <img
                            src={data.company.photo_url || exampleImage}
                            alt=""
                        />
                        <div className="job-info job-header__info">
                            <div className="job-header__company">
                                <img
                                    src={data.company.logo_url || defaultImage}
                                    alt=""
                                    className="job-header__logo"
                                />
                                <div>
                                    <h3 className="title">{data.title}</h3>
                                    <div>{data.company.name}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-earn__price">
                            <span>Earn</span> {formatMoney(data.commission)}
                        </div>
                    </div>
                </div>
                <div className="job-info">
                    {data?.description !== '' && (
                        <div className="job-job__title">
                            {data?.description}
                        </div>
                    )}
                    <Row>
                        <Col sm={6}>
                            <div className="job-information__label">
                                Specialization
                            </div>
                            <div className="job-information__card">
                                <div className="job-information__icon">
                                    <img src={starIcon} alt="" />
                                </div>
                                <div>
                                    <div className="job-information__value">
                                        {data?.skills?.length > 0
                                            ? data?.skills.map((item, key) => {
                                                  return `${
                                                      item.name || item.label
                                                  }${
                                                      key + 1 ===
                                                      data?.skills_id.length
                                                          ? ''
                                                          : ', '
                                                  }`;
                                              })
                                            : '-'}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="job-information__label">
                                Employment type
                            </div>
                            <div className="job-information__card">
                                <div className="job-information__icon">
                                    <img src={BagIcon} alt="" />
                                </div>
                                <div>
                                    <div className="job-information__value">
                                        {convertEmployeType(
                                            data?.employment_type
                                        ) || '-'}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="job-information__label">
                                Type of work
                            </div>
                            <div className="job-information__card">
                                <div className="job-information__icon">
                                    <img src={placeIcon} alt="" />
                                </div>
                                <div>
                                    <div className="job-information__value">
                                        {data?.type_of_work || '-'}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="job-information__label">
                                Min Education
                            </div>
                            <div className="job-information__card">
                                <div className="job-information__icon">
                                    <img src={dressIcon} alt="" />
                                </div>
                                <div>
                                    <div className="job-information__value">
                                        {data?.min_education || '-'}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="job-information__label">
                                Language
                            </div>
                            <div className="job-information__card">
                                <div className="job-information__icon">
                                    <img src={chatIcon} alt="" />
                                </div>
                                <div>
                                    <div className="job-information__value">
                                        {data?.languages?.length > 0
                                            ? data?.languages.map(
                                                  (item, key) => {
                                                      return (
                                                          item +
                                                          (key + 1 ===
                                                          data?.languages.length
                                                              ? ''
                                                              : ', ')
                                                      );
                                                  }
                                              )
                                            : '-'}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="hr"></div>
                </div>
                <div className="job-info">
                    <Row>
                        <Col xl={12}>
                            <label htmlFor="" className="sub-title">
                                Location
                            </label>
                            <div className="job-overview__desc">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data?.work_location || '-'
                                    }}
                                />
                                <div>
                                    {`${
                                        data?.sub_district?.district?.city
                                            ?.province?.country?.name
                                            ? data?.sub_district?.district?.city
                                                  ?.province?.country?.name +
                                              ', '
                                            : ''
                                    }`}
                                    {`${
                                        data?.sub_district?.district?.city
                                            ?.province?.name
                                            ? data?.sub_district?.district?.city
                                                  ?.province?.name + ', '
                                            : ''
                                    }`}
                                    {`${
                                        data?.sub_district?.district?.city?.name
                                            ? data?.sub_district?.district?.city
                                                  ?.name + ', '
                                            : ''
                                    }`}
                                    {data?.sub_district?.postal_code}
                                </div>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <label htmlFor="" className="sub-title">
                                Salary
                            </label>
                            <div>
                                {formatMoney(data?.rate_start || 0)} -{' '}
                                {formatMoney(data?.rate_end || 0)}
                            </div>
                        </Col>
                    </Row>
                    <div className="hr"></div>
                </div>
                <div className="job-info">
                    <Row>
                        <Col xl={12}>
                            <label htmlFor="" className="sub-title">
                                Job requirement
                            </label>
                            <div
                                className="job-overview__desc"
                                dangerouslySetInnerHTML={{
                                    __html: data?.job_requirements || '-'
                                }}
                            />
                        </Col>
                    </Row>
                    <div className="hr"></div>
                </div>
                <div className="job-info">
                    <Row>
                        <Col xl={12}>
                            <label htmlFor="" className="sub-title">
                                Responsibility
                            </label>
                            <div
                                className="job-overview__desc"
                                dangerouslySetInnerHTML={{
                                    __html: data?.responsibilities || '-'
                                }}
                            />
                        </Col>
                    </Row>
                    <div className="hr"></div>
                </div>
                <div className="job-info">
                    <Row>
                        <Col xl={12}>
                            <label htmlFor="" className="sub-title">
                                Benefit
                            </label>
                            <div>{data?.benefit || '-'}</div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="footer-action">
                <Button color="primary" onClick={() => handleAddTask(data.id)}>
                    Add to My Task
                </Button>
            </div>
        </SectionDetailStyle>
    );
};
export default SectionDetail;
