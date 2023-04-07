import { Card, Form, Input, Skeleton } from 'antd';
import React from 'react';
import companyDummy from '../../../components/Assets/images/defaultImage.png';
import Style from './refer-candidates-job.style';
import { useGetTaskListQuery } from '../../../app/actions/jobApi';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Col, Row } from '../../Grid';
import Button from '../../Button';
import PaginationTable from '../../PaginationTable';
import { useReferCandidateMutation } from '../../../app/actions/candidates';

const ReferCandidatesJobs = ({
    onClose = () => {},
    isOpen = false,
    candidate = null
}) => {
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 5
    });
    const [jobId, setJobId] = React.useState(null);
    const { data: jobList, refetch: refetchJobList } =
        useGetTaskListQuery(params);
    const [referCandidate, { reset, isLoading: loadingRefer, isError }] =
        useReferCandidateMutation({ fixedCacheKey: 'refer_candidate' });
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetchJobList();
    };
    const handleChooseTask = (e) => {
        if (e.target.checked) {
            setJobId(Number(e.target.value));
        } else {
            setJobId(null);
        }
    };
    const handleSendRefer = (values) => {
        let data = {
            ...values,
            job_id: jobId,
            jobseeker_id: candidate.id
        };
        referCandidate(data);
    };
    React.useEffect(() => {
        if (isError) {
            messageApi.open({
                type: 'error',
                content: responseRefer.data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            reset();
        }
    }, [isError]);
    return (
        <Style
            title="Refer Candidates"
            open={isOpen}
            footer={null}
            onCancel={onClose}
            width={720}>
            <Form onFinish={handleSendRefer}>
                <Card style={{ marginBottom: 15 }}>
                    <div className="job">
                        {jobList?.data?.map((item, key) => {
                            return (
                                <Form.Item
                                    name={'job_id'}
                                    valuePropName="checked">
                                    <div className="job-card" key={key}>
                                        <Checkbox
                                            value={item?.job?.id}
                                            onChange={handleChooseTask}
                                        />
                                        <img
                                            src={
                                                item?.job?.company?.logo_url ||
                                                companyDummy
                                            }
                                            alt=""
                                        />
                                        <div style={{ width: '100%' }}>
                                            <div className="job-tabs__header">
                                                <div>
                                                    <div className="job-tabs__title">
                                                        {item?.job?.title}
                                                    </div>
                                                    <div className="job-tabs__company">
                                                        {
                                                            item?.job?.company
                                                                ?.name
                                                        }
                                                    </div>
                                                    <div className="job-tabs__city">
                                                        {
                                                            item?.job
                                                                ?.sub_district
                                                                ?.district?.city
                                                                ?.province?.name
                                                        }
                                                        ,{' '}
                                                        {
                                                            item?.job
                                                                ?.sub_district
                                                                ?.district?.city
                                                                ?.province
                                                                .country?.name
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form.Item>
                            );
                        })}
                        {/* {isLoading ? (
                        <div className="job-card">
                            <Skeleton.Image style={{ marginRight: 10 }} />
                            <div style={{ width: '100%' }}>
                                <div className="job-tabs__header">
                                    <div>
                                        <div className="job-tabs__title">
                                            <Skeleton.Input />
                                        </div>
                                        <div className="job-tabs__company">
                                            <Skeleton.Input />
                                        </div>
                                        <div className="job-tabs__city">
                                            <Skeleton.Input />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        
                    )} */}
                    </div>
                </Card>
                {jobList?.meta?.info?.total_page > 1 && (
                    <div className="job-pagination">
                        <PaginationTable
                            showSizeChanger={false}
                            data={jobList}
                            refetch={onRefetchCandidates}
                            params={params}
                        />
                    </div>
                )}
                <h4>
                    <b>Note for Job Seeker:</b>
                </h4>
                <Form.Item name={'message'}>
                    <Input
                        placeholder="What do you want to say?"
                        size="large"
                    />
                </Form.Item>
                <Row justify="end">
                    <Col xl={3}>
                        <Button
                            color="outline-primary"
                            block
                            size="large"
                            onClick={onClose}>
                            Cancel
                        </Button>
                    </Col>
                    <Col xl={3}>
                        <Button
                            loading={loadingRefer}
                            color="primary"
                            block
                            size="large"
                            htmlType="submit">
                            Send Refer
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Style>
    );
};
export default ReferCandidatesJobs;
