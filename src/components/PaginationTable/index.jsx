import React from 'react';
import { Pagination } from 'antd';
import PaginationStyle from './pagination-table.style';
const PaginationTable = ({
    data,
    refetch = () => {},
    params,
    showSizeChanger = true
}) => {
    const onChangePage = (page, pageSize) => {
        refetch({
            ...params,
            page: page,
            page_size: pageSize
        });
    };

    return (
        <PaginationStyle>
            <Pagination
                onChange={(page, pageSize) => onChangePage(page, pageSize)}
                total={data?.meta?.info?.total_data}
                // showTotal={(total, range) => (
                //     <div className="test">
                //         {`${range[0]}-${range[1]} of ${total} items`}
                //     </div>
                // )}
                defaultCurrent={1}
                showSizeChanger={showSizeChanger}
            />
        </PaginationStyle>
    );
};
export default PaginationTable;
