import { Card, Form, Input, Modal, Skeleton } from 'antd';
import React from 'react';
import companyDummy from '../../../components/Assets/images/defaultImage.png';
import Style from './refer-candidates-job.style';
import {
    useGetJobsListQuery,
    useGetTaskListQuery
} from '../../../app/actions/jobApi';
import CheckBoxForm from '../../Form/Checkbox';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Col, Row } from '../../Grid';
import Button from '../../Button';
import PaginationTable from '../../PaginationTable';

const ReferCandidatesJobs = ({ onClose = () => {}, isOpen = false }) => {
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 5
    });
    const {
        data: jobList,
        isLoading,
        refetch: refetchJobList
    } = useGetTaskListQuery(params);
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetchJobList();
    };
    React.useEffect(() => {
        refetchJobList();
    }, []);
    return (
        <Style
            title="Refer Candidates"
            open={isOpen}
            footer={null}
            onCancel={onClose}
            width={720}>
            <Card style={{ marginBottom: 15 }}>
                <div className="job">
                    {isLoading ? (
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
                        jobList?.data.map((item, key) => {
                            return (
                                <div className="job-card" key={key}>
                                    <Checkbox />
                                    <img
                                        src={
                                            item.job.company.logo_url ||
                                            companyDummy
                                        }
                                        alt=""
                                    />
                                    <div style={{ width: '100%' }}>
                                        <div className="job-tabs__header">
                                            <div>
                                                <div className="job-tabs__title">
                                                    {item.job.title}
                                                </div>
                                                <div className="job-tabs__company">
                                                    {item.job.company.name}
                                                </div>
                                                <div className="job-tabs__city">
                                                    {
                                                        item.job.sub_district
                                                            ?.district?.city
                                                            ?.province?.name
                                                    }
                                                    ,{' '}
                                                    {
                                                        item.job.sub_district
                                                            ?.district?.city
                                                            ?.province.country
                                                            ?.name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </Card>
            {jobList?.meta?.info?.count > 0 && (
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
            <Form.Item>
                <Input placeholder="What do you want to say?" size="large" />
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
                    <Button color="primary" block size="large">
                        Send Refer
                    </Button>
                </Col>
            </Row>
        </Style>
    );
};
export default ReferCandidatesJobs;
