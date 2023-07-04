import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import { candidates } from '../../app/actions/candidates';
import { useUpdateStatusJobCandidatesMutation } from '../../app/actions/jobApi';
import CardCandidates from '../Card/CardCandidates';
import { Col, Row } from '../Grid';
// const { Search } = Input;
const CandidatesList = ({
    onViewDetail = () => {},
    onCancelInvitation = () => {},
    onRefer = () => {},
    code = '',
    status = '',
    jobDetail
}) => {
    // state
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        status: status
    });
    // fetchapi
    const [
        getJobCandidates,
        { data: dataCandidates, isSuccess: successGetJobCandidates }
    ] = candidates.endpoints.getJobCandidates.useLazyQuery({
        fixedCacheKey: 'getJobCandidates'
    });
    const [_, { isSuccess: successUpdateStatus, reset }] =
        useUpdateStatusJobCandidatesMutation({
            fixedCacheKey: 'statusJobCandidates'
        });
    const [getCountTask] = candidates.endpoints.countJob.useLazyQuery();
    const dataJobsList = async (newParams) => {
        await setParams({
            ...newParams
        });
        getJobCandidates({ code, ...newParams });
    };
    React.useEffect(() => {
        if (successUpdateStatus) {
            getJobCandidates({ code, ...params });
            getCountTask();
            reset();
        }
    }, [successUpdateStatus]);
    React.useEffect(() => {
        if (code) {
            getJobCandidates({ code, ...params });
        }
    }, [code]);
    return (
        <div style={{ minHeight: 300 }}>
            <Row style={{ marginTop: -64 }}>
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
                                jobDetail={jobDetail}
                                onRefer={onRefer}
                                status={status}
                                dataParent={item}
                                data={item.jobseeker}
                                onViewDetail={onViewDetail}
                                onCancelInvitation={onCancelInvitation}
                            />
                        </Col>
                    );
                })}
            </Row>
            {dataCandidates?.meta?.info?.total_page > 1 && (
                <PaginationTable
                    data={dataCandidates}
                    refetch={dataJobsList}
                    params={params}
                    showSizeChanger={false}
                />
            )}
        </div>
    );
};
export default CandidatesList;
