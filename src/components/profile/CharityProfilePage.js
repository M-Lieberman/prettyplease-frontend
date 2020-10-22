import React, { Component, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileTextDescription from './ProfileTextDescription';


function CharityProfilePage({charityData, changeProfile}) {   
    return (     
        <div>
                 <Row  className="justify-content-md-center">
                     <Col xs={{span: 12, offset: 6}} md={{span: 6, offset: 5}}>
                        <h1>Profile</h1>
                    </Col>
                </Row>
            <ProfileTextDescription detailsProfile={charityData} changeProfile={changeProfile}/>
        </div>
    );
}

export default CharityProfilePage; 