import { Avatar } from 'antd';
import moment from 'moment';
import React from 'react';
import { useGetUserDetailQuery } from '../../../../app/actions/candidates';
import dummyUser from '../../../../components/Assets/images/dummyuserchat.png';
const UserListMessage = ({ data, onTabMessage, totalDataMessage }) => {
    const datausersChat = Object.values(data);
    const { data: dataUser } = useGetUserDetailQuery(
        datausersChat[0]?.userTarget
    );
    const getUnreadMessage = () => {
        return (
            totalDataMessage.filter(
                (item) => item.uid === datausersChat[0]?.userTarget
            )[0].dataUnread || 0
        );
    };
    return (
        <div
            className="message-tabs"
            onClick={() => onTabMessage(dataUser?.data?.uid)}>
            <Avatar
                src={dataUser?.data?.photo_url}
                alt=""
                className="message-avatar"
            />
            <div className="message-user">
                <div className="message-tabs__name">{dataUser?.data?.name}</div>
                <div className="message-tabs__chat">
                    {datausersChat[datausersChat.length - 1]?.text}
                </div>
            </div>
            <div className="message-tabs__time">
                <div className="message-tabs__hour">
                    {totalDataMessage && getUnreadMessage() > 0 && (
                        <div className="message-tabs__unread">
                            {getUnreadMessage() > 9 ? '9+' : getUnreadMessage()}
                        </div>
                    )}
                    <div>
                        {moment(
                            new Date(
                                datausersChat[
                                    datausersChat.length - 1
                                ]?.timestamp
                            )
                        ).format('HH:mm')}
                    </div>
                </div>
                {/* <div className="message-tabs__read">12</div> */}
            </div>
        </div>
    );
};
export default UserListMessage;
