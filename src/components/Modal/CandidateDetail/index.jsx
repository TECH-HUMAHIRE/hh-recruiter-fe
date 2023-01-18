import React from 'react';
import Button from '../../Button';
import CandidateDetailStyle from './candidate-detail.style';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import PrintIcon from '../../Icon/Print';
import BagIcon from '../../Assets/icon/Bag.png';
import dressIcon from '../../Assets/icon/Dress.png';
import { Row, Col } from '../../Grid';
import FoundedIcon from '../../Icon/Founded';
import MoneyIcon from '../../Icon/Money';
import MessegerIcon from '../../Icon/Messeger';
import PhoneIcon from '../../Icon/Phone';
import TabMenu from '../../Tabs';
import LockIcon from '../../Icon/Lock';
import Experience from './Experience';
import userDummy from '../../Assets/images/dummy.png';
import { DownloadOutlined, StarFilled } from '@ant-design/icons';
import { color } from '../../Utils/variable';
import ChattingIcon from '../../Icon/Chatting';
import Education from './Education';
import { formatMoney } from '../../Utils/formatMoney';
const CandidateDetail = ({ open = false, data, onClose = () => {} }) => {
    const dummyData = [
        {
            name: 'Senior Product Designer',
            job_location: 'at G****',
            location: 'Jakarta, Indonesia',
            date: 'Jun 2020 - Jul 2022',
            last: '2 years 1 month',
            desc: "You are my fire the one desire believe when I say I want it that way. But we are two worlds apart can't reach to your heart when you say that I want it that way."
        },
        {
            name: 'Product Designer',
            job_location: 'at G****',
            location: 'Jakarta, Indonesia',
            date: 'Jun 2020 - Jul 2022',
            last: '2 years 1 month',
            desc: "You are my fire the one desire believe when I say I want it that way. But we are two worlds apart can't reach to your heart when you say that I want it that way."
        },
        {
            name: 'Senior Product Designer',
            job_location: 'at G****',
            location: 'Jakarta, Indonesia',
            date: 'Jun 2020 - Jul 2022',
            last: '2 years 1 month',
            desc: "You are my fire the one desire believe when I say I want it that way. But we are two worlds apart can't reach to your heart when you say that I want it that way."
        }
    ];
    return (
        <CandidateDetailStyle
            title={
                <div className="modal-header">
                    <div className="modal-header__right">
                        <img
                            src={ArrowLeft}
                            alt=""
                            onClick={onClose}
                            className="close-icon"
                        />
                        <div className="modal-header__initial">JR</div>
                        <div className="modal-header__info">
                            <div className="modal-header__info-name">
                                {' '}
                                {data?.jobseeker.name}
                            </div>
                            <div className="modal-header__info-location">
                                {
                                    data?.jobseeker.sub_district.district.city
                                        .name
                                }
                                ,{' '}
                                {
                                    data?.jobseeker.sub_district.district.city
                                        .province.country.name
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-header__left">
                        <Button color="outline-primary">
                            <PrintIcon />
                        </Button>
                        <Button color="outline-primary">
                            <DownloadOutlined />
                        </Button>
                    </div>
                </div>
            }
            open={open}
            footer={null}
            width={730}
            closable={false}>
            <div className="modal-body">
                <h2 className="title">About</h2>
                <div>
                    You are my fire the one desire believe when I say I want it
                    that way. But we are two worlds apart can't reach to your
                    heart when you say that I want it that way.
                </div>
            </div>
            <div className="hr"></div>
            <div className="modal-body">
                <h2 className="title">Detail</h2>
                <Row>
                    <Col sm={6}>
                        <div className="referred-information__card">
                            <div className="referred-information__icon">
                                <img src={BagIcon} alt="" />
                            </div>
                            <div>
                                <div className="referred-information__label">
                                    Experience Level
                                </div>
                                <div className="referred-information__value">
                                    SeniorJava Programmer
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="referred-information__card">
                            <div className="referred-information__icon">
                                <img src={dressIcon} alt="" />
                            </div>
                            <div>
                                <div className="referred-information__label">
                                    Education
                                </div>
                                <div className="referred-information__value">
                                    Master of Computer Science
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="referred-information__card">
                            <div className="referred-information__icon">
                                <MoneyIcon color="#666666" />
                            </div>
                            <div>
                                <div className="referred-information__label">
                                    Working Experience
                                </div>
                                <div className="referred-information__value">
                                    12 years of exp • 27 years old
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className="referred-information__card">
                            <div className="referred-information__icon">
                                <FoundedIcon color="#666666" />
                            </div>
                            <div>
                                <div className="referred-information__label">
                                    Expected Salary
                                </div>
                                <div className="referred-information__value">
                                    {formatMoney(
                                        data?.jobseeker.expected_sallary
                                    )}{' '}
                                    (
                                    {data?.jobseeker.expected_sallary_negotiable
                                        ? 'Negotiable'
                                        : 'Nett'}
                                    )
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="modal-body">
                <h2 className="title">Contact</h2>
                <Row>
                    <Col md={6}>
                        <div className="referred-information__card">
                            <div className="referred-information__icon">
                                <PhoneIcon color="#666666" />
                            </div>
                            <div>
                                <div className="referred-information__label">
                                    Phone
                                </div>
                                <div className="referred-information__value">
                                    {data?.jobseeker.phone}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="referred-information__card">
                            <div className="referred-information__icon">
                                <MessegerIcon color="#666666" />
                            </div>
                            <div>
                                <div className="referred-information__label">
                                    Email
                                </div>
                                <div className="referred-information__value">
                                    {data?.jobseeker.email}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="hr"></div>
            <div className="modal-body">
                <TabMenu
                    item={[
                        {
                            label: `Experience`,
                            key: '1',
                            children: <Experience data={dummyData} />
                        },
                        {
                            label: `Education`,
                            key: '2',
                            children: <Education data={dummyData} />
                        },
                        {
                            label: `Certification`,
                            key: '3',
                            children: <div>Certification</div>
                        }
                    ]}
                />
            </div>
            <div className="hr"></div>
            <div className="modal-body">
                <div style={{ marginBottom: 25 }}>
                    <div className="referred-information__contact">
                        <div className="referred-information__user border">
                            <div className="referred-information__profile ">
                                <div>
                                    <img
                                        className="referred-information__avatar"
                                        src={userDummy}
                                        alt="user_name"
                                    />
                                </div>
                                <div>
                                    <div className="referred-information__name">
                                        The Mandalorian
                                    </div>
                                    <div>
                                        <span className="referred-information__rating">
                                            <StarFilled
                                                style={{ color: '#F57F17' }}
                                            />{' '}
                                            4.8 (9 Reviews)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="referred-information__chat ">
                                <ChattingIcon color={color.employee.primary} />{' '}
                                Chat
                            </div>
                        </div>
                        <div className="referred-information__phone border">
                            <PhoneIcon color="#444444" /> +62-819-1234-5678
                        </div>
                        <div className="referred-information__email">
                            <a href="mailto:themandalorian@gmail.com">
                                <MessegerIcon /> themandalorian@gmail.com
                            </a>
                        </div>
                    </div>
                    <Row>
                        <Col md={12}>
                            You are my fire the one desire believe when I say I
                            want it that way. But we are two worlds apart can't
                            reach to your heart when you say that I want it that
                            way.
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={4}>
                        <Button color="outline-primary" onClick={onClose} block>
                            Back
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button color="outline-primary" block>
                            Print
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button color="outline-primary" block>
                            Download CV
                        </Button>
                    </Col>
                </Row>
            </div>
        </CandidateDetailStyle>
    );
};
export default CandidateDetail;
