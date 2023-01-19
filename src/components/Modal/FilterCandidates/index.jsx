import { Modal } from 'antd';
import React from 'react';

const FilterCandidates = ({ isOpen = true }) => {
    return (
        <Modal open={isOpen}>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                odit nobis natus vero, nam vitae molestias magni ex perspiciatis
                maiores quas mollitia labore similique deserunt suscipit
                distinctio at ad? Repudiandae.
            </div>
        </Modal>
    );
};
export default FilterCandidates;
