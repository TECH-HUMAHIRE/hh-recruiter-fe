import { Card, Form, Input } from 'antd';
import React from 'react';
import { Col, Row } from '../../../../components/Grid';
import { DashboardCandidatesStyle } from '../style';
import EmptyJob from '../../../../components/EmptyJob';
import TabMenu from '../../../../components/Tabs';
import CandidatesList from '../../../../components/SectionCard/CandidatesList';
import { formatMoney } from '../../../../components/Utils/formatMoney';
import companyDummy from '../../../../components/Assets/icon/company-dummy.png';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import CandidateDetail from '../../../../components/Modal/CandidateDetail';
import CancelInvitation from '../../../../components/Modal/CancelInvitation';
import { useGetTaskInvitationQuery } from '../../../../app/actions/jobApi';

const InviteCandidates = () => {
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const [params, setParams] = React.useState({
        page: 1,
        page_size: 12,
        status: 'invited'
    });
    const { data: jobInvitation } = useGetTaskInvitationQuery(params);

    const onViewDetail = () => {
        setDetailInfo(!isDetailInfo);
    };
    const onCancelInvitation = () => {
        setCancelInvitation(!isCancelInvitation);
    };
    React.useEffect(() => {
        setItemTabs(
            jobInvitation?.data?.map((item) => {
                return {
                    label: (
                        <div className="referred-tabs">
                            <div className="card-earn__price">
                                <span>Earn</span> {formatMoney(2000000)}
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
                                                {item.company.name}
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
                                        Posted 11 Jun 2022 • Expired: 9 Jul 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),
                    key: `${item.id}`,
                    children: (
                        <CandidatesList
                            onViewDetail={onViewDetail}
                            onCancelInvitation={onCancelInvitation}
                            code={item.code}
                            actionText="Unlock"
                        />
                    )
                };
            })
        );
    }, []);
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
                        <TabMenu item={itemTabs} tabPosition="left" />
                    ) : (
                        <Card>
                            <EmptyJob button={false} />
                        </Card>
                    )}
                </Col>
            </Row>
            <CandidateDetail open={isDetailInfo} onClose={onViewDetail} />
            <CancelInvitation
                isOpen={isCancelInvitation}
                onClose={onCancelInvitation}
            />
        </DashboardCandidatesStyle>
    );
};
export default InviteCandidates;
