import React, { Component, useState } from 'react';
import './FundRequest.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FundRequest() {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [durationText, setDurationText] = useState("");
    const [incentive, setIncentive] = useState("");

    const handlerAmount = (event) => {
        setAmount(Number(event.target.value));
    }

    const handlerDescription = (event) => {
        setDescription(event.target.value);
    }

    const handlerIncentive = (event) => {
        setIncentive(event.target.value);
    }

    const handlerDurationText = (event) => {
        setDuration(Number(event.target.value));
    }

    const handlerDuration = (event) => {
        setDuration(Number(event.target.value));
    }

    const handlerRegister = (event) => {
        const charityRequest = {
            amount: amount,
            description: description,
            incentive: incentive,
            duration: duration
        }

        console.log(charityRequest);
        setAmount("");
        setDescription("");
        setIncentive("");
        setDuration("off");
        setDurationText("");
    };

    return (
        <div className="FundRequest">
            
            <Container className="container-FundRequest">
                
                {/* Title */}
                <Row className="page-heading">
                    <Col xs={12} md={{ span: 4, offset: 4 }}>
                        <h2>Let's get started!</h2>
                        <h5>Tell us what you're raising money for</h5>

                    </Col>
                </Row>

                {/* Fund Request form */}       
                <Form.Row >
                    <Col md={{ span: 6, offset: 3 }}>
                    
                        <Form onSubmit={handlerRegister}>
                            
                            {/* Amount Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-primary">Amount:</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="£1,000"
                                    onChange={handlerAmount}
                                    value={amount} />
                            </Form.Group>

                            {/* Description Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-primary">Description:</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                    required
                                    onChange={handlerDescription}
                                    value={description}
                                />
                            </Form.Group>

                          
                            {/* Duration radio buttons */}
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label className="text-primary" as="legend" column sm={2}>
                                        Duration:
                                        </Form.Label>
                                    <Col sm={10}>

                                        {/* Radio button Duration One-Off */}  
                                        <Row>
                                            <Form.Check
                                                type="radio"
                                                label="One-Off"
                                                name="formHorizontalRadios"
                                                id="radioDurationOneOff"
                                                value="0"
                                                onChange={handlerDuration}
                                            />
                                        </Row>

                                        {/* Radio button Customise Duration. If the user press this option, the duration field is taken*/}  
                                        <Row>
                                            <Form.Check
                                                type="radio"
                                                aria-label="Customise Duration"
                                                name="formHorizontalRadios"
                                                id="radioDurationCustomiseDuration"
                                                value="1"
                                                onChange={handlerDuration}
                                            />

                                            
                                            {/* Form inline to show the radio button, textbox and label in the same line */}
                                            <Form inline> 

                                                {/* Customize duration textbox */}
                                                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                                    CustomiseDuration
                                                </Form.Label>
                                                <Form.Control
                                                    size="sm"
                                                    type="number"
                                                    className="mb-2 mr-sm-2"
                                                    id="inlineFormInputName2"
                                                    placeholder="1"
                                                    onChange={handlerDurationText}
                                                />

                                                {/* Label years */}
                                                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                                                    years
                                                </Form.Label>

                                            {/* End of the Form inline */}
                                            </Form>

                                        </Row>

                                    </Col>

                                {/* End of the radio button section */}
                                </Form.Group>
                            </fieldset>

                            {/* Incentive Fund request field*/}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-primary">Incentive:</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Write here the incentive you offer (sponsor branding, vouchers, sampling opportunities,...)"
                                    required
                                    onChange={handlerIncentive}
                                    value={incentive}
                                />
                            </Form.Group>


                        {/* End of the form */}
                        </Form>


                    </Col>
                </Form.Row>
 
                {/* Button register*/}
                <Row>
                    <Col md={{ span: 2, offset: 8 }}>
                        <Button onClick={handlerRegister} variant="outline-primary" type="submit">Submit</Button>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default FundRequest;