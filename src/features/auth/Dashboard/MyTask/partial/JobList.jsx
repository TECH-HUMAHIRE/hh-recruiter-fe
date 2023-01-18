import React from 'react';
import CardJob from '../../../../../components/Card/CardJob';
import { Col, Row } from '../../../../../components/Grid';
import PreviewPostJob from '../../../../../components/Modal/PreviewPostJob';
import EditJob from '../../../../../components/Modal/EditJob';
import DeleteJob from '../../../../../components/Modal/DeleteJob';
import EmptyJob from '../../../../../components/EmptyJob';
import {
    dashboardApi,
    useDeleteJobMutation
} from '../../../../../app/actions/dashboardApi';
import { useUpdateJobMutation } from '../../../../../app/actions/jobsApi';
import { dataUpdateJob } from '../../../../../helper';
import InfiniteScroll from '../../../../../components/InfiniteScroll';
import { Spin, Skeleton } from 'antd';
const JobList = ({
    textSubmit = 'Save changes',
    action = [],
    statusJobs = ''
}) => {
    const [isPreview, setPreview] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12
    });
    const [
        updateJob,
        { isSuccess: successUpdateJob } // This is the mutation trigger
    ] = useUpdateJobMutation({ fixedCacheKey: 'updateJobAction' });
    const [detail, setDetail] = React.useState(null);
    const [isEdit, setEdit] = React.useState(false);
    const [isDelete, setDelete] = React.useState(false);

    const [getJobList, { data: jobList, isLoading }] =
        dashboardApi.endpoints.getJobList.useLazyQuery();
    const [getJobDetail, { data: jobDetail, isSuccess: successGetDetail }] =
        dashboardApi.endpoints.getJobDetail.useLazyQuery();
    const [
        deleteJob,
        { isSuccess: successDeleteJob } // This is the mutation trigger
    ] = useDeleteJobMutation({
        fixedCacheKey: 'deleteJobList'
    });
    const dataJobsList = (params) => {
        switch (statusJobs) {
            case 'draft':
                return getJobList({
                    ...params,
                    status: 'draft'
                });
            case 'pause':
                return getJobList({
                    ...params,
                    status: 'paused'
                });
            case 'archive':
                return getJobList({
                    ...params,
                    status: 'archived'
                });
            default:
                return getJobList({ ...params });
        }
    };
    const onPreview = (job) => {
        setPreview(true);
        setDetail(job);
        setEdit(false);
        if (isPreview) {
            setDetail(null);
            setPreview(false);
        }
    };
    const onEdit = (job) => {
        setEdit(!isEdit);
        setDetail(job);
        if (!isEdit) {
            getJobDetail(job.code);
        }
    };
    const onCloseEdit = (job) => {
        setEdit(false);
        setDetail(null);
    };
    const onDelete = (job) => {
        setDelete(!isDelete);
        setDetail(job);
    };
    const onPause = (job) => {
        const id = job.code;

        updateJob({ id, ...dataUpdateJob(job, 'paused') });
    };
    const onResume = (job) => {
        const id = job.code;

        updateJob({ id, ...dataUpdateJob(job, 'active') });
    };
    const onScrollLoad = () => {
        if (params.page_size <= jobList.meta.info.count) {
            setParams({
                page: 1,
                page_size: params.page_size + 12
            });

            dataJobsList({
                page: 1,
                page_size: params.page_size + 12
            });
        }
    };

    const onPost = () => {
        const id = detail.code;
        updateJob({ id, ...dataUpdateJob(detail, 'active') });
    };
    const onDeleteJob = () => {
        deleteJob(detail.code);
    };
    React.useEffect(() => {
        dataJobsList(params);
    }, []);
    React.useEffect(() => {
        if (successUpdateJob) {
            dataJobsList(params);
            setPreview(false);
        }
    }, [successUpdateJob]);
    React.useEffect(() => {
        if (successDeleteJob) {
            dataJobsList(params);
            setDelete(false);
        }
    }, [successDeleteJob]);
    return (
        <InfiniteScroll
            threshold={10}
            isLoading={isLoading}
            onLoadData={onScrollLoad}
            hasMore={false}
            loadingComponent={
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                    <Spin />
                </div>
            }>
            {isLoading ? (
                <Row>
                    <Col md={3}>
                        <Skeleton active />
                    </Col>
                    <Col md={3}>
                        <Skeleton active />
                    </Col>
                    <Col md={3}>
                        <Skeleton active />
                    </Col>
                    <Col md={3}>
                        <Skeleton active />
                    </Col>
                </Row>
            ) : jobList?.data?.length > 0 ? (
                <Row>
                    {jobList.data.map((item, key) => {
                        return (
                            <Col md={3} key={key}>
                                <CardJob
                                    job={item}
                                    action={action}
                                    onPreview={onPreview}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                    onPause={onPause}
                                    onResume={onResume}
                                />
                            </Col>
                        );
                    })}
                </Row>
            ) : (
                <EmptyJob />
            )}

            <PreviewPostJob
                data={detail}
                isOpen={isPreview}
                isPreview={true}
                onClose={onPreview}
                onPost={onPost}
            />
            <EditJob
                dataJobsList={dataJobsList}
                params={params}
                isSuccess={successGetDetail}
                textSubmit={textSubmit}
                onClose={onCloseEdit}
                open={isEdit}
                data={jobDetail?.data}
                onCloseModal={onEdit}
                setEdit={setEdit}
                onPreview={onPreview}
            />
            <DeleteJob
                onDeleteJob={onDeleteJob}
                isOpen={isDelete}
                onClose={onDelete}
            />
        </InfiniteScroll>
    );
};
export default JobList;
