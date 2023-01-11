import React from 'react';
import Style from './empty-job.style';
import empty from '../Assets/images/emptyJob.png';
import { useNavigate } from 'react-router-dom';

const EmptyJob = ({ button = true }) => {
    const navigate = useNavigate();
    const onClick = () => {
        // navigate('/post-job');
        window.location.pathname = '/post-job';
    };
    return (
        <Style>
            <div>
                <div>
                    <img className="img" src={empty} alt="" />
                </div>

                <h2 className="title">There’s no job vacancy yet</h2>
                <div className="notes">
                    If there is a new job vacancy, it will appear on this page.
                </div>
            </div>
        </Style>
    );
};
export default EmptyJob;
