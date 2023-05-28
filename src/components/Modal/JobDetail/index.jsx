import React from 'react';
// import dummyCompany from '../../Assets/icon/dummyCompany.png';
import Button from '../../Button';
// import warningIcon from '../../Assets/icon/warning.png';
import { Col, Row } from '../../Grid';
import { formatMoney } from '../../Utils/formatMoney';
import starIcon from '../../Assets/icon/Star.png';
import BagIcon from '../../Assets/icon/Bag.png';
import dressIcon from '../../Assets/icon/Dress.png';
import placeIcon from '../../Assets/icon/place.png';
import chatIcon from '../../Assets/icon/Chat.png';
import JobDetailStyle from './job-detail.style.';
import exampleImage from '../../Assets/images/example.png';
import defaultImage from '../../Assets/images/defaultImage.png';
import convertEmployeType from '../../Utils/convertEmployeType';
import { Image, Skeleton } from 'antd';
const JobDetail = ({
    isOpen = false,
    onClose = () => {},
    data = {},
    loading = true
}) => {
    return (
        <JobDetailStyle
            title={'Job Detail'}
            open={isOpen}
            footer={null}
            width={1000}
            onCancel={onClose}>
            <div>
                <div className="job-header">
                    <Image
                        preview={false}
                        loading={loading}
                        src={data?.company?.photo_url || defaultImage}
                        alt=""
                        className="job-banner"
                    />
                    <div className="job-info job-header__info">
                        <div className="job-header__company">
                            <Image
                                preview={false}
                                loading={loading}
                                src={data?.company?.logo_url || defaultImage}
                                alt=""
                                className="job-header__logo"
                            />
                            <div>
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
                                    <h3 className="title">{data?.title}</h3>
                                )}
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
                                    <div>{data?.company?.name}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job-info">
                {data?.description !== '' && (
                    <div className="job-job__title">{data?.description}</div>
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
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
                                    <div className="job-information__value">
                                        {data?.specialization?.length > 0
                                            ? data?.specialization.map(
                                                  (item, key) => {
                                                      return `${item}${
                                                          key + 1 ===
                                                          data?.specialization
                                                              .length
                                                              ? ''
                                                              : ', '
                                                      }`;
                                                  }
                                              )
                                            : '-'}
                                    </div>
                                )}
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
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
                                    <div className="job-information__value">
                                        {convertEmployeType(
                                            data?.employment_type
                                        ) || '-'}
                                    </div>
                                )}
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
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
                                    <div className="job-information__value">
                                        {data?.type_of_work || '-'}
                                    </div>
                                )}
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
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
                                    <div className="job-information__value">
                                        {data?.min_education || '-'}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="job-information__label">Language</div>
                        <div className="job-information__card">
                            <div className="job-information__icon">
                                <img src={chatIcon} alt="" />
                            </div>
                            <div>
                                {loading ? (
                                    <Skeleton.Input />
                                ) : (
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
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="job-info">
                <Row>
                    <Col xl={12}>
                        <label htmlFor="" className="sub-title">
                            Location
                        </label>
                        <div className="job-overview__desc">
                            {loading ? (
                                <Skeleton.Input />
                            ) : (
                                <React.Fragment>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data?.work_location || '-'
                                        }}
                                    />
                                    <div>
                                        {`${
                                            data?.sub_district?.district?.city
                                                ?.province?.country?.name
                                                ? data?.sub_district?.district
                                                      ?.city?.province?.country
                                                      ?.name + ', '
                                                : ''
                                        }`}
                                        {`${
                                            data?.sub_district?.district?.city
                                                ?.province?.name
                                                ? data?.sub_district?.district
                                                      ?.city?.province?.name +
                                                  ', '
                                                : ''
                                        }`}
                                        {`${
                                            data?.sub_district?.district?.city
                                                ?.name
                                                ? data?.sub_district?.district
                                                      ?.city?.name + ', '
                                                : ''
                                        }`}
                                        {data?.sub_district?.postal_code}
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </Col>
                    <Col xl={12}>
                        <label htmlFor="" className="sub-title">
                            Salary
                        </label>
                        {loading ? (
                            <Skeleton.Input />
                        ) : (
                            <div>
                                {formatMoney(data?.rate_start || 0)} -{' '}
                                {formatMoney(data?.rate_end || 0)}
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="job-info">
                <Row>
                    <Col xl={12}>
                        <label htmlFor="" className="sub-title">
                            Job requirement
                        </label>
                        {loading ? (
                            <Skeleton.Input />
                        ) : (
                            <div
                                className="job-overview__desc"
                                dangerouslySetInnerHTML={{
                                    __html: data?.job_requirements || '-'
                                }}
                            />
                        )}
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="job-info">
                <Row>
                    <Col xl={12}>
                        <label htmlFor="" className="sub-title">
                            Responsibility
                        </label>
                        {loading ? (
                            <Skeleton.Input />
                        ) : (
                            <div
                                className="job-overview__desc"
                                dangerouslySetInnerHTML={{
                                    __html: data?.responsibilities || '-'
                                }}
                            />
                        )}
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="job-info">
                <Row>
                    <Col xl={12}>
                        <label htmlFor="" className="sub-title">
                            Benefit
                        </label>
                        {loading ? (
                            <Skeleton.Input />
                        ) : (
                            <div>{data?.benefit || '-'}</div>
                        )}
                    </Col>
                </Row>
            </div>
            <div className="job-info">
                <Row>
                    <Col xl={12}>
                        <div className="text-right">
                            <Button
                                onClick={onClose}
                                color="outline-primary"
                                className="btn btn-cancel">
                                <span>Close</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </JobDetailStyle>
    );
};
export default JobDetail;
