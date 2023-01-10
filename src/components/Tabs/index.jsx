import React from 'react';
import Style from './tabs.style';
import { Skeleton } from 'antd';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useActiveTab = (DEFAULT_VALUE) => {
    let [searchParams] = useSearchParams();
    let navigate = useNavigate();
    const { search } = useLocation();
    const [activeTab, setActiveTab] = useState(false);
    const handleOnChangeTab = (key) => {
        navigate(`?tab=${key}`);
    };

    const onGetSearchParamsData = (tabValue) => {
        let currentTab = DEFAULT_VALUE;
        if (tabValue) {
            currentTab = tabValue;
        }
        setActiveTab(currentTab);
    };

    React.useEffect(() => {
        onGetSearchParamsData(searchParams.get('tab'));
    }, [search]);

    return [activeTab, handleOnChangeTab];
};

const TabMenu = ({
    // eslint-disable-next-line react/prop-types
    defaultActiveKey = '1',
    // eslint-disable-next-line react/prop-types
    item = [],

    // eslint-disable-next-line react/prop-types
    onChange = () => {},
    tabPosition = 'top'
}) =>
    defaultActiveKey === false ? (
        item.map((item) => {
            return (
                <Skeleton.Button
                    key={item.key}
                    active={true}
                    size="small"
                    shape="round"
                    style={{ marginRight: 10 }}
                />
            );
        })
    ) : (
        <Style
            tabPosition={tabPosition}
            defaultActiveKey={defaultActiveKey}
            onChange={onChange}
            items={item}
        />
    );
export default TabMenu;
