import { Card, Form, Input, message } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { DashboardCandidatesStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';
import TabMenu from '../../../../components/Tabs';
import companyDummy from '../../../../components/Assets/icon/company-dummy.png';
import { jobApi } from '../../../../app/actions/jobApi';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import CandidatesList from '../../../../components/SectionCard/CandidatesList';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import ReferCandidatesJobs from '../../../../components/Modal/ReferCandidatesJobs';
import { useReferCandidateMutation } from '../../../../app/actions/candidates';
import moment from 'moment';
import PaginationTable from '../../../../components/PaginationTable';

const Archived = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [candidateInfo, setCandidateInfo] = React.useState(null);
    const [isReferJobList, setReferJobList] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        status: 'rejected'
    });
    const [
        _,
        {
            isSuccess: successRefer,
            data: responseRefer,
            reset: resetResponseRefer
        }
    ] = useReferCandidateMutation({ fixedCacheKey: 'refer_candidate' });
    const [getJobInvitation, { data: jobInvitation, isSuccess }] =
        jobApi.endpoints.getTaskInvitation.useLazyQuery();
    const onViewDetail = (candidate) => {
        setCandidateInfo(candidate);
        setDetailInfo(!isDetailInfo);
    };
    const onReferJobList = (candidate) => {
        setCandidateInfo(candidate);
        setReferJobList(!isReferJobList);
        setDetailInfo(false);
    };
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        getJobInvitation(updateParams);
    };
    const handlerLockCandidates = (candidates) => {
        setCandidateInfo(candidates);
        if (!candidates.is_unlocked) {
            setUnlock(!isUnlock);
            setDetail(false);
        } else {
            setReferJobList(true);
        }
    };
    const onCancelInvitation = () => {
        setCancelInvitation(!isCancelInvitation);
    };
    React.useEffect(() => {
        getJobInvitation(params);
    }, []);
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
                                            {/* <Dropdown
                                            menu={[]}
                                            placement="bottomCenter"
                                            trigger="click"> */}
                                            <MoreOutlined className="card-action" />
                                            {/* </Dropdown> */}
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
                        key: `${item.id}`,
                        children: (
                            <CandidatesList
                                onRefer={onReferJobList}
                                status="rejected"
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
        <DashboardCandidatesStyle>
            {contextHolder}
            {jobInvitation?.data?.length > 0 && (
                <Row>
                    <Col xl={3} lg={3} md={12}>
                        <Form.Item>
                            <Input
                                prefix={<SearchOutlined />}
                                size="large"
                                type={'text'}
                                placeholder="Search Candidates"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            )}
            <Row>
                <Col xl={12}>
                    {jobInvitation?.data?.length > 0 ? (
                        <TabMenu
                            // defaultActiveKey={paramsUrl.get('id')}
                            item={itemTabs}
                            tabPosition="left"
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
                open={isDetailInfo}
                data={candidateInfo}
                onClose={onViewDetail}
            />
            <ReferCandidatesJobs
                candidate={candidateInfo}
                onClose={onReferJobList}
                isOpen={isReferJobList}
            />
        </DashboardCandidatesStyle>
    );
};
export default Archived;
