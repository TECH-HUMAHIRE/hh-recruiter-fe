import React from 'react';
import Style from './empty-message.style';
import Chat from '../Assets/images/InboxEmpty.png';
import { Card } from 'antd';

const EmptyMessage = () => {
    return (
        <Card>
            <Style>
                <div>
                    <div>
                        <img className="img" src={Chat} alt="" />
                    </div>

                    <h2 className="title">Welcome to message</h2>
                    <div className="notes">
                        Select the message next to it to start a chat with the
                        recruiter or job seeker.
                    </div>
                </div>
            </Style>
        </Card>
    );
};
export default EmptyMessage;
