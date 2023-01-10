import React from 'react';
import Style from './empty-job.style';
import empty from '../Assets/images/emptyJob.png';
import Button from '../Button';
import edit from '../Assets/icon/edit_post.png';
import { useNavigate } from 'react-router-dom';

const UnCompleteProfile = ({ button = true }) => {
    const navigate = useNavigate();
    const onClick = () => {
        window.location.pathname = '/my-company';
        // navigate('/my-company');
    };
    return (
        <Style>
            <div>
                <div>
                    <img className="img" src={empty} alt="" />
                </div>

                <h2 className="title">
                    You haven't complete profile company form
                </h2>
                <div className="notes">
                    Please complete profile company form first.
                </div>
                {button && (
                    <Button
                        className="btn-post"
                        color="primary"
                        onClick={onClick}>
                        My Company
                    </Button>
                )}
            </div>
        </Style>
    );
};
export default UnCompleteProfile;
