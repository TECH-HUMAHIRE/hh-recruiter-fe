import { Avatar } from 'antd';
import React from 'react';
import dummyUser from '../../../../components/Assets/images/dummyuserchat.png';
const UserListMessage = () => {
    return (
        <div className="message-tabs">
            <Avatar src={dummyUser} alt="" className="message-avatar" />
            <div className="message-user">
                <div className="message-tabs__name">Kyari Pamyu</div>
                <div className="message-tabs__chat">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi voluptatum neque ad, ipsam laboriosam iste repellendus
                    aliquid nemo exercitationem provident eum praesentium magnam
                    et quod eveniet ex libero! Distinctio, ad.
                </div>
            </div>
            <div className="message-tabs__time">
                <div className="message-tabs__hour">5:17 PM</div>
                <div className="message-tabs__read">12</div>
            </div>
        </div>
    );
};
export default UserListMessage;
