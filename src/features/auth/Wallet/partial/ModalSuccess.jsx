import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { ModalSuccessStyle } from '../wallet.style';
import iconChecklist from '../../../../components/Assets/icon/Checklist.png';
import Button from '../../../../components/Button';

// eslint-disable-next-line react/prop-types
const ModalSuccess = ({
    isOpen = true,
    onClose = () => {},
    onViewOrder = () => {}
}) => {
    return (
        <ModalSuccessStyle
            title={
                <>
                    <CloseOutlined onClick={onClose} />
                </>
            }
            closable={false}
            footer={null}
            open={isOpen}
            width={1000}>
            <div className="success">
                <img
                    className="success-icon"
                    src={iconChecklist}
                    alt="Success"
                />
                <h2 className="title">
                    Your company information has been updated.
                </h2>
                <div className="success-info">
                    Your package will only be activated after we receive yout
                    payment. This order will automatically be cancelled if
                    payment is not received by <b>14 August 2022</b> (14 days
                    after the order date).
                </div>
                <Button color="primary" onClick={onViewOrder}>
                    View order
                </Button>
            </div>
        </ModalSuccessStyle>
    );
};
export default ModalSuccess;
