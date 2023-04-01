import { message } from 'antd';
import React from 'react';
import { useGetCandidatesUnlockListQuery } from '../../../../app/actions/candidates';
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
    const onFilterCandidates = () => {
        setFilter(!isFilter);
    };
    const onSaveCandidate = (data) => {
        console.log(data);
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
        setUnlock(!isUnlock);
        setDetail(false);
    };
    const onReferJobList = () => {
        setReferJobList(!isReferJobList);
        setDetail(!isDetail);
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
                        <Col xl={4} lg={4} md={6} sm={12} key={key}>
                            <CardCandidates
                                status={status}
                                data={item}
                                onViewDetail={onViewDetail}
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
