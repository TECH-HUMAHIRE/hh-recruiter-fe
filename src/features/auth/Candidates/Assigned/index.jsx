import React from 'react';
import { useGetCandidatesAssignedListQuery } from '../../../../app/actions/candidates';
import CardCandidates from '../../../../components/Card/CardCandidates';
import { Col, Row } from '../../../../components/Grid';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import ReferCandidatesJobs from '../../../../components/Modal/ReferCandidatesJobs';
import RemoveCandidate from '../../../../components/Modal/RemoveCandidate';
import UnlockCandidates from '../../../../components/Modal/UnlockCandidates';
import PaginationTable from '../../../../components/PaginationTable';

const CandidatesAssigned = ({ status }) => {
    const [isFilter, setFilter] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    const [isRemove, setRemove] = React.useState(false);
    const [isUnlock, setUnlock] = React.useState(false);
    const [isDetail, setDetail] = React.useState(false);
    const [candidateDetail, setCandidateDetail] = React.useState(null);
    const [isReferJobList, setReferJobList] = React.useState(false);
    const [isReffered, setReffered] = React.useState(false);
    const { data, refetch } = useGetCandidatesAssignedListQuery(params);
    const onRevomeCandidate = () => {
        setRemove(!isRemove);
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
    const onFilterCandidates = () => {
        setFilter(!isFilter);
    };
    const onReferJobList = (value) => {
        setReferJobList(!isReferJobList);
        setDetail(false);
    };
    const onViewDetail = (candidates) => {
        setDetail(!isDetail);
        setReffered(false);
        setCandidateDetail(candidates);
    };
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetch();
    };
    return (
        <div>
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
                                onViewDetail={onViewDetail}
                                onRefer={handlerLockCandidates}
                                onRevomeCandidate={onRevomeCandidate}
                                data={item}
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
            <RemoveCandidate isOpen={isRemove} onClose={onRevomeCandidate} />
            <CandidateDetail
                isReffered={isReffered}
                data={candidateDetail}
                handlerReferCandidates={onReferJobList}
                open={isDetail}
                onClose={onViewDetail}
                handlerLockCandidates={handlerLockCandidates}
            />
            <ReferCandidatesJobs
                candidate={candidateDetail}
                onClose={onReferJobList}
                isOpen={isReferJobList}
            />
            <UnlockCandidates
                isOpen={isUnlock}
                onClose={handlerLockCandidates}
            />
        </div>
    );
};
export default CandidatesAssigned;
