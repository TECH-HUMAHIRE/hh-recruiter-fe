import { Avatar } from 'antd';
import moment from 'moment';
import React from 'react';
import { useGetUserDetailQuery } from '../../../../app/actions/candidates';
import dummyUser from '../../../../components/Assets/images/dummyuserchat.png';
const UserListMessage = ({
    data,
    onTabMessage,
    totalDataMessage,
    searchName = '',
    dataUsers,
    getDataUnreadMessage = () => {}
}) => {
    const datausersChat = Object.values(data);
    const { data: dataUser } = useGetUserDetailQuery(
        datausersChat[0]?.userTarget
    );
    let name = dataUser?.data?.name.toLowerCase();
    const getUnreadMessage = () => {
        let dataUnreadMessage =
            totalDataMessage.filter(
                (item) => item.uid === datausersChat[0]?.userTarget
            )[0].dataUnread || 0;
        const filterData = dataUsers.map((user) => {
            return {
                total_data: user.data.filter((value) => value.read === false)
                    .length
            };
        });
        let sum = 0;
        for (let i = 0; i < filterData.length; i++) {
            sum += filterData[i].total_data;
        }
        getDataUnreadMessage(sum);
        return dataUnreadMessage;
    };
    return (
        name?.split(searchName).length > 1 && (
            <div
                className="message-tabs"
                onClick={() => onTabMessage(dataUser?.data?.uid)}>
                <Avatar
                    src={dataUser?.data?.photo_url}
                    alt=""
                    className="message-avatar"
                />
                <div className="message-user">
                    <div className="message-tabs__name">
                        {dataUser?.data?.name}
                    </div>
                    <div
                        className="message-tabs__chat"
                        dangerouslySetInnerHTML={{
                            __html: datausersChat[datausersChat.length - 1]
                                ?.text
                        }}></div>
                </div>
                <div className="message-tabs__time">
                    <div className="message-tabs__hour">
                        <div style={{ marginBottom: 5 }}>
                            {moment(
                                new Date(
                                    datausersChat[
                                        datausersChat.length - 1
                                    ]?.timestamp
                                )
                            ).format('HH:mm')}
                        </div>
                        {totalDataMessage && getUnreadMessage() > 0 && (
                            <div className="message-tabs__unread">
                                {getUnreadMessage() > 9
                                    ? '9+'
                                    : getUnreadMessage()}
                            </div>
                        )}
                    </div>
                    {/* <div className="message-tabs__read">12</div> */}
                </div>
            </div>
        )
    );
};
export default UserListMessage;
