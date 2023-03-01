import { Card, message } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { MyTaskStyle } from '../style';
// import EmptyJob from '../../../../components/EmptyJob';
import CardTask from '../../../../components/Card/CardTask';
import JobDetail from '../../../../components/Modal/JobDetail';
import ReferCandidates from '../../../../components/Modal/ReferCandidates';
import DeclineTask from '../../../../components/Modal/DeclineTask';
import {
    jobApi,
    useDeleteTaskMutation,
    useGetTaskListQuery
} from '../../../../app/actions/jobApi';

const MyTask = () => {
    const [
        deleteTask,
        { isSuccess: successDeleted, reset, data: responseDelete }
    ] = useDeleteTaskMutation();
    const [messageApi, contextHolder] = message.useMessage();
    const { data: taskList } = useGetTaskListQuery();
    const [isOpen, setOpen] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [isRefer, setRefer] = React.useState(false);
    const [isDecline, setDecline] = React.useState(false);
    const [getTaskDetail, { data: taskDetail }] =
        jobApi.endpoints.getTaskId.useLazyQuery();
    const onDetailJob = (detail) => {
        setData(detail);
        setOpen(!isOpen);
        if (!isOpen) {
            getTaskDetail(detail.id);
        }
    };
    const onReferCandidate = () => {
        setRefer(!isRefer);
    };
    const onDeclineTask = (data) => {
        setData(data);
        setDecline(!isDecline);
    };
    const onDeleteTask = () => {
        deleteTask(data.id);
    };
    React.useEffect(() => {
        if (successDeleted) {
            setDecline(!isDecline);
            messageApi.open({
                type: 'success',
                content: responseDelete.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            reset();
        }
    }, [successDeleted]);
    return (
        <MyTaskStyle>
            {contextHolder}
            <Row>
                <Col xl={12}>
                    <Card className="card-section">
                        {/* <EmptyJob /> */}
                        <Row>
                            {taskList?.data?.map((item, key) => {
                                return (
                                    <Col md={4} key={key}>
                                        <CardTask
                                            onDeclineTask={onDeclineTask}
                                            onReferCandidate={onReferCandidate}
                                            onDetailJob={onDetailJob}
                                            data={item}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Card>
                </Col>
            </Row>
            <JobDetail
                onClose={onDetailJob}
                isOpen={isOpen}
                data={taskDetail?.data?.job}
            />
            <ReferCandidates isRefer={isRefer} onClose={onReferCandidate} />
            <DeclineTask
                isOpen={isDecline}
                onClose={onDeclineTask}
                onDeleteTask={onDeleteTask}
            />
        </MyTaskStyle>
    );
};
export default MyTask;
var dataDummy = [
    {
        id: 115,
        created_at: '2022-12-31T15:22:29.670673Z',
        created_by: 31,
        updated_at: '2023-01-04T07:40:47.789544Z',
        updated_by: null,
        code: '2147a1dc-0be9-4eeb-ab66-8cc7602b6750',
        company_id: 115,
        sub_district_id: 30,
        title: 'Scrum Master',
        description: null,
        employment_type: 'fulltime',
        skills_id: [1, 2],
        languages: null,
        type_of_work: 'Hybrid',
        min_education: 'Bachelor Degrees',
        accept_fresh_graduate: false,
        number_of_vacancies: 10,
        work_location:
            'Jl. Jendral Sudirman, Astra Tower, Jakarta Pusat, DKI Jakarta',
        exchange_rate: 'IDR',
        rate_start: 10000000,
        rate_end: 12500000,
        benefit: 'Private Insurance',
        job_requirements: 'lorem ipsum sit dolor amet',
        responsibilities:
            'et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur',
        status: 'active',
        count_invitation_status: {
            referred_candidates: 0,
            shortlisted_candidates: 0,
            interview_candidates: 0,
            hired_candidates: 0,
            rejected_candidates: 0
        },
        expired_at: '2023-01-31T00:00:00Z',
        company: {
            id: 115,
            created_at: '2022-12-09T15:32:55.490829Z',
            created_by: 31,
            updated_at: '2022-12-31T07:27:39.599011Z',
            updated_by: null,
            code: '663f3103-9b8b-4d07-892e-1a0e7fa00edb',
            company_industry_id: 7,
            name: 'PT Test Coba 1',
            tagline: 'Ayo kita mulai ... ',
            website_url: 'http://www.testajah@test.com',
            overview: '<p>Test adalah perusahaan.. yang bergerak di test</p>',
            why_join_us: '<p>karena kita bla...bla</p>',
            company_type: 'Small or Medium Enterprise',
            registration_number: '12345',
            tax_number: '123456',
            year_founded: '2000',
            languages: ['Indonesia'],
            office_hour: '09:00 - 18:00',
            employee_size: '11-50',
            dress_code: 'Casual',
            profile_completed: true,
            subscription: null,
            company_industry: null
        },
        sub_district: {
            id: 30,
            created_at: '2022-12-12T10:32:59.950554Z',
            created_by: 0,
            updated_at: '2022-12-12T10:32:59.950554Z',
            updated_by: null,
            district_id: 35,
            name: 'Kel. Ancol',
            postal_code: '13510',
            concat_no_prefix_address: null,
            concat_address:
                'Kel. Kramat Jati, Kec. Kramat Jati, Kota Jakarta Timur, DKI Jakarta',
            description: null,
            district: {
                id: 35,
                created_at: '2022-12-12T10:12:55.276583Z',
                created_by: 0,
                updated_at: '2022-12-12T10:12:55.276583Z',
                updated_by: null,
                city_id: 5,
                name: 'Kec. Kramat Jati',
                description: null,
                city: {
                    id: 5,
                    created_at: '2022-12-12T10:01:08.726661Z',
                    created_by: 0,
                    updated_at: '2022-12-12T10:01:08.726661Z',
                    updated_by: null,
                    province_id: 3,
                    name: 'Kota Jakarta Timur',
                    description: null,
                    province: {
                        id: 3,
                        created_at: '2022-11-17T04:26:53.829724Z',
                        created_by: 0,
                        updated_at: '2022-11-17T04:26:53.829724Z',
                        updated_by: null,
                        country_id: 2,
                        name: 'DKI Jakarta',
                        description: null,
                        country: {
                            id: 2,
                            created_at: '2022-11-17T04:25:14.335312Z',
                            created_by: 0,
                            updated_at: '2022-11-17T04:25:14.335312Z',
                            updated_by: null,
                            code: 'd2d4b690-d780-4ecb-91b0-79c96f04f192',
                            name: 'Indonesia',
                            description: null
                        }
                    }
                }
            }
        },
        skills: [
            {
                id: 1,
                created_at: '2022-11-17T05:20:33.010568Z',
                created_by: 0,
                updated_at: '2022-11-17T05:20:33.010568Z',
                updated_by: null,
                name: 'PHP',
                description: null
            },
            {
                id: 2,
                created_at: '2022-11-17T05:20:33.070744Z',
                created_by: 0,
                updated_at: '2022-11-17T05:20:33.070744Z',
                updated_by: null,
                name: 'Golang',
                description: null
            }
        ]
    },
    {
        id: 114,
        created_at: '2022-12-31T14:01:46.139701Z',
        created_by: 31,
        updated_at: '2023-01-04T07:40:15.48812Z',
        updated_by: null,
        code: 'f64042bc-7c04-4fdd-9edf-d8dd3065497d',
        company_id: 115,
        sub_district_id: 30,
        title: 'Scrum Master',
        description: 'Job description for scrum master is master',
        employment_type: 'fulltime',
        skills_id: [1, 2],
        languages: ['Bahasa Indonesia', 'English'],
        type_of_work: 'Hybrid',
        min_education: 'Bachelor Degrees',
        accept_fresh_graduate: false,
        number_of_vacancies: 10,
        work_location:
            'Jl. Jendral Sudirman, Astra Tower, Jakarta Pusat, DKI Jakarta',
        exchange_rate: 'IDR',
        rate_start: 10000000,
        rate_end: 12500000,
        benefit: '',
        job_requirements: '<p>lorem ipsum sit dolor amet</p>',
        responsibilities:
            '<p>et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>',
        status: 'active',
        count_invitation_status: {
            referred_candidates: 0,
            shortlisted_candidates: 0,
            interview_candidates: 0,
            hired_candidates: 0,
            rejected_candidates: 0
        },
        expired_at: '2023-01-31T00:00:00Z',
        company: {
            id: 115,
            created_at: '2022-12-09T15:32:55.490829Z',
            created_by: 31,
            updated_at: '2022-12-31T07:27:39.599011Z',
            updated_by: null,
            code: '663f3103-9b8b-4d07-892e-1a0e7fa00edb',
            company_industry_id: 7,
            name: 'PT Test Coba 1',
            tagline: 'Ayo kita mulai ... ',
            website_url: 'http://www.testajah@test.com',
            overview: '<p>Test adalah perusahaan.. yang bergerak di test</p>',
            why_join_us: '<p>karena kita bla...bla</p>',
            company_type: 'Small or Medium Enterprise',
            registration_number: '12345',
            tax_number: '123456',
            year_founded: '2000',
            languages: ['Indonesia'],
            office_hour: '09:00 - 18:00',
            employee_size: '11-50',
            dress_code: 'Casual',
            profile_completed: true,
            subscription: null,
            company_industry: null
        },
        sub_district: {
            id: 30,
            created_at: '2022-12-12T10:32:59.950554Z',
            created_by: 0,
            updated_at: '2022-12-12T10:32:59.950554Z',
            updated_by: null,
            district_id: 35,
            name: 'Kel. Ancol',
            postal_code: '13510',
            concat_no_prefix_address: null,
            concat_address:
                'Kel. Kramat Jati, Kec. Kramat Jati, Kota Jakarta Timur, DKI Jakarta',
            description: null,
            district: {
                id: 35,
                created_at: '2022-12-12T10:12:55.276583Z',
                created_by: 0,
                updated_at: '2022-12-12T10:12:55.276583Z',
                updated_by: null,
                city_id: 5,
                name: 'Kec. Kramat Jati',
                description: null,
                city: {
                    id: 5,
                    created_at: '2022-12-12T10:01:08.726661Z',
                    created_by: 0,
                    updated_at: '2022-12-12T10:01:08.726661Z',
                    updated_by: null,
                    province_id: 3,
                    name: 'Kota Jakarta Timur',
                    description: null,
                    province: {
                        id: 3,
                        created_at: '2022-11-17T04:26:53.829724Z',
                        created_by: 0,
                        updated_at: '2022-11-17T04:26:53.829724Z',
                        updated_by: null,
                        country_id: 2,
                        name: 'DKI Jakarta',
                        description: null,
                        country: {
                            id: 2,
                            created_at: '2022-11-17T04:25:14.335312Z',
                            created_by: 0,
                            updated_at: '2022-11-17T04:25:14.335312Z',
                            updated_by: null,
                            code: 'd2d4b690-d780-4ecb-91b0-79c96f04f192',
                            name: 'Indonesia',
                            description: null
                        }
                    }
                }
            }
        },
        skills: [
            {
                id: 1,
                created_at: '2022-11-17T05:20:33.010568Z',
                created_by: 0,
                updated_at: '2022-11-17T05:20:33.010568Z',
                updated_by: null,
                name: 'PHP',
                description: null
            },
            {
                id: 2,
                created_at: '2022-11-17T05:20:33.070744Z',
                created_by: 0,
                updated_at: '2022-11-17T05:20:33.070744Z',
                updated_by: null,
                name: 'Golang',
                description: null
            }
        ]
    },
    {
        id: 113,
        created_at: '2022-12-31T13:56:26.542785Z',
        created_by: 31,
        updated_at: '2023-01-04T07:40:29.829439Z',
        updated_by: null,
        code: '1ffa71dc-a946-45ef-9ee2-d2c00779e030',
        company_id: 115,
        sub_district_id: 30,
        title: 'Scrum Master',
        description: null,
        employment_type: 'fulltime',
        skills_id: [1, 2],
        languages: ['Bahasa Indonesia', 'English'],
        type_of_work: 'Hybrid',
        min_education: 'Bachelor Degrees',
        accept_fresh_graduate: false,
        number_of_vacancies: 10,
        work_location:
            'Jl. Jendral Sudirman, Astra Tower, Jakarta Pusat, DKI Jakarta',
        exchange_rate: 'IDR',
        rate_start: 10000000,
        rate_end: 12500000,
        benefit: 'Private Insurance',
        job_requirements: 'lorem ipsum sit dolor amet',
        responsibilities:
            'et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur',
        status: 'active',
        count_invitation_status: {
            referred_candidates: 0,
            shortlisted_candidates: 0,
            interview_candidates: 0,
            hired_candidates: 0,
            rejected_candidates: 0
        },
        expired_at: '2023-01-31T00:00:00Z',
        company: {
            id: 115,
            created_at: '2022-12-09T15:32:55.490829Z',
            created_by: 31,
            updated_at: '2022-12-31T07:27:39.599011Z',
            updated_by: null,
            code: '663f3103-9b8b-4d07-892e-1a0e7fa00edb',
            company_industry_id: 7,
            name: 'PT Test Coba 1',
            tagline: 'Ayo kita mulai ... ',
            website_url: 'http://www.testajah@test.com',
            overview: '<p>Test adalah perusahaan.. yang bergerak di test</p>',
            why_join_us: '<p>karena kita bla...bla</p>',
            company_type: 'Small or Medium Enterprise',
            registration_number: '12345',
            tax_number: '123456',
            year_founded: '2000',
            languages: ['Indonesia'],
            office_hour: '09:00 - 18:00',
            employee_size: '11-50',
            dress_code: 'Casual',
            profile_completed: true,
            subscription: null,
            company_industry: null
        },
        sub_district: {
            id: 30,
            created_at: '2022-12-12T10:32:59.950554Z',
            created_by: 0,
            updated_at: '2022-12-12T10:32:59.950554Z',
            updated_by: null,
            district_id: 35,
            name: 'Kel. Ancol',
            postal_code: '13510',
            concat_no_prefix_address: null,
            concat_address:
                'Kel. Kramat Jati, Kec. Kramat Jati, Kota Jakarta Timur, DKI Jakarta',
            description: null,
            district: {
                id: 35,
                created_at: '2022-12-12T10:12:55.276583Z',
                created_by: 0,
                updated_at: '2022-12-12T10:12:55.276583Z',
                updated_by: null,
                city_id: 5,
                name: 'Kec. Kramat Jati',
                description: null,
                city: {
                    id: 5,
                    created_at: '2022-12-12T10:01:08.726661Z',
                    created_by: 0,
                    updated_at: '2022-12-12T10:01:08.726661Z',
                    updated_by: null,
                    province_id: 3,
                    name: 'Kota Jakarta Timur',
                    description: null,
                    province: {
                        id: 3,
                        created_at: '2022-11-17T04:26:53.829724Z',
                        created_by: 0,
                        updated_at: '2022-11-17T04:26:53.829724Z',
                        updated_by: null,
                        country_id: 2,
                        name: 'DKI Jakarta',
                        description: null,
                        country: {
                            id: 2,
                            created_at: '2022-11-17T04:25:14.335312Z',
                            created_by: 0,
                            updated_at: '2022-11-17T04:25:14.335312Z',
                            updated_by: null,
                            code: 'd2d4b690-d780-4ecb-91b0-79c96f04f192',
                            name: 'Indonesia',
                            description: null
                        }
                    }
                }
            }
        },
        skills: [
            {
                id: 1,
                created_at: '2022-11-17T05:20:33.010568Z',
                created_by: 0,
                updated_at: '2022-11-17T05:20:33.010568Z',
                updated_by: null,
                name: 'PHP',
                description: null
            },
            {
                id: 2,
                created_at: '2022-11-17T05:20:33.070744Z',
                created_by: 0,
                updated_at: '2022-11-17T05:20:33.070744Z',
                updated_by: null,
                name: 'Golang',
                description: null
            }
        ]
    }
];
