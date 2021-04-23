import React from 'react';
import { DocContext } from '../../context/docs';
import {Col ,Row, Container,Navbar,Button} from 'react-bootstrap';
import './estilo.css';
import Documento from '../../Componentes/Documento';
import {borrarDoc} from '../../Firebase';


class Page extends React.Component{

    state={
        clicked:null,
        docId:null,
    }
    onDelete = async (id) => {
        if(id){
            await borrarDoc(id);
        }    
    }
    render(){
        const {
            docs,
        } = this.context;
        const{
            clicked,
        }=this.state;
        const{
            docId,
        }=this.state;

        const documento = docs.find(n=>n.id===docId);
        
        return(
            <Container fluid>
                
                
                <Navbar className="barraInicio" variant="dark" fixed="top" >
                    <Navbar.Brand href="/" className="brandInicio">OrganizaT</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="txtNav">
                            <Button onClick={()=>this.setState({clicked:"algo"})}>Nueva tarea</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                
                
           
                <Row className="contenido">
                    <Col md={5}>
                        {docs.map(row =>{
                            return(
                                <Row className="cardDiv">
                                    <Col>
                                        <Row className={row.prioridad}>
                                        </Row>
                                        <Row>
                                            <Col className="cardContent">
                                                {row.contenido}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button className="btn-card" onClick={()=>this.setState({docId:row.id})||this.onDelete(row.id)}>Completada</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                </Row>
                {clicked && <Documento onClose={()=>this.setState({clicked:null})} doc={documento}></Documento>}
              
            </Container>
        );
        
        
    }
}

Page.contextType = DocContext;

export default Page;