import { Dropdown, Input, message } from 'antd';
import React from 'react';
import { Col, Row } from '../../../components/Grid';
import { DashboardCandidatesStyle } from './job-list.style';
import EmptyJob from '../../../components/EmptyJob';
import TabMenu from '../../../components/Tabs';
import {
    formatMoney,
    formatNumber
} from '../../../components/Utils/formatMoney';
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
    useGetJobsListQuery,
    useGetTaskListQuery
} from '../../../app/actions/jobApi';
import moment from 'moment';
import convertEmployeType from '../../../components/Utils/convertEmployeType';
import debounce from '../../../components/Utils/debounce';
import PaginationTable from '../../../components/PaginationTable';
const DropdownMenu = ({ data, handleAddTask = () => {} }) => {
    const items = [
        {
            key: '1',
            label: (
                <CardMenu onClick={() => handleAddTask(data.id)}>
                    <img src={Bookmark} alt="" />
                    Add to My Task
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu>
                    <img src={ShareIcon} alt="" />
                    Refer
                </CardMenu>
            )
        }
    ];
    return (
        <Dropdown menu={{ items }} placement="bottomCenter" trigger="click">
            <MoreOutlined className="card-action" />
        </Dropdown>
    );
};
const Jobist = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [params, setParams] = React.useState({
        page: 1,
        page_size: 10,
        status: 'active'
    });
    const [isFilter, setFilter] = React.useState(false);
    const [itemTabs, setItemTabs] = React.useState([]);
    const [isDetailInfo, setDetailInfo] = React.useState(false);
    const [isCancelInvitation, setCancelInvitation] = React.useState(false);
    const { data: jobList, refetch: refetchJobList } =
        useGetJobsListQuery(params);
    const { refetch } = useGetTaskListQuery();
    const [addMyTask, response] = useAddTaskMutation();
    const onViewDetail = () => {
        setDetailInfo(!isDetailInfo);
    };
    const onOpenFilter = () => {
        setFilter(!isFilter);
    };
    const onCancelInvitation = () => {
        setCancelInvitation(!isCancelInvitation);
    };
    const handleAddTask = (id) => {
        addMyTask({
            job_id: id
        });
    };
    const onRefetchCandidates = async (updateParams) => {
        await setParams(updateParams);
        refetchJobList();
    };
    const onSearchJob = debounce(async (e) => {
        let value = e.target.value;
        await setParams({
            ...params,
            title: value
        });
        refetchJobList();
    }, 750);
    React.useEffect(() => {
        if (jobList) {
            setItemTabs(
                jobList.data.map((item) => {
                    return {
                        label: (
                            <div className="job-tabs">
                                <div className="card-earn__price">
                                    <span>Earn</span>{' '}
                                    {formatMoney(item.commission)}
                                </div>
                                <div className="job-card">
                                    <img
                                        src={
                                            item.company.photo_profile ||
                                            companyDummy
                                        }
                                        alt=""
                                    />
                                    <div style={{ width: '100%' }}>
                                        <div className="job-tabs__header">
                                            <div>
                                                <div className="job-tabs__title">
                                                    {item.title}
                                                </div>
                                                <div className="job-tabs__company">
                                                    {item.company.name}
                                                </div>
                                                <div className="job-tabs__city">
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
                                            <DropdownMenu
                                                data={item}
                                                handleAddTask={handleAddTask}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="job-tabs__city">
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
    }, [jobList]);
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
            refetch();
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
                                    onChange={onSearchJob}
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
                                            alt=""
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
                        <>
                            {/* <div className="job-count">
                                <b>
                                    {params.page === 1
                                        ? params.page
                                        : (params.page - 1) * 10 +
                                          params.page -
                                          1}{' '}
                                    - {jobList?.data?.length * params.page}
                                </b>{' '}
                                of{' '}
                                {formatNumber(jobList?.meta?.info?.total_data)}{' '}
                                jobs
                            </div> */}
                            <TabMenu item={itemTabs} tabPosition="left" />
                        </>
                    ) : (
                        <EmptyJob button={false} />
                    )}
                    {jobList?.meta?.info?.count > 0 && (
                        <div className="job-pagination">
                            <PaginationTable
                                showSizeChanger={false}
                                data={jobList}
                                refetch={onRefetchCandidates}
                                params={params}
                            />
                        </div>
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
