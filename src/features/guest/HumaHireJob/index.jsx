import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetHumaHireJobQuery } from '../../../app/actions/userAuth';
import Button from '../../../components/Button';
import { Col, Container, Row } from '../../../components/Grid';
import { formatMoney } from '../../../components/Utils/formatMoney';
import BagIcon from '../../../components/Assets/icon/Bag.png';
import dressIcon from '../../../components/Assets/icon/Dress.png';
import placeIcon from '../../../components/Assets/icon/place.png';
import chatIcon from '../../../components/Assets/icon/Chat.png';
import starIcon from '../../../components/Assets/icon/Star.png';
import empty from '../../../components/Assets/images/emptyJob.png';
import HumaHireJobStyle from './huma-hire-job.style';
import convertEmployeType from '../../../components/Utils/convertEmployeType';
import Logo from '../../../components/Assets/images/logo.png';

const HumaHireJob = () => {
    const [paramsUrl, _] = useSearchParams();
    const { data, isSuccess, isError } = useGetHumaHireJobQuery(
        paramsUrl.get('ref')
    );
    return (
        <HumaHireJobStyle>
            <Container>
                <img
                    className="logo"
                    src={Logo}
                    alt="Huma Hire"
                    style={{ width: 250 }}
                />
                {isSuccess && (
                    <React.Fragment>
                        <div className="section">
                            <React.Fragment>
                                <div>
                                    <div className="job-header">
                                        <img
                                            src={
                                                data.data.company.photo_url ||
                                                exampleImage
                                            }
                                            alt=""
                                        />
                                        <div className="job-info job-header__info">
                                            <div className="job-header__company">
                                                <img
                                                    src={
                                                        data.data.company
                                                            .logo_url ||
                                                        defaultImage
                                                    }
                                                    alt=""
                                                    className="job-header__logo"
                                                />
                                                <div>
                                                    <h3 className="title">
                                                        {data.data.title}
                                                    </h3>
                                                    <div>
                                                        {data.data.company.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-info">
                                    {data?.data.description !== '' && (
                                        <div className="job-job__title">
                                            {data?.data.description}
                                        </div>
                                    )}
                                    <Row>
                                        <Col sm={6}>
                                            <div className="job-information__label">
                                                Specialization
                                            </div>
                                            <div className="job-information__card">
                                                <div className="job-information__icon">
                                                    <img
                                                        src={starIcon}
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <div className="job-information__value">
                                                        {data?.data
                                                            .specialization
                                                            ?.length > 0
                                                            ? data?.data.specialization.map(
                                                                  (
                                                                      item,
                                                                      key
                                                                  ) => {
                                                                      return `${item}${
                                                                          key +
                                                                              1 ===
                                                                          data
                                                                              ?.data
                                                                              .specialization
                                                                              .length
                                                                              ? ''
                                                                              : ', '
                                                                      }`;
                                                                  }
                                                              )
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
                                                            data?.data
                                                                .employment_type
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
                                                    <img
                                                        src={placeIcon}
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <div className="job-information__value">
                                                        {data?.data
                                                            .type_of_work ||
                                                            '-'}
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
                                                    <img
                                                        src={dressIcon}
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <div className="job-information__value">
                                                        {data?.data
                                                            .min_education ||
                                                            '-'}
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
                                                    <img
                                                        src={chatIcon}
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <div className="job-information__value">
                                                        {data?.data.languages
                                                            ?.length > 0
                                                            ? data?.data.languages.map(
                                                                  (
                                                                      item,
                                                                      key
                                                                  ) => {
                                                                      return (
                                                                          item +
                                                                          (key +
                                                                              1 ===
                                                                          data
                                                                              ?.data
                                                                              .languages
                                                                              .length
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
                                            <label
                                                htmlFor=""
                                                className="sub-title">
                                                Location
                                            </label>
                                            <div className="job-overview__desc">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            data?.work_location ||
                                                            '-'
                                                    }}
                                                />
                                                <div>
                                                    {`${
                                                        data?.sub_district
                                                            ?.district?.city
                                                            ?.province?.country
                                                            ?.name
                                                            ? data?.sub_district
                                                                  ?.district
                                                                  ?.city
                                                                  ?.province
                                                                  ?.country
                                                                  ?.name + ', '
                                                            : ''
                                                    }`}
                                                    {`${
                                                        data?.sub_district
                                                            ?.district?.city
                                                            ?.province?.name
                                                            ? data?.sub_district
                                                                  ?.district
                                                                  ?.city
                                                                  ?.province
                                                                  ?.name + ', '
                                                            : ''
                                                    }`}
                                                    {`${
                                                        data?.sub_district
                                                            ?.district?.city
                                                            ?.name
                                                            ? data?.sub_district
                                                                  ?.district
                                                                  ?.city?.name +
                                                              ', '
                                                            : ''
                                                    }`}
                                                    {
                                                        data?.sub_district
                                                            ?.postal_code
                                                    }
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={12}>
                                            <label
                                                htmlFor=""
                                                className="sub-title">
                                                Salary
                                            </label>
                                            <div>
                                                {formatMoney(
                                                    data?.rate_start || 0
                                                )}{' '}
                                                -{' '}
                                                {formatMoney(
                                                    data?.rate_end || 0
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="hr"></div>
                                </div>
                                <div className="job-info">
                                    <Row>
                                        <Col xl={12}>
                                            <label
                                                htmlFor=""
                                                className="sub-title">
                                                Job requirement
                                            </label>
                                            <div
                                                className="job-overview__desc"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        data?.job_requirements ||
                                                        '-'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <div className="hr"></div>
                                </div>
                                <div className="job-info">
                                    <Row>
                                        <Col xl={12}>
                                            <label
                                                htmlFor=""
                                                className="sub-title">
                                                Responsibility
                                            </label>
                                            <div
                                                className="job-overview__desc"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        data?.responsibilities ||
                                                        '-'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <div className="hr"></div>
                                </div>
                                <div className="job-info">
                                    <Row>
                                        <Col xl={12}>
                                            <label
                                                htmlFor=""
                                                className="sub-title">
                                                Benefit
                                            </label>
                                            <div>{data?.benefit || '-'}</div>
                                        </Col>
                                    </Row>
                                </div>
                            </React.Fragment>
                        </div>
                        <div className="footer-action">
                            <Button color="primary" block>
                                <a
                                    href={
                                        import.meta.env
                                            .VITE_JOBSEEKER_LANDING_PAGE
                                    }>
                                    Login for Jobseeker
                                </a>
                            </Button>
                        </div>
                    </React.Fragment>
                )}
                {isError && (
                    <div className="not-found">
                        <div>
                            <div>
                                <img className="img" src={empty} alt="" />
                            </div>

                            <h2 className="title">Job not found</h2>
                        </div>
                    </div>
                )}
            </Container>
        </HumaHireJobStyle>
    );
};
export default HumaHireJob;
