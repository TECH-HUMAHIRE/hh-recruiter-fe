import { Card, Collapse } from 'antd';
import React from 'react';
import Button from '../../../components/Button';
import { Col, Row } from '../../../components/Grid';
import ChatMessegerIcon from '../../../components/Icon/ChatMesseger';
import Style from './help.style';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const HelpPage = () => {
    return (
        <Style>
            <h2 className="title">Help</h2>
            <div className="help">
                <Row justify="center">
                    <Col md={6}>
                        <div className="text-center">
                            <div className="help-header">
                                <h1 className="title ">
                                    HumaHire Customer Service
                                </h1>
                                <div className="text-primary">
                                    Operating hours: 08:00 - 18:00 Monday -
                                    Friday.
                                </div>
                            </div>
                            <div className="help-contact">
                                <span>You can send email to:</span>
                                <div>
                                    <a href="mailto:customer.service@humahire.com">
                                        <h3 className="help-contact__email">
                                            customer.service@humahire.com
                                        </h3>
                                    </a>
                                </div>
                                <div className="help-contact__more">or</div>
                                <Button
                                    icon={<ChatMessegerIcon />}
                                    color="outline-primary">
                                    Chat Customer Service
                                </Button>
                            </div>
                        </div>
                        <div className="help-section">
                            <h2 className="title text-center">
                                How to start with Humahire
                            </h2>
                            <Card>
                                <Collapse
                                    style={{ background: 'transparent' }}
                                    accordion
                                    bordered={false}
                                    expandIconPosition="end">
                                    <Panel
                                        header="This is panel header 1"
                                        key="1">
                                        <p>{text}</p>
                                    </Panel>
                                    <Panel
                                        header="This is panel header 2"
                                        key="2">
                                        <p>{text}</p>
                                    </Panel>
                                    <Panel
                                        header="This is panel header 3"
                                        key="3">
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </Card>
                        </div>
                        <div className="help-section">
                            <h2 className="title text-center">
                                Frequently asked
                            </h2>
                            <Card>
                                <Collapse
                                    style={{ background: 'transparent' }}
                                    accordion
                                    bordered={false}
                                    expandIconPosition="end">
                                    <Panel
                                        header="This is panel header 1"
                                        key="1">
                                        <p>{text}</p>
                                    </Panel>
                                    <Panel
                                        header="This is panel header 2"
                                        key="2">
                                        <p>{text}</p>
                                    </Panel>
                                    <Panel
                                        header="This is panel header 3"
                                        key="3">
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                                <div className="text-center">
                                    <Button
                                        color="outline-primary"
                                        className="btn-show"
                                        size="medium">
                                        See all
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </Style>
    );
};
export default HelpPage;
