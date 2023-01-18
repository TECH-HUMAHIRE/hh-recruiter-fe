import { Dropdown } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { DashboardCandidatesStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';
import TabMenu from '../../../../components/Tabs';
import CandidatesList from '../../../../components/SectionCard/CandidatesList';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import companyDummy from '../../../../components/Assets/icon/company-dummy.png';
import { MoreOutlined } from '@ant-design/icons';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import CancelInvitation from '../../../../components/Modal/CancelInvitation';

const InviteCandidates = () => {
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const onViewDetail = (data) => {
        setDetailInfo(!isDetailInfo);
    };
    const onCancelInvitation = (data) => {
        setCancelInvitation(!isCancelInvitation);
    };
    React.useEffect(() => {
        setItemTabs(
            jobInvitation.data.map((item, key) => {
                return {
                    label: (
                        <div className="referred-tabs">
                            <div className="card-earn__price">
                                <span>Earn</span> {formatMoney(2000000)}
                            </div>
                            <div className="referred-card">
                                <img src={companyDummy} alt="" />
                                <div style={{ width: '100%' }}>
                                    <div className="referred-tabs__header">
                                        <div>
                                            <div className="referred-tabs__title">
                                                {item.title}
                                            </div>
                                            <div className="referred-tabs__company">
                                                PT Grab Indonesia
                                            </div>
                                            <div className="referred-tabs__city">
                                                Jakarta, Indonesia
                                            </div>
                                        </div>
                                        {/* <Dropdown
                                            menu={[]}
                                            placement="bottomCenter"
                                            trigger="click"> */}
                                        <MoreOutlined className="card-action" />
                                        {/* </Dropdown> */}
                                    </div>
                                    <div className="referred-tabs__city">
                                        Posted 11 Jun 2022 • Expired: 9 Jul 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),
                    key: `${item.id}`,
                    children: (
                        <CandidatesList
                            onViewDetail={onViewDetail}
                            onCancelInvitation={onCancelInvitation}
                            code={item.code}
                            actionText="Unlock"
                        />
                    )
                };
            })
        );
    }, []);
    return (
        <DashboardCandidatesStyle>
            <Row>
                <Col xl={12}>
                    {jobInvitation?.data?.length > 0 ? (
                        <TabMenu item={itemTabs} tabPosition="left" />
                    ) : (
                        <EmptyJob button={false} />
                    )}
                </Col>
            </Row>
            <CandidateDetail open={isDetailInfo} onClose={onViewDetail} />
            <CancelInvitation
                isOpen={isCancelInvitation}
                onClose={onCancelInvitation}
            />
        </DashboardCandidatesStyle>
    );
};
export default InviteCandidates;
const jobInvitation = {
    data: [
        {
            id: 89,
            created_at: '2022-12-15T04:45:36.405119Z',
            created_by: 19,
            updated_at: '2022-12-22T14:51:22.870529Z',
            updated_by: null,
            code: '6a446b85-5c52-4b77-be77-9251a2a1f13d',
            company_id: 117,
            sub_district_id: 2,
            title: 'Chief Of Technology',
            description: null,
            employment_type: 'fulltime',
            skills_id: [2],
            languages: null,
            type_of_work: 'asd',
            min_education: 'Senior High School',
            accept_fresh_graduate: false,
            number_of_vacancies: 1,
            work_location: 'asd',
            exchange_rate: 'IDR',
            rate_start: 10000,
            rate_end: 100000,
            benefit: '',
            job_requirements: '\u003cp\u003easd\u003c/p\u003e',
            responsibilities: '\u003cp\u003easd\u003c/p\u003e',
            status: 'active',
            count_invitation_status: {
                referred_candidates: 0,
                shortlisted_candidates: 1,
                interview_candidates: 0,
                hired_candidates: 0,
                rejected_candidates: 0
            },
            expired_at: '2023-01-15T00:00:00Z',
            company: null,
            sub_district: null,
            skills: null
        }
    ]
};
