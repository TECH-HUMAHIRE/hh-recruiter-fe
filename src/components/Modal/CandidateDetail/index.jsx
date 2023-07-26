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
import { profileAuth } from '../../../app/actions/profile';
import Certification from './Certification';
import { downloadCv } from '../../../app/actions/downloadcv';
import { useNavigate } from 'react-router-dom';
const CandidateDetail = ({
    open = false,
    data,
    isAssign = false,
    isReffered = false,
    onClose = () => {},
    handlerLockCandidates = () => {},
    handlerReferCandidates = () => {}
}) => {
    const navigate = useNavigate();
    // state
    const [initialName, setInitialName] = React.useState('');
    // fetchapi
    const [getEducationCandidate, { data: educationList }] =
        profileAuth.endpoints.getEducationCandidate.useLazyQuery();
    const [getExperienceCandidate, { data: experienceList }] =
        profileAuth.endpoints.getExperienceCandidate.useLazyQuery();
    const [getCertificateCandidate, { data: certificateList }] =
        profileAuth.endpoints.getCertificate.useLazyQuery();
    const [getCvCandidate] = downloadCv.endpoints.downloadCv.useLazyQuery();
    // function

    const onDownloadCv = () => {
        window.open(
            import.meta.env.VITE_BASE_URL_API +
                `/download?file_link=${data?.cv_url}`
        );
    };
    React.useEffect(() => {
        if (data?.id) {
            getCertificateCandidate(data.id);
            getEducationCandidate(data.id);
            getExperienceCandidate(data.id);
            let splitname = data?.name.split(' ');
            let setname = `${splitname[0][0]}${
                splitname.length > 1 ? splitname[1][0] : ''
            }`;
            setInitialName(setname);
        }
    }, [data]);
    return (
        <CandidateDetailStyle
            keyColor={data?.id}
            title={
                <div className="modal-header">
                    <div className="modal-header__right">
                        <img
                            src={ArrowLeft}
                            alt=""
                            onClick={onClose}
                            className="close-icon"
                        />
                        <div className="modal-header__initial">
                            {initialName}
                        </div>
                        <div className="modal-header__info">
                            <div className="modal-header__info-name">
                                {' '}
                                {data?.name}
                            </div>
                            <div className="modal-header__info-location">
                                {data?.sub_district?.district?.city?.name},{' '}
                                {
                                    data?.sub_district?.district?.city?.province
                                        ?.country?.name
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-header__left">
                        <Button
                            color="outline-primary"
                            onClick={() => window.print()}>
                            <PrintIcon />
                        </Button>
                        <Button color="outline-primary" onClick={onDownloadCv}>
                            <DownloadOutlined />
                        </Button>
                    </div>
                </div>
            }
            open={open}
            footer={null}
            width={830}
            closable={false}>
            <div className="modal-body">
                <h2 className="title">About</h2>
                <div>{data?.about}</div>
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
                                    {data?.experience_level}
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
                                    {data?.education}
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
                                    {data?.working_experience} years of exp
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
                                    {formatMoney(data?.expected_sallary)} (
                                    {data?.expected_sallary_negotiable
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
                                    {data?.phone}
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
                                    {data?.email}
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
                            children: <Experience data={experienceList?.data} />
                        },
                        {
                            label: `Education`,
                            key: '2',
                            children: <Education data={educationList?.data} />
                        },
                        {
                            label: `Certification`,
                            key: '3',
                            children: (
                                <Certification data={certificateList?.data} />
                            )
                        }
                    ]}
                />
            </div>
            <div className="hr"></div>
            {data?.is_unlocked === true && (
                <div className="modal-body">
                    <div style={{ marginBottom: 25 }}>
                        <div className="referred-information__contact">
                            <div className="referred-information__user border">
                                <div className="referred-information__profile ">
                                    <div>
                                        <img
                                            className="referred-information__avatar"
                                            src={data?.photo_url}
                                            alt="user_name"
                                        />
                                    </div>
                                    <div>
                                        <div className="referred-information__name">
                                            {data?.name}
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
                                <div
                                    className="referred-information__chat"
                                    onClick={() =>
                                        navigate(`/Inbox?message=${data?.uid}`)
                                    }>
                                    <ChattingIcon
                                        color={color.employee.primary}
                                    />{' '}
                                    Chat
                                </div>
                            </div>
                            <div className="referred-information__phone border">
                                <PhoneIcon color="#444444" /> {data?.phone}
                            </div>
                            <div className="referred-information__email">
                                <a href={`mailto:${data?.email}`}>
                                    <MessegerIcon /> {data?.email}
                                </a>
                            </div>
                        </div>
                        <Row>
                            <Col md={12}>{data?.about}</Col>
                        </Row>
                    </div>
                </div>
            )}

            <div className="modal-body">
                {!data?.is_unlocked && (
                    <div style={{ marginBottom: 25 }}>
                        <h3 style={{ fontWeight: 'bold' }}>Candidate Note:</h3>
                        <div>{data?.about || '-'}</div>
                        <div className="hr"></div>
                    </div>
                )}

                <Row>
                    <Col md={isAssign || !data?.is_unlocked ? 4 : 3}>
                        <Button color="outline-primary" onClick={onClose} block>
                            Back
                        </Button>
                    </Col>
                    <Col md={isAssign || !data?.is_unlocked ? 4 : 3}>
                        <Button
                            color="outline-primary"
                            block
                            onClick={() => window.print()}>
                            Print
                        </Button>
                    </Col>
                    {data?.is_unlocked && (
                        <Col md={isAssign ? 4 : 3}>
                            <Button
                                color="outline-primary"
                                block
                                disabled={data?.cv_url ? false : true}
                                onClick={onDownloadCv}>
                                Download CV
                            </Button>
                        </Col>
                    )}

                    {isAssign ? (
                        <></>
                    ) : data?.is_unlocked || isReffered ? (
                        <Col md={!data?.is_unlocked ? 4 : 3}>
                            <Button
                                onClick={() => handlerReferCandidates(data)}
                                color="primary"
                                block>
                                Refer
                            </Button>
                        </Col>
                    ) : (
                        <Col md={!data?.is_unlocked ? 4 : 3}>
                            <Button
                                onClick={() => handlerLockCandidates(data)}
                                icon={<LockIcon />}
                                color="primary"
                                block>
                                Unlock
                            </Button>
                        </Col>
                    )}
                </Row>
            </div>
        </CandidateDetailStyle>
    );
};
export default CandidateDetail;
