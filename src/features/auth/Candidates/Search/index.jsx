import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Form, Input, message } from 'antd';
import React from 'react';
import {
    useGetCandidatesListQuery,
    useReferCandidateMutation,
    useSaveCandidateMutation,
    useUnlockCandidateMutation
} from '../../../../app/actions/candidates';
import Button from '../../../../components/Button';
import CardCandidates from '../../../../components/Card/CardCandidates';
import { Col, Row } from '../../../../components/Grid';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import FilterCandidates from '../../../../components/Modal/FilterCandidates';
import ReferCandidatesJobs from '../../../../components/Modal/ReferCandidatesJobs';
import SaveCandidate from '../../../../components/Modal/SaveCandidate';
import UnlockCandidates from '../../../../components/Modal/UnlockCandidates';
import PaginationTable from '../../../../components/PaginationTable';
import debounce from '../../../../components/Utils/debounce';

const CandidatesSearch = ({ status }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    const [isReffered, setReffered] = React.useState(false);
    const [isFilter, setFilter] = React.useState(false);
    const [isDetail, setDetail] = React.useState(false);
    const [isSave, setSave] = React.useState(false);
    const [isReferJobList, setReferJobList] = React.useState(false);
    const [isUnlock, setUnlock] = React.useState(false);
    const [candidateDetail, setCandidateDetail] = React.useState(null);
    const { data, refetch } = useGetCandidatesListQuery(params);
    const [saveCandidate, { isSuccess, reset, isLoading, data: response }] =
        useSaveCandidateMutation();
    const [
        unLockCandidate,
        {
            isSuccess: successUnlock,
            reset: resetUnlock,
            isLoading: loadingUnlock,
            data: responseUnlock
        }
    ] = useUnlockCandidateMutation();
    const [
        _,
        {
            isSuccess: successRefer,
            data: responseRefer,
            reset: resetResponseRefer
        }
    ] = useReferCandidateMutation({ fixedCacheKey: 'refer_candidate' });
    const onFilterCandidates = () => {
        setFilter(!isFilter);
    };
    const onSaveCandidate = (data) => {
        setCandidateDetail(data);
        setSave(!isSave);
    };
    const onAction = () => {
        saveCandidate({ jobseeker_id: candidateDetail.id });
    };
    const handleUnlockCandidate = () => {
        unLockCandidate({ jobseeker_id: candidateDetail.id });
    };
    const onViewDetail = (candidates) => {
        setDetail(!isDetail);
        setReffered(false);
        setCandidateDetail(candidates);
    };
    const handlerLockCandidates = (candidates) => {
        setCandidateDetail(candidates);
        if (!candidates.is_unlocked) {
            setUnlock(!isUnlock);
            setDetail(false);
        } else {
            setReferJobList(true);
        }
    };
    const handleSearchCandidate = debounce(async (e) => {
        const value = e.target.value;
        await setParams({
            ...params,
            name: value
        });
    }, 750);
    const onReferJobList = () => {
        setReferJobList(!isReferJobList);
        setDetail(false);
    };
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetch();
    };
    React.useEffect(() => {
        if (isSuccess) {
            setSave(!isSave);
            messageApi.open({
                type: 'success',
                content: response?.meta?.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            reset();
        }
    }, [isSuccess]);
    React.useEffect(() => {
        if (successUnlock) {
            setReffered(true);
            setDetail(!isDetail);
            setUnlock(!isUnlock);
            refetch();
            resetUnlock();
        }
    }, [successUnlock]);
    React.useEffect(() => {
        if (successRefer) {
            setReferJobList(false);
            messageApi.open({
                type: 'success',
                content: responseRefer.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            resetResponseRefer();
        }
    }, [successRefer]);
    return (
        <div>
            {contextHolder}
            <Row justify="space-between">
                <Col md={4}>
                    <Form.Item>
                        <Input
                            onChange={handleSearchCandidate}
                            prefix={<SearchOutlined />}
                            size="large"
                            type={'text'}
                            placeholder="Search Candidates"
                        />
                    </Form.Item>
                </Col>
                {/* <Col md={2} className="text-right">
                    <Button
                        onClick={onFilterCandidates}
                        style={{ color: '#444444', borderColor: '#444444' }}
                        className="message-filter"
                        icon={<FilterOutlined />}>
                        Filter
                    </Button>
                </Col> */}
            </Row>
            <Row>
                {data?.data?.map((item, key) => {
                    return (
                        <Col
                            xl={4}
                            lg={4}
                            md={6}
                            sm={12}
                            key={key}
                            style={{ marginBottom: 30 }}>
                            <CardCandidates
                                status={status}
                                onRefer={handlerLockCandidates}
                                onSaveCandidate={onSaveCandidate}
                                onViewDetail={onViewDetail}
                                data={item}
                            />
                        </Col>
                    );
                })}
            </Row>
            {data?.meta?.info?.count > 0 && (
                <PaginationTable
                    data={data}
                    refetch={onRefetchCandidates}
                    params={params}
                />
            )}
            <FilterCandidates isOpen={isFilter} onClose={onFilterCandidates} />
            <CandidateDetail
                isReffered={isReffered}
                data={candidateDetail}
                handlerReferCandidates={onReferJobList}
                open={isDetail}
                onClose={onViewDetail}
                handlerLockCandidates={handlerLockCandidates}
            />
            <UnlockCandidates
                unLockCandidate={handleUnlockCandidate}
                isOpen={isUnlock}
                onClose={handlerLockCandidates}
            />
            <ReferCandidatesJobs
                candidate={candidateDetail}
                onClose={onReferJobList}
                isOpen={isReferJobList}
            />
            <SaveCandidate
                isOpen={isSave}
                onClose={onSaveCandidate}
                onAction={onAction}
            />
        </div>
    );
};
export default CandidatesSearch;
