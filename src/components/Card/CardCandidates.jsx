import { CloseOutlined, MoreOutlined, StarFilled } from '@ant-design/icons';
import { CardReferredStyle, CardMenu } from './card.style';
import React from 'react';
import { Dropdown } from 'antd';
import BagIcon from '../Icon/Bag';
import WalletIcon from '../Icon/Wallet';
import DressIcon from '../Icon/Dress';
import FoundedIcon from '../Icon/Founded';
import { formatMoney } from '../Utils/formatMoney';
import PreviewIcon from '../Assets/icon/preview.png';
import Bookmark from '../Assets/icon/Bookmark.png';
import ShareIcon from '../Assets/icon/share.png';
import moment from 'moment';

const CardCandidates = ({
    onViewDetail = () => {},
    onCancelInvitation = () => {},
    data
}) => {
    const actionDropdown = [
        {
            key: '1',
            label: (
                <CardMenu onClick={() => onViewDetail(data)}>
                    <img src={PreviewIcon} alt="" />
                    View Detail
                </CardMenu>
            )
        },
        {
            key: '2',
            label: (
                <CardMenu onClick={() => onViewDetail(data)}>
                    <img src={ShareIcon} alt="" />
                    Refer
                </CardMenu>
            )
        },
        {
            key: '3',
            label: (
                <CardMenu onClick={() => onCancelInvitation(data)}>
                    <img src={Bookmark} alt="" />
                    Save
                </CardMenu>
            )
        }
    ];
    const [items, setItems] = React.useState(actionDropdown);
    return (
        <CardReferredStyle
            title={
                <div className="card-header">
                    <div className="card-header__right">
                        <div className="card-header__initial">JR</div>
                        <div className="card-header__info">
                            <div className="card-header__info-name">
                                {data?.name}
                            </div>
                            <div className="card-header__info-location">
                                {data?.sub_district?.district?.city?.name},{' '}
                                {
                                    data?.sub_district?.district?.city?.province
                                        ?.country.name
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card-header__left">New</div>
                </div>
            }
            extra={
                <Dropdown
                    menu={{ items }}
                    placement="bottomCenter"
                    trigger="click">
                    <MoreOutlined className="card-action" />
                </Dropdown>
            }>
            <div className="card-date">
                Last Update: {moment(data?.updated_at).format('DD MMM YYYY')} •
                Last active: -
            </div>
            <div className="card-info">
                <BagIcon /> <span className="card-info__text">-</span>
            </div>
            <div className="card-info">
                <DressIcon />{' '}
                <span className="card-info__text">
                    Master of Computer Science
                </span>
            </div>
            <div className="card-info">
                <FoundedIcon />{' '}
                <span className="card-info__text">
                    12 years of exp • 27 years old
                </span>
            </div>
            <div className="card-info">
                <WalletIcon color="#C4C4C4" />{' '}
                <span className="card-info__text">
                    Expected {formatMoney(data?.expected_sallary)} (
                    {data?.expected_sallary_negotiable ? 'Negotiable' : 'Nett'})
                </span>
            </div>
            <div className="hr"></div>
            <div className="card-info">
                <span className="card-info__referred">Candidate Notes :</span>
            </div>
            <div className="card-info__desc">{data?.message || '-'}</div>
        </CardReferredStyle>
    );
};
export default CardCandidates;
