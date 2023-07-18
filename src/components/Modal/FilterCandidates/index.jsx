import { Form, InputNumber } from 'antd';
import React from 'react';
import Button from '../../Button';
import SelectOption from '../../Form/SelectOption';
import { Col, Row } from '../../Grid';
import { sortBy, experience, education, currency } from './option';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import FilterCandidatesStyle from './filter-candidates.style';
import { FastForwardOutlined } from '@ant-design/icons';
import { useFilterJobMutation } from '../../../app/actions/candidates';
import { useForm } from 'antd/es/form/Form';

const FilterCandidates = ({
    isOpen = FastForwardOutlined,
    onClose = () => {}
}) => {
    const [form] = useForm();
    const [filterJobApi, { isLoading }] = useFilterJobMutation({
        fixedCacheKey: 'filterJob'
    });
    const onSubmit = (values) => {
        filterJobApi(values);
    };
    const onResetFilter = () => {
        form.setFieldsValue({
            start_salary: null,
            end_salary: null,
            education: '',
            start_work_of_experience: '',
            page: 1,
            pageSize: 10,
            job_title: ''
        });
        filterJobApi();
    };
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
            <Form form={form} onFinish={onSubmit} layout="vertical">
                {/* <Row>
                    <Col md={6}>
                        <Form.Item name="sortBy">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="hr"></div> */}
                <Row>
                    <Col md={6}>
                        <Form.Item
                            label="Work Experience"
                            name="start_work_of_experience">
                            <SelectOption options={experience} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Education" name="education">
                            <SelectOption options={education} />
                        </Form.Item>
                    </Col>
                    {/* <Col md={6}>
                        <Form.Item label="Language" name="language">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Age" name="age">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col> */}
                    <Col md={2}>
                        <Form.Item label="Currency" initialValue={'IDR'}>
                            <SelectOption
                                defaultValue="IDR"
                                options={currency}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={5}>
                        <Form.Item
                            label="Minimum Salary"
                            name="start_salary"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your  minimum salary!'
                                }
                            ]}>
                            <InputNumber
                                style={{ width: '100%' }}
                                // pattern="[^0-9]"
                                formatter={(value) =>
                                    `${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                                type="tel"
                                size={'large'}
                                parser={(value) =>
                                    value.replace(/\$\s?|(,*)/g, '')
                                }
                                // prefix={'Rp'}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={5}>
                        <Form.Item
                            label="Maximum Salary"
                            name="end_salary"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your  maximum salary!'
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (
                                            value >
                                            getFieldValue('start_salary')
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                'Maximum salary less than minimum salary!'
                                            )
                                        );
                                    }
                                })
                            ]}>
                            <InputNumber
                                style={{ width: '100%' }}
                                // pattern="[^0-9]"
                                formatter={(value) =>
                                    `${value}`.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ','
                                    )
                                }
                                type="tel"
                                size={'large'}
                                parser={(value) =>
                                    value.replace(/\$\s?|(,*)/g, '')
                                }
                                // prefix={'Rp'}
                            />
                        </Form.Item>
                    </Col>
                    {/* <Col md={6}>
                        <Form.Item label="Salary range" name="salary_range">
                            <SelectOption options={sortBy} />
                        </Form.Item>
                    </Col> */}
                </Row>
                <div className="text-right">
                    <Button
                        color="outline-primary"
                        style={{ marginRight: 10 }}
                        onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        color="outline-primary"
                        onClick={onResetFilter}
                        style={{ marginRight: 10 }}>
                        Reset
                    </Button>
                    <Button
                        color="primary"
                        htmlType="submit"
                        loading={isLoading}>
                        Apply
                    </Button>
                </div>
            </Form>
        </FilterCandidatesStyle>
    );
};
export default FilterCandidates;
