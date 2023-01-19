import { Menu } from 'antd';
import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import TabMenu from '../../../components/Tabs';
import CandidatesAssigned from './Assigned';
import CandidatesSaved from './Saved';
import CandidatesSearch from './Search';
const CandidatesLayout = () => {
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const { search } = useLocation();
    const [activeTab, setActiveTab] = React.useState(false);
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
    return (
        <div>
            <TabMenu
                defaultActiveKey={activeTab}
                onChange={handleOnChangeTab}
                item={[
                    {
                        label: `Search`,
                        key: 'search',
                        children: <CandidatesSearch />
                    },
                    {
                        label: `Assigned`,
                        key: 'assigned',
                        children: <CandidatesAssigned />
                    },
                    {
                        label: `Saved`,
                        key: 'saved',
                        children: <CandidatesSaved />
                    }
                ]}
            />
        </div>
    );
};
export default CandidatesLayout;
