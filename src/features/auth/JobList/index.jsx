import { Dropdown, Input, message } from 'antd';
import React from 'react';
import { Col, Row } from '../../../components/Grid';
import { DashboardCandidatesStyle } from './job-list.style';
import EmptyJob from '../../../components/EmptyJob';
import TabMenu from '../../../components/Tabs';
import { formatMoney } from '../../../components/Utils/formatMoney';
import {
    FilterOutlined,
    MoreOutlined,
    SearchOutlined
} from '@ant-design/icons';
import CandidateDetail from '../../../components/Modal/CandidateDetail';
import CancelInvitation from '../../../components/Modal/CancelInvitation';
import moneyIcon from '../../../components/Assets/icon/money.png';
import unionIcon from '../../../components/Assets/icon/union.png';
import SectionDetail from './partial/SectionDetail';
import Bookmark from '../../../components/Assets/icon/Bookmark.png';
import ShareIcon from '../../../components/Assets/icon/share.png';
import { CardMenu } from '../../../components/Card/card.style';
import Button from '../../../components/Button';
import placeIcon from '../../../components/Assets/icon/place.png';
import SelectOption from '../../../components/Form/SelectOption';
import companyDummy from '../../../components/Assets/images/defaultImage.png';
import BagIcon from '../../../components/Icon/Bag';
import FilterJobList from '../../../components/Modal/FilterJobList';
import {
    useAddTaskMutation,
    useGetJobsListQuery
} from '../../../app/actions/jobApi';
import moment from 'moment';
import convertEmployeType from '../../../components/Utils/convertEmployeType';

const Jobist = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { data: jobList, isSuccess } = useGetJobsListQuery({
        status: 'active'
    });
    const [addMyTask, response] = useAddTaskMutation();
    const actionDropdown = [
        {
            key: '1',
            label: (
                <CardMenu
                    onClick={(item, data) =>
                        handleAddTask(console.log('item', item, 'data', data))
                    }>
                    <img src={Bookmark} alt="" />
                    Add to My Task
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu onClick={() => onDetailJob(job)}>
                    <img src={ShareIcon} alt="" />
                    Refer
                </CardMenu>
            )
        }
    ];
    const [isFilter, setFilter] = React.useState(false);
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const onViewDetail = (data) => {
        setDetailInfo(!isDetailInfo);
    };
    const onOpenFilter = () => {
        setFilter(!isFilter);
    };
    const onCancelInvitation = (data) => {
        setCancelInvitation(!isCancelInvitation);
    };
    const handleAddTask = (id) => {
        addMyTask({
            job_id: id
        });
    };
    React.useEffect(() => {
        if (isSuccess) {
            setItemTabs(
                jobList.data.map((item, key) => {
                    return {
                        label: (
                            <div className="referred-tabs">
                                <div className="card-earn__price">
                                    <span>Earn</span> {formatMoney(2000000)}
                                </div>
                                <div className="referred-card">
                                    <img
                                        src={
                                            item.company.photo_profile ||
                                            companyDummy
                                        }
                                        alt=""
                                    />
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
                                                        item.sub_district
                                                            .district.city
                                                            .province.name
                                                    }
                                                    ,{' '}
                                                    {
                                                        item.sub_district
                                                            .district.city
                                                            .province.country
                                                            .name
                                                    }
                                                </div>
                                            </div>
                                            <Dropdown
                                                menu={{ actionDropdown }}
                                                placement="bottomCenter"
                                                trigger="click">
                                                <MoreOutlined className="card-action" />
                                            </Dropdown>
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
                                <div className="card-status">
                                    <img src={moneyIcon} alt="" />{' '}
                                    <span>
                                        {formatMoney(item.rate_start)} -{' '}
                                        {formatMoney(item.rate_end)}/ Month
                                    </span>
                                </div>
                                <div className="card-status">
                                    <img src={unionIcon} alt="" />{' '}
                                    <span>
                                        {convertEmployeType(
                                            item.employment_type
                                        )}
                                    </span>
                                </div>
                            </div>
                        ),
                        key: `${item.id}`,
                        children: (
                            <SectionDetail
                                data={item}
                                handleAddTask={handleAddTask}
                            />
                        )
                    };
                })
            );
        }
    }, [isSuccess]);
    React.useEffect(() => {
        if (response.isSuccess) {
            messageApi.open({
                type: 'success',
                content: response.data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
        }
        if (response.isError) {
            messageApi.open({
                type: 'error',
                content: response.error.data.meta.message,
                style: {
                    marginTop: '15vh'
                },
                duration: 2
            });
            console.log('response', response.error);
        }
    }, [response]);
    return (
        <DashboardCandidatesStyle>
            {contextHolder}
            <h2 className="title">Job List</h2>
            <div style={{ marginBottom: 30 }}>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col lg={4}>
                                <Input
                                    prefix={<SearchOutlined />}
                                    size="large"
                                    type={'text'}
                                    placeholder="Product Designer"
                                />
                            </Col>
                            <Col lg={4}>
                                <Input
                                    prefix={
                                        <img
                                            style={{ width: 20 }}
                                            src={placeIcon}
                                            atl={''}
                                        />
                                    }
                                    size="large"
                                    type={'text'}
                                    placeholder="Location"
                                />
                            </Col>
                            <Col lg={4}>
                                <SelectOption
                                    placeholder="Choose company industry"
                                    options={[]}
                                    frontIcon={<BagIcon color="#666666" />}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} className="text-right">
                        <Button
                            onClick={onOpenFilter}
                            className="message-filter"
                            icon={<FilterOutlined />}>
                            Filter
                        </Button>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xl={12}>
                    {itemTabs?.length > 0 ? (
                        <TabMenu item={itemTabs} tabPosition="left" />
                    ) : (
                        <EmptyJob button={false} />
                    )}
                </Col>
            </Row>
            <CandidateDetail open={isDetailInfo} onClose={onViewDetail} />
            <CancelInvitation
                isOpen={isCancelInvitation}
                onClose={onCancelInvitation}
            />
            <FilterJobList isOpen={isFilter} onClose={onOpenFilter} />
        </DashboardCandidatesStyle>
    );
};
export default Jobist;
