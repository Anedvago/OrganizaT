import React from 'react';
import {Col ,Row, Container} from 'react-bootstrap';
import {startUi} from '../../Firebase';

class Page extends React.Component{
    //esto pasa cada vez que se llama el componente
    componentDidMount(){
        startUi("#firebaseui");
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col id="firebaseui">
                        
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default Page;