import React from 'react';
import { AuthContext } from '../../context/auth';
import {Col ,Row, Container} from 'react-bootstrap';
import Alien from '../../img/alien.png';
import '../Cargando/index.css';

class Page extends React.Component{
    render(){
        return(
            <Container className="fondoCargando">
                <Row className="rowCargando">
                    <Col md = {6}>
                        <h1>Cargando contenido</h1>
                    </Col>
                    <Col md = {6}>
                        <img className="alienimg" src={Alien} alt={Alien}/>
                    </Col>
                </Row>
            </Container>
     
            
        )
    }
}

Page.contextType = AuthContext;

export default Page;