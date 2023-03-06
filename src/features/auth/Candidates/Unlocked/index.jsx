import React from 'react';
import { useGetCandidatesUnlockListQuery } from '../../../../app/actions/candidates';
import CardCandidates from '../../../../components/Card/CardCandidates';
import { Col, Row } from '../../../../components/Grid';

const CandidatesUnlocked = () => {
    const [isFilter, setFilter] = React.useState(false);
    const { data } = useGetCandidatesUnlockListQuery();
    const onFilterCandidates = () => {
        setFilter(!isFilter);
    };
    return (
        <div>
            <Row>
                {data?.data?.map((item, key) => {
                    return (
                        <Col xl={4} lg={4} md={6} sm={12} key={key}>
                            <CardCandidates data={item} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default CandidatesUnlocked;
