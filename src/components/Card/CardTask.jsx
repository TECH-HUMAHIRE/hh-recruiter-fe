import { CloseOutlined, MoreOutlined } from '@ant-design/icons';
import { CardJobStyle, CardMenu } from './card.style';
import React from 'react';
import CalendarIcon from '../Assets/icon/Calendar.png';
import { Dropdown } from 'antd';
import EditIcon from '../Icon/Edit';
import DeleteIcon from '../Assets/icon/Trash.png';
import PauseIcon from '../Assets/icon/pause.png';
import PreviewIcon from '../Assets/icon/preview.png';
import PlayIcon from '../Assets/icon/play.png';
import ShareIcon from '../Assets/icon/share.png';
import PauseIconOutline from '../Assets/icon/pause-outline.png';
import moment from 'moment';
import { Link } from 'react-router-dom';
import companyDummy from '../Assets/icon/company-dummy.png';
import moneyIcon from '../Assets/icon/money.png';
import unionIcon from '../Assets/icon/union.png';
import { format } from 'prettier';
import { formatMoney } from '../Utils/formatMoney';
import CloseIcon from '../Icon/Close';

const CardTask = ({
    onDetailJob = () => {},
    onDeclineTask = () => {},
    onReferCandidate = () => {},
    job
}) => {
    const actionDropdown = [
        {
            key: '1',
            label: (
                <CardMenu onClick={() => onReferCandidate(job)}>
                    <img src={ShareIcon} alt="" />
                    Refer Candidates
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu onClick={() => onDetailJob(job)}>
                    <img src={PreviewIcon} alt="" />
                    View Job Detail
                </CardMenu>
            )
        },
        {
            key: '3',
            label: (
                <CardMenu onClick={() => onDeclineTask(job)}>
                    <CloseOutlined />
                    Decline
                </CardMenu>
            )
        }
    ];
    const [items, setItems] = React.useState(actionDropdown);
    // React.useEffect(() => {
    //     if (job || successUpdateJob) {
    //         setItems(
    //             actionDropdown.filter((item) => {
    //                 switch (job.status) {
    //                     case 'active':
    //                         return item.key !== '3' && item.key !== '5';
    //                     case 'paused':
    //                         return item.key !== '4' && item.key !== '5';
    //                     case 'archived':
    //                         return (
    //                             item.key !== '1' &&
    //                             item.key !== '2' &&
    //                             item.key !== '3' &&
    //                             item.key !== '4'
    //                         );
    //                     case 'draft':
    //                         return (
    //                             item.key !== '3' &&
    //                             item.key !== '4' &&
    //                             item.key !== '5'
    //                         );
    //                     default:
    //                         return items;
    //                 }
    //             })
    //         );
    //     }
    // }, [job, successUpdateJob]);

    return (
        <CardJobStyle
            title={
                <div className="card-header">
                    <div className="card-header__right">
                        <div className="card-header__logo">
                            <img src={companyDummy} alt="" />
                        </div>
                        <div className="card-header__info">
                            <div className="card-header__info-name">
                                {job?.title}
                            </div>
                            <div className="card-header__info-location">
                                PT Grab Indonesia <br /> Jakarta, Indonesia
                            </div>
                        </div>
                    </div>
                </div>
            }
            extra={
                <Dropdown
                    menu={{ items }}
                    placement="bottomCenter"
                    trigger="click">
                    <MoreOutlined className="card-action" />
                </Dropdown>
            }>
            <div className="card-earn__price">
                <span>Earn</span> {formatMoney(2000000)}
            </div>
            <div className="card-status">
                <div
                    className={`card-date ${
                        job?.status === 'archived' ? 'text-danger' : ''
                    }`}>
                    Posted {moment(job.updated_at).format('DD-MM-YYYY')} •
                    Expired:
                    <span>{moment(job.expired_at).format('DD-MM-YYYY')}</span>
                </div>
            </div>
            <div className="card-status">
                <img src={moneyIcon} alt="" />{' '}
                <span>Rp 7.000.000 - Rp 9.000.000/ Month</span>
            </div>
            <div className="card-status">
                <img src={unionIcon} alt="" /> <span>Full Time</span>
            </div>

            <Link
                to={`/referred-candidates?id=${job.id}`}
                disabled={
                    job?.count_invitation_status?.referred_candidates < 1
                }>
                <div className="card-info">
                    <b>{job?.count_invitation_status?.referred_candidates}</b>{' '}
                    Referred Candidates
                </div>
            </Link>
            <Link
                to={`/shortlisted-candidates?id=${job.id}`}
                disabled={
                    job.count_invitation_status.shortlisted_candidates < 1
                }>
                <div className="card-info">
                    <b>{job.count_invitation_status.shortlisted_candidates}</b>{' '}
                    Shortlisted Candidates
                </div>
            </Link>
            <Link
                to={`/interview-candidates?id=${job.id}`}
                disabled={job.count_invitation_status.interview_candidates < 1}>
                <div className="card-info last">
                    <b>{job.count_invitation_status.interview_candidates}</b>{' '}
                    Interview Candidates
                </div>
            </Link>
        </CardJobStyle>
    );
};
export default CardTask;
