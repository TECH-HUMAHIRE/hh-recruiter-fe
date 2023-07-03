import { Card, Form, Input } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { DashboardCandidatesStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';
import TabMenu from '../../../../components/Tabs';
import CandidatesList from '../../../../components/SectionCard/CandidatesList';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import { SearchOutlined } from '@ant-design/icons';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import CancelInvitation from '../../../../components/Modal/CancelInvitation';
import {
    jobApi,
    useUpdateStatusJobCandidatesMutation
} from '../../../../app/actions/jobApi';
import moment from 'moment';
import debounce from '../../../../components/Utils/debounce';
import PaginationTable from '../../../../components/PaginationTable';

const ReferredCandidates = () => {
    // state
    const [itemTabs, setItemTabs] = React.useState([]);

    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [candidateInfo, setCandidateInfo] = React.useState(null);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        status: 'accepted'
    });
    // fetch api
    const [
        updateStatusCandidate,
        { isSuccess: successUpdateStatus, reset, isLoading: loadingButton }
    ] = useUpdateStatusJobCandidatesMutation({
        fixedCacheKey: 'statusJobCandidates'
    });
    const [getJobInvitation, { data: jobInvitation, isSuccess }] =
        jobApi.endpoints.getTaskInvitation.useLazyQuery();
    // function
    const onViewDetail = (candidate) => {
        setCandidateInfo(candidate);
        setDetailInfo(!isDetailInfo);
    };
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        getJobInvitation(updateParams);
    };
    const onActionCancel = () => {
        let code = fullInfoStatusCandidates.code;
        const data = {
            status: 'cancelled'
        };
        updateStatusCandidate({ code, ...data });
    };
    const onSearchJob = debounce((e) => {
        let newParams = {
            ...params,
            title: e.target.value
        };
        getJobInvitation(newParams);
        setParams(newParams);
    }, 750);
    const onCancelInvitation = (candidates) => {
        setCancelInvitation(!isCancelInvitation);
    };
    React.useEffect(() => {
        getJobInvitation(params);
    }, []);
    React.useEffect(() => {
        if (successUpdateStatus) {
            getJobInvitation(params);
            setCancelInvitation(!isCancelInvitation);

            reset();
        }
    }, [successUpdateStatus]);
    React.useEffect(() => {
        if (jobInvitation) {
            setItemTabs(
                jobInvitation?.data?.map((item) => {
                    return {
                        label: (
                            <div className="referred-tabs">
                                <div className="card-earn__price">
                                    <span>Earn</span>{' '}
                                    {formatMoney(item?.commission)}
                                </div>
                                <div className="referred-card">
                                    <img src={item?.company?.logo_url} alt="" />
                                    <div style={{ width: '100%' }}>
                                        <div className="referred-tabs__header">
                                            <div>
                                                <div className="referred-tabs__title">
                                                    {item.title}
                                                </div>
                                                <div className="referred-tabs__company">
                                                    {item.company.name}
                                                </div>
                                                <div className="referred-tabs__city">
                                                    {
                                                        item?.sub_district
                                                            ?.district?.city
                                                            ?.province?.name
                                                    }
                                                    ,{' '}
                                                    {
                                                        item?.sub_district
                                                            ?.district?.city
                                                            ?.province?.country
                                                            ?.name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="referred-tabs__city">
                                            Posted{' '}
                                            {moment(item.created_at).format(
                                                'DD MMM YYYY'
                                            )}{' '}
                                            • Expired:{' '}
                                            {moment(item.expired_at).format(
                                                'DD MMM YYYY'
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                        key: item.id,
                        children: (
                            <CandidatesList
                                status="accepted"
                                onViewDetail={onViewDetail}
                                onCancelInvitation={onCancelInvitation}
                                code={item.code}
                                actionText="Unlock"
                            />
                        )
                    };
                })
            );
        }
    }, [jobInvitation]);
    return (
        <DashboardCandidatesStyle>
            {jobInvitation?.data?.length > 0 && (
                <Row>
                    <Col xl={4} lg={4} md={12}>
                        <Form.Item>
                            <Input
                                onChange={onSearchJob}
                                prefix={<SearchOutlined />}
                                size="large"
                                type={'text'}
                                placeholder="Search Job"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            )}

            <Row>
                <Col xl={12}>
                    {jobInvitation?.data?.length > 0 ? (
                        <TabMenu
                            item={itemTabs}
                            tabPosition="left"
                            // activeKey="188"
                        />
                    ) : (
                        <Card>
                            <EmptyJob button={false} />
                        </Card>
                    )}
                    {jobInvitation?.meta?.info?.count > 0 && (
                        <div className="job-pagination">
                            <PaginationTable
                                showSizeChanger={false}
                                data={jobInvitation}
                                refetch={onRefetchCandidates}
                                params={params}
                            />
                        </div>
                    )}
                </Col>
            </Row>
            <CandidateDetail
                isAssign
                open={isDetailInfo}
                data={candidateInfo}
                onClose={onViewDetail}
            />
            <CancelInvitation
                onActionCancel={onActionCancel}
                isOpen={isCancelInvitation}
                onClose={onCancelInvitation}
            />
        </DashboardCandidatesStyle>
    );
};
export default ReferredCandidates;
