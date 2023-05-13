import { Button, Card, Input, message } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { MyTaskStyle } from '../style';
// import EmptyJob from '../../../../components/EmptyJob';
import CardTask from '../../../../components/Card/CardTask';
import JobDetail from '../../../../components/Modal/JobDetail';
import ReferCandidates from '../../../../components/Modal/ReferCandidates';
import placeIcon from '../../../../components/Assets/icon/place.png';
import DeclineTask from '../../../../components/Modal/DeclineTask';
import {
    jobApi,
    useDeleteTaskMutation,
    useGetTaskListQuery
} from '../../../../app/actions/jobApi';
import PaginationTable from '../../../../components/PaginationTable';
import SelectOption from '../../../../components/Form/SelectOption';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import BagIcon from '../../../../components/Icon/Bag';
import debounce from '../../../../components/Utils/debounce';
import EmptyJob from '../../../../components/EmptyJob';
import SelectCompany from '../../../../components/SelectCompany';

const MyTask = () => {
    // state
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12
    });
    const [messageApi, contextHolder] = message.useMessage();
    const { data: taskList, refetch } = useGetTaskListQuery(params);
    const [isOpen, setOpen] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [isRefer, setRefer] = React.useState(false);
    const [isDecline, setDecline] = React.useState(false);

    // fetch api
    const [getTaskDetail, { data: taskDetail }] =
        jobApi.endpoints.getTaskId.useLazyQuery();
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

    // function
    const onDetailJob = (detail) => {
        setData(detail);
        setOpen(!isOpen);
        if (!isOpen) {
            getTaskDetail(detail.id);
        }
    };
    const onSearchJob = debounce(async (e) => {
        let value = e.target.value;
        await setParams({
            ...params,
            'job.title': value
        });
    }, 750);
    const onSearchJobByCompany = async (value) => {
        await setParams({
            ...params,
            ['company.name']: value
        });
    };
    const onReferCandidate = (data) => {
        setData(data);
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
            <div style={{ marginBottom: 20 }}>
                {taskList?.data?.length > 0 && (
                    <Row>
                        <Col lg={6}>
                            <Input
                                onChange={onSearchJob}
                                prefix={<SearchOutlined />}
                                size="large"
                                type={'text'}
                                placeholder="Search"
                            />
                        </Col>

                        <Col lg={6}>
                            <SelectCompany onChange={onSearchJobByCompany} />
                        </Col>
                        {/* <Col md={2} className="text-right">
                            <Button
                                block
                                size="large"
                                onClick={onOpenFilter}
                                className="message-filter"
                                icon={<FilterOutlined />}>
                                Filter
                            </Button>
                        </Col> */}
                    </Row>
                )}
            </div>
            <Row>
                <Col xl={12}>
                    {taskList?.data?.length > 0 ? (
                        <Card className="card-section">
                            {/* <EmptyJob /> */}
                            <Row>
                                {taskList?.data?.map((item, key) => {
                                    return (
                                        <Col md={4} key={key}>
                                            <CardTask
                                                onDeclineTask={onDeclineTask}
                                                onReferCandidate={
                                                    onReferCandidate
                                                }
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
                    ) : (
                        <Card>
                            <EmptyJob button={false} />
                        </Card>
                    )}
                </Col>
            </Row>

            <JobDetail
                onClose={onDetailJob}
                isOpen={isOpen}
                data={taskDetail?.data?.job}
            />
            <ReferCandidates
                data={data}
                isRefer={isRefer}
                onClose={onReferCandidate}
            />
            <DeclineTask
                isOpen={isDecline}
                onClose={onDeclineTask}
                onDeleteTask={onDeleteTask}
            />
        </MyTaskStyle>
    );
};
export default MyTask;
