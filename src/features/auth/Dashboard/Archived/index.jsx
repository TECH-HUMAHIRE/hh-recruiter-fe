import { Card, Form, Input } from 'antd';
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

const Archived = () => {
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        status: 'rejected'
    });

    const [getJobInvitation, { data: jobInvitation, isSuccess }] =
        jobApi.endpoints.getTaskInvitation.useLazyQuery();
    const onViewDetail = () => {
        setDetailInfo(!isDetailInfo);
    };
    const onCancelInvitation = () => {
        setCancelInvitation(!isCancelInvitation);
    };
    React.useEffect(() => {
        getJobInvitation(params);
    }, []);
    React.useEffect(() => {
        if (isSuccess) {
            setItemTabs(
                jobInvitation?.data?.map((item) => {
                    return {
                        label: (
                            <div className="referred-tabs">
                                <div className="card-earn__price">
                                    <span>Earn</span>{' '}
                                    {formatMoney(item.commission)}
                                </div>
                                <div className="referred-card">
                                    <img src={companyDummy} alt="" />
                                    <div style={{ width: '100%' }}>
                                        <div className="referred-tabs__header">
                                            <div>
                                                <div className="referred-tabs__title">
                                                    {item.title}
                                                </div>
                                                <div className="referred-tabs__company">
                                                    PT Grab Indonesia
                                                </div>
                                                <div className="referred-tabs__city">
                                                    Jakarta, Indonesia
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
                                            Posted 11 Jun 2022 • Expired: 9 Jul
                                            2022
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                        key: `${item.id}`,
                        children: (
                            <CandidatesList
                                status="cancelled"
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
    }, [isSuccess]);
    return (
        <DashboardCandidatesStyle>
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
                </Col>
            </Row>
        </DashboardCandidatesStyle>
    );
};
export default Archived;
