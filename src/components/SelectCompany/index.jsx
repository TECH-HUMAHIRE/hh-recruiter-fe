import React from 'react';
import { useGetCompanyNameQuery } from '../../app/actions/jobApi';
import SelectOption from '../Form/SelectOption';
import BagIcon from '../Icon/Bag';

const SelectCompany = ({ onChange = () => {} }) => {
    // state
    const [paramsCompany, _] = React.useState({
        page: 1,
        page_size: -1
    });
    const [companyList, setCompanyList] = React.useState([]);

    // fetch api
    const { data: companyName, isSuccess: successGetCompany } =
        useGetCompanyNameQuery(paramsCompany);
    // function
    const onSearchJobByCompany = async (value) => {
        onChange(value);
    };
    React.useEffect(() => {
        if (successGetCompany) {
            setCompanyList(
                companyName.data
                    .reduce((acc, current) => {
                        const x = acc.find(
                            (filter) => filter.name === current.name
                        );
                        if (!x) {
                            return acc.concat([current]);
                        } else {
                            return acc;
                        }
                    }, [])
                    .filter((value) => value.name !== null)
                    .map((item) => {
                        console.log('item', item.name);
                        return {
                            label: item.name,
                            value: item.name
                        };
                    })
            );
        }
    }, [successGetCompany]);
    return (
        <SelectOption
            onChange={onSearchJobByCompany}
            placeholder="Choose company industry"
            options={[
                {
                    label: 'From All Company',
                    value: ''
                },
                ...companyList
            ]}
            frontIcon={<BagIcon color="#666666" />}
        />
    );
};
export default SelectCompany;
