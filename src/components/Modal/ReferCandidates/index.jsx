import { Card } from 'antd';
import React from 'react';
import ReferCandidatesStyle from './refer-candidates.style';
import defaultImage from '../../Assets/images/defaultImage.png';
import TabMenu from '../../Tabs';
import EmailTab from './EmailTab';
import ReferralLinkTab from './ReferralLinkTab';

const ReferCandidates = ({ isRefer = false, onClose = () => {}, data }) => {
    return (
        <ReferCandidatesStyle
            open={isRefer}
            footer={null}
            onCancel={onClose}
            width={760}
            title="Refer Candidates">
            <Card style={{ marginBottom: 32 }}>
                <div className="refer-company">
                    <img
                        src={data?.job?.company?.logo_url || defaultImage}
                        alt=""
                        className="refer-company__logo"
                    />
                    <div>
                        <h3 className="title">{data?.job?.title}</h3>
                        <div className="refer-company__name">
                            {data?.job?.company?.name}
                        </div>
                        <div className="refer-company__city">
                            {
                                data?.job?.sub_district?.district?.city
                                    ?.province?.name
                            }
                            ,{' '}
                            {
                                data?.job?.sub_district?.district?.city
                                    ?.province?.country?.name
                            }
                        </div>
                    </div>
                </div>
            </Card>
            <TabMenu
                item={[
                    {
                        label: `Email`,
                        key: 'email',
                        children: <EmailTab data={data} onClose={onClose} />
                    },
                    {
                        label: `Referral Link`,
                        key: 'referral',
                        children: (
                            <ReferralLinkTab data={data} onClose={onClose} />
                        )
                    }
                ]}
            />
        </ReferCandidatesStyle>
    );
};
export default ReferCandidates;
