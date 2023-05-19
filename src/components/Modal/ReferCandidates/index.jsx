import { Card } from 'antd';
import React from 'react';
import ReferCandidatesStyle from './refer-candidates.style';
import defaultImage from '../../Assets/images/defaultImage.png';
import TabMenu from '../../Tabs';
import EmailTab from './EmailTab';
import ReferralLinkTab from './ReferralLinkTab';

const ReferCandidates = ({ isRefer = false, onClose = () => {}, data }) => {
    console.log(data);
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
                        src={defaultImage}
                        alt=""
                        className="refer-company__logo"
                    />
                    <div>
                        <h3 className="title">Scrum Master</h3>
                        <div className="refer-company__name">
                            PT. Solusi Transportasi Indonesia
                        </div>
                        <div className="refer-company__city">
                            Jakarta, Indonesia
                        </div>
                    </div>
                </div>
            </Card>
            <TabMenu
                item={[
                    {
                        label: `Email`,
                        key: 'email',
                        children: <EmailTab onClose={onClose} />
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
