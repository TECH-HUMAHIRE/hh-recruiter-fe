import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import CardCandidates from '../Card/CardCandidates';
import { Col, Row } from '../Grid';
// const { Search } = Input;
const CandidatesList = ({
    onViewDetail = () => {},
    onCancelInvitation = () => {}
}) => {
    return (
        <div style={{ minHeight: 300 }}>
            <Row>
                <Col md={12}>
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
            <Row>
                {dataCandidates?.data?.map((item, key) => {
                    return (
                        <Col xl={6} md={6} sm={6} key={key}>
                            <CardCandidates
                                data={item}
                                onViewDetail={onViewDetail}
                                onCancelInvitation={onCancelInvitation}
                            />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default CandidatesList;
const dataCandidates = {
    data: [
        {
            id: 9,
            created_at: '2022-12-21T16:48:29.646809Z',
            created_by: 11,
            updated_at: '2023-01-03T19:09:39.048336Z',
            updated_by: null,
            code: '330f4c2b-5ffe-46f6-9453-b57bff58153c',
            job_id: 89,
            recruiter_id: 11,
            jobseeker_id: 12,
            message:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            is_unlock: true,
            status: 'shortlisted',
            company: null,
            recruiter: {
                id: 11,
                created_at: '2022-11-17T11:22:35.301236Z',
                created_by: 0,
                updated_at: '2022-11-17T04:22:35.475973Z',
                updated_by: null,
                uid: null,
                name: 'Budi Doremi',
                phone: '0821181701',
                email: 'budi@budi.com',
                password: '',
                is_active: true,
                user_type: 'RECRUITER',
                company_id: null,
                expected_sallary: null,
                expected_sallary_negotiable: null,
                sub_district_id: 1,
                email_verified: false,
                phone_verified: false,
                profile_completed: false,
                credit_activated: false,
                credit_amount: null,
                credit_used: null,
                credit_expired_at: null,
                company: null,
                sub_district: null
            },
            jobseeker: {
                id: 12,
                created_at: '2022-11-29T17:06:45.705Z',
                created_by: 0,
                updated_at: '2022-11-29T10:06:45.791Z',
                updated_by: null,
                uid: null,
                name: 'Budi Doremi',
                phone: '08211817012',
                email: 'budi2@budi.com',
                password: '',
                is_active: true,
                user_type: 'JOBSEEKER',
                company_id: null,
                expected_sallary: null,
                expected_sallary_negotiable: null,
                sub_district_id: 10,
                email_verified: false,
                phone_verified: false,
                profile_completed: false,
                credit_activated: false,
                credit_amount: null,
                credit_used: null,
                credit_expired_at: null,
                company: null,
                sub_district: {
                    id: 10,
                    created_at: '2022-12-12T10:32:59.950554Z',
                    created_by: 0,
                    updated_at: '2022-12-12T10:32:59.950554Z',
                    updated_by: null,
                    district_id: 33,
                    name: 'Kel. Pekayon',
                    postal_code: '13140',
                    concat_no_prefix_address: null,
                    concat_address:
                        'Kel. Pal Meriam, Kec. Matraman, Kota Jakarta Timur, DKI Jakarta',
                    description: null,
                    district: {
                        id: 33,
                        created_at: '2022-12-12T10:12:55.071609Z',
                        created_by: 0,
                        updated_at: '2022-12-12T10:12:55.071609Z',
                        updated_by: null,
                        city_id: 5,
                        name: 'Kec. Matraman',
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
                }
            }
        }
    ]
};
