import React from 'react';
import {  Button, Col, Row } from 'react-bootstrap';
import './card.css';

const CardSubject = ({contenido,prioridad,docId}) => {

    
    switch(prioridad){
        
        case "baja":
            return (
                <Row className="cardDiv">
                    <Col>
                        <Row className="tpbaja">
                            
                        </Row>
                        <Row>
                            <Col className="cardContent">
                                {contenido}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="btn-card" onClick={console.log("lol")}>Completada</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            );
        case "media":
            return (
                <Row className="cardDiv">
                    <Col>
                        <Row className="tpmedia">
                            
                        </Row>
                        <Row>
                            <Col className="cardContent">
                                {contenido}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="btn-card">Completada</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            );
           
        case "alta":
            return (
                <Row className="cardDiv">
                    <Col>
                        <Row className="tpalta">
                            
                        </Row>
                        <Row>
                            <Col className="cardContent">
                                {contenido}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="btn-card">Completada</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            );
        default:
            break;
            
    }
  
}

export default CardSubject;