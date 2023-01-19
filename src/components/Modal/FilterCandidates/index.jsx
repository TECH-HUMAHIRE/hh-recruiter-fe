import { Form } from 'antd';
import React from 'react';
import Button from '../../Button';
import SelectOption from '../../Form/SelectOption';
import { Col, Row } from '../../Grid';
import { sortBy } from './option';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import FilterCandidatesStyle from './filter-candidates.style';
import { FastForwardOutlined } from '@ant-design/icons';

const FilterCandidates = ({
    isOpen = FastForwardOutlined,
    onClose = () => {}
}) => {
    return (
        <FilterCandidatesStyle
            open={isOpen}
            footer={null}
            closable={false}
            title={
                <div className="modal-header">
                    <div className="modal-header__right">
                        <img
                            src={ArrowLeft}
                            alt=""
                            onClick={onClose}
                            className="close-icon"
                        />
                        <h3 className="title">Filter</h3>
                    </div>
                </div>
            }
            width={720}>
            <h3 className="title">Sort By</h3>
            <Form layout="vertical">
                <Row>
                    <Col md={6}>
                        <Form.Item name="sortBy">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="hr"></div>
                <Row>
                    <Col md={6}>
                        <Form.Item label="Experience" name="experience">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Education" name="education">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Language" name="language">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Age" name="age">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Currency" name="currency">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Salary range" name="salary_range">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="text-right">
                    <Button
                        color="outline-primary"
                        style={{ marginRight: 10 }}
                        onClick={onClose}>
                        Cancel
                    </Button>
                    <Button color="outline-primary" style={{ marginRight: 10 }}>
                        Reset
                    </Button>
                    <Button color="primary">Apply</Button>
                </div>
            </Form>
        </FilterCandidatesStyle>
    );
};
export default FilterCandidates;
