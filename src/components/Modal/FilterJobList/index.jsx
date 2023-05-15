import { DatePicker, Form, InputNumber } from 'antd';
import React from 'react';
import Button from '../../Button';
import SelectOption from '../../Form/SelectOption';
import { Col, Row } from '../../Grid';
import { sortBy } from './option';
import ArrowLeft from '../../Assets/icon/arrow-left.png';
import FilterJobListStyle from './filter-job-list.style';
import { DownOutlined, FastForwardOutlined } from '@ant-design/icons';

const FilterJobList = ({ isOpen = false, onClose = () => {} }) => {
    return (
        <FilterJobListStyle
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
            <Form layout="vertical">
                <Row>
                    <Col md={6}>
                        <Form.Item label="Date posted" name="date">
                            <DatePicker
                                suffixIcon={<DownOutlined />}
                                style={{ width: '100%' }}
                                size="large"
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item label="Type of work" name="type">
                            <SelectOption
                                options={[
                                    {
                                        label: 'Work From Home',
                                        value: 'Work From Home'
                                    },
                                    {
                                        label: 'Work From Office',
                                        value: 'Work From Office'
                                    },
                                    {
                                        label: 'Hybrid',
                                        value: 'Hybrid'
                                    }
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <label htmlFor="">Min. salary</label>
                        <Row>
                            <Col lg={3}>
                                <Form.Item name="">
                                    <SelectOption
                                        showSearch={false}
                                        className="select-currency"
                                        defaultValue="IDR"
                                        options={[
                                            {
                                                label: 'Rp',
                                                value: 'IDR'
                                            }
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col lg={9} style={{ paddingLeft: 0 }}>
                                <Form.Item name="rate_start">
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
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6}>
                        <label htmlFor="">Max. salary</label>
                        <Row>
                            <Col lg={3}>
                                <Form.Item name="">
                                    <SelectOption
                                        showSearch={false}
                                        className="select-currency"
                                        defaultValue="IDR"
                                        options={[
                                            {
                                                label: 'Rp',
                                                value: 'IDR'
                                            }
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col lg={9} style={{ paddingLeft: 0 }}>
                                <Form.Item
                                    name="rate_end"
                                    rules={[
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (
                                                    value >
                                                    getFieldValue('rate_start')
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
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
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
        </FilterJobListStyle>
    );
};
export default FilterJobList;
