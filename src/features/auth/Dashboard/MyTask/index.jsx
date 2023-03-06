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
import PaginationTable from '../../../../components/PaginationTable';

const MyTask = () => {
    const [
        deleteTask,
        {
            isSuccess: successDeleted,
            reset,
            data: responseDelete,
            isError,
            error
        }
    ] = useDeleteTaskMutation();
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    const [messageApi, contextHolder] = message.useMessage();
    const { data: taskList, refetch } = useGetTaskListQuery(params);
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
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetch();
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
        if (isError) {
            console.log('responseDelete', error);
            messageApi.open({
                type: 'error',
                content: error.data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            reset();
        }
    }, [successDeleted, isError]);
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
                        {taskList?.meta?.info?.count > 0 && (
                            <PaginationTable
                                data={taskList}
                                refetch={onRefetchCandidates}
                                params={params}
                                showSizeChanger={false}
                            />
                        )}
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
