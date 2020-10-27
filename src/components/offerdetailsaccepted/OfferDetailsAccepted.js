import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "../Firebase/AuthContext";
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';
import "./OfferDetailsAccepted.css";


function OfferDetailsAccepted({ offers }) {

    const history = useHistory();
    const { id } = useParams();
    // TODO change to fetch only a single item?
    let { offers, getOffers } = useAuth();
    try {
      getOffers();
    } catch (e) {
      console.log(e)
    }
    // fetches the selected offer from the array
    const [offer] = offers.filter(o => o.offerId === id);
    console.log(">>>>>>>>>>>>>>>>>>>>>>" + JSON.stringify(offer));  

    return (
        <Container className="OfferDetailsAccepted">
            <Row className="row justify-content-center mt-5 mb-4 text-primary">
                <h3>{offer.charityName}</h3>
            </Row>
            <div className="rounded mx-auto d-block  text-center">
                <img
                    src={offer.charityImageUrl}
                    width="200"
                    height="200"
                    alt={offer.charityName}
                />
            </div>
            <Row className="mt-3 justify-content-md-center">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <strong>What We Do</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{offer.charityDescription}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
            <Row className="pt-2 pb-2 justify-content-md-center">
                <Col className="text-center">
                    Amount: {getFormattedAmount(offer.amountAgreed)}
                </Col>
                <Col className="text-center">
                    Duration: {getFormattedDuration(offer.agreedDurationInYears)}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <h4>Sponsorship Accepted!</h4>
            </Row>
            <Row className="justify-content-md-center">
                You will be contacted by {offer.charityName} within the next seven days to finalise details of your sponsorship agreement.
            </Row>
            <Row className="row justify-content-center mt-5 lead">
                {offer.eventDescription}
            </Row>
            <Row className="row justify-content-center mt-2">
                {offer.incentive}
            </Row>
            <Router>
                <Row className=" justify-content-center mt-5 ">
                    <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => history.goBack()}>
                        Back
                    </Button>
                </Row>
            </Router>
            <div className="row justify-content-center mt-5"></div>
        </Container>
    );
}


export default OfferDetailsAccepted;

