import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import { useGetCandidatesListQuery } from '../../../../app/actions/candidates';
import Button from '../../../../components/Button';
import CardCandidates from '../../../../components/Card/CardCandidates';
import { Col, Row } from '../../../../components/Grid';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import FilterCandidates from '../../../../components/Modal/FilterCandidates';
import ReferCandidatesJobs from '../../../../components/Modal/ReferCandidatesJobs';
import UnlockCandidates from '../../../../components/Modal/UnlockCandidates';
import PaginationTable from '../../../../components/PaginationTable';
import debounce from '../../../../components/Utils/debounce';

const CandidatesSearch = () => {
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10
    });
    const [isFilter, setFilter] = React.useState(false);
    const [isDetail, setDetail] = React.useState(false);
    const [isReferJobList, setReferJobList] = React.useState(false);
    const [isUnlock, setUnlock] = React.useState(false);
    const [candidateDetail, setCandidateDetail] = React.useState(null);
    const { data, refetch } = useGetCandidatesListQuery(params);
    const onFilterCandidates = () => {
        setFilter(!isFilter);
    };
    const onViewDetail = (candidates) => {
        setDetail(!isDetail);
        // setCandidateDetail(candidates)
    };
    const handlerLockCandidates = (candidates) => {
        setUnlock(!isUnlock);
        setDetail(false);
    };
    const handleSearchCandidate = debounce(async (e) => {
        const value = e.target.value;
        await setParams({
            ...params,
            searchByName: value
        });
        refetch();
    }, 750);
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
                <Col md={2} className="text-right">
                    <Button
                        onClick={onFilterCandidates}
                        style={{ color: '#444444', borderColor: '#444444' }}
                        className="message-filter"
                        icon={<FilterOutlined />}>
                        Filter
                    </Button>
                </Col>
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
                handlerReferCandidates={onReferJobList}
                open={isDetail}
                onClose={onViewDetail}
                handlerLockCandidates={handlerLockCandidates}
            />
            <UnlockCandidates
                isOpen={isUnlock}
                onClose={handlerLockCandidates}
            />
            <ReferCandidatesJobs
                onClose={onReferJobList}
                isOpen={isReferJobList}
            />
        </div>
    );
};
export default CandidatesSearch;
