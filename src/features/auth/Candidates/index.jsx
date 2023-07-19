import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
    useGetCandidatesListQuery,
    useGetCountCandidatesQuery
} from '../../../app/actions/candidates';
import TabMenu from '../../../components/Tabs';
import CandidatesAssigned from './Assigned';
import CandidatesSaved from './Saved';
import CandidatesSearch from './Search';
import CandidatesUnlocked from './Unlocked';
const CandidatesLayout = () => {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const { search } = useLocation();
    const [activeTab, setActiveTab] = React.useState(false);
    const [items, setItems] = React.useState([
        {
            label: `Search`,
            key: 'search',
            children: <CandidatesSearch status="search" />
        },
        {
            label: `Assigned`,
            key: 'assigned',
            children: <CandidatesAssigned status="assigned" />
        },
        {
            label: `Saved`,
            key: 'saved',
            children: <CandidatesSaved status="saved" />
        },
        {
            label: `Unlocked`,
            key: 'unlocked',
            children: <CandidatesUnlocked status="unlocked" />
        }
    ]);
    const { data: count } = useGetCountCandidatesQuery();
    const { data } = useGetCandidatesListQuery();
    const handleOnChangeTab = (key) => {
        navigate(`?tab=${key}`);
    };
    const onGetSearchParamsData = (tabValue) => {
        let currentTab = 'search';
        if (tabValue) {
            currentTab = tabValue;
        }
        setActiveTab(currentTab);
    };

    React.useEffect(() => {
        onGetSearchParamsData(searchParams.get('tab'));
    }, [search]);
    React.useEffect(() => {
        if (count || data) {
            setItems(
                items.map((item) => {
                    return {
                        ...item,
                        label:
                            item.key !== 'search'
                                ? `${item.key} (${count?.data[item.key]})`
                                : `${item.key} (${data?.meta?.info?.total_data})`
                    };
                })
            );
        }
    }, [count, data]);
    return (
        <div>
            <h2 className="title">Candidates</h2>
            <TabMenu
                defaultActiveKey={activeTab}
                onChange={handleOnChangeTab}
                item={items}
            />
        </div>
    );
};
export default CandidatesLayout;
