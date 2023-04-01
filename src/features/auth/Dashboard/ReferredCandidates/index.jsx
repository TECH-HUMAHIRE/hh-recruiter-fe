import { Card, Form, Input } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { DashboardCandidatesStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';
import TabMenu from '../../../../components/Tabs';
import { useGetTaskInvitationQuery } from '../../../../app/actions/jobApi';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import CandidatesList from '../../../../components/SectionCard/CandidatesList';

const ReferredCandidates = () => {
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        status: 'accepted'
    });
    const { data: jobInvitation } = useGetTaskInvitationQuery(params);

    const onViewDetail = () => {
        setDetailInfo(!isDetailInfo);
    };
    const onCancelInvitation = () => {
        setCancelInvitation(!isCancelInvitation);
    };

    React.useEffect(() => {
        setItemTabs(
            jobInvitation?.data?.map((item) => {
                return {
                    label: (
                        <div className="referred-tabs">
                            <div className="card-earn__price">
                                <span>Earn</span> {formatMoney(item.commission)}
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
            {jobInvitation?.data?.length > 0 && (
                <Row>
                    <Col xl={3} lg={3} md={12}>
                        <Form.Item>
                            <Input
                                prefix={<SearchOutlined />}
                                size="large"
                                type={'text'}
                                placeholder="Search Candidates"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            )}
            <Row>
                <Col xl={12}>
                    {jobInvitation?.data?.length > 0 ? (
                        <TabMenu
                            // defaultActiveKey={paramsUrl.get('id')}
                            item={itemTabs}
                            tabPosition="left"
                        />
                    ) : (
                        <Card>
                            <EmptyJob button={false} />
                        </Card>
                    )}
                </Col>
            </Row>
        </DashboardCandidatesStyle>
    );
};
export default ReferredCandidates;
let jobInvitation = {
    data: [
        {
            id: 90,
            created_at: '2022-12-15T10:46:13.15762Z',
            created_by: 19,
            updated_at: '2022-12-23T06:14:32.195595Z',
            updated_by: null,
            code: 'ace8f5fc-b7ac-4a2c-bd22-9ded59e1eaac',
            company_id: 117,
            sub_district_id: 2,
            title: 'Backend Developer',
            description: 'asdasd',
            employment_type: 'fulltime',
            skills_id: [1],
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
            job_requirements: '<p>asd</p>',
            responsibilities: '<p>asd</p>',
            status: 'active',
            count_invitation_status: {
                referred_candidates: 0,
                shortlisted_candidates: 0,
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
