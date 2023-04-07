import { message } from 'antd';
import React from 'react';
import {
    useGetCandidatesUnlockListQuery,
    useReferCandidateMutation
} from '../../../../app/actions/candidates';
import CardCandidates from '../../../../components/Card/CardCandidates';
import { Col, Row } from '../../../../components/Grid';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import ReferCandidatesJobs from '../../../../components/Modal/ReferCandidatesJobs';
import PaginationTable from '../../../../components/PaginationTable';

const CandidatesUnlocked = ({ status }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    const [isFilter, setFilter] = React.useState(false);
    const [isDetail, setDetail] = React.useState(false);
    const [isSave, setSave] = React.useState(false);
    const [isReferJobList, setReferJobList] = React.useState(false);
    const [isUnlock, setUnlock] = React.useState(false);
    const [candidateDetail, setCandidateDetail] = React.useState(null);
    const { data, refetch } = useGetCandidatesUnlockListQuery(params);
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
    const onViewDetail = (candidates) => {
        setDetail(!isDetail);
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
    const onReferJobList = () => {
        setReferJobList(!isReferJobList);
        setDetail(!isDetail);
    };
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetch();
    };
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
                                data={item}
                                onViewDetail={onViewDetail}
                                onRefer={handlerLockCandidates}
                            />
                        </Col>
                    );
                })}
            </Row>
            {data?.meta?.info?.total_page > 1 && (
                <PaginationTable
                    data={data}
                    refetch={onRefetchCandidates}
                    params={params}
                />
            )}
            <CandidateDetail
                data={candidateDetail}
                handlerReferCandidates={onReferJobList}
                open={isDetail}
                onClose={onViewDetail}
                handlerLockCandidates={handlerLockCandidates}
            />
            <CandidateDetail
                data={candidateDetail}
                handlerReferCandidates={onReferJobList}
                open={isDetail}
                onClose={onViewDetail}
                handlerLockCandidates={handlerLockCandidates}
            />
            <ReferCandidatesJobs
                onClose={onReferJobList}
                isOpen={isReferJobList}
            />
        </div>
    );
};
export default CandidatesUnlocked;
