import { Card } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { DashboardCandidatesStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';
import TabMenu from '../../../../components/Tabs';

const ReferredCandidates = () => {
    return (
        <DashboardCandidatesStyle>
            <Row>
                <Col xl={12}>
                    <h2 className="title">Referred Candidates</h2>
                </Col>
                {/* <Col xl={12}>
                    {jobInvitation?.data?.length > 0 ? (
                        <TabMenu
                            // defaultActiveKey={paramsUrl.get('id')}
                            item={itemTabs}
                            tabPosition="left"
                        />
                    ) : (
                        <EmptyJob button={false} />
                    )}
                </Col> */}
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
