import React from 'react';

import {Col ,Row,Button, Form} from 'react-bootstrap';
import './estilo.css';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {crearDoc,watchUserChanges} from '../../Firebase';
import ReactDOM from 'react-dom';


const formSchema = Yup.object().shape({
    contenido: Yup.string().min(1).required(),
    prioridad: Yup.string().min(1).required(),
});


class Page extends React.Component{
    state={
        clicked:null,
        user:null,
    }


    onSubmit = async (values) => {
       
        await crearDoc(values);
        this.props.onClose();
    }

    render(){

        
        const {
            onClose,
        } = this.props;
        
        const node =(
            <Row className="modall">
                    <Col md={5} className="modall-body">
                        <Row>
                            <Col>
                                <Formik initialValues={{contenido:"",prioridad:"", usuario:""}} 
                                        validationSchema={formSchema} 
                                        onSubmit={this.onSubmit}
                                        render={(propiedades)=>{
                                    const{
                                        values,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        isValid,
                                    }=propiedades;
                                        
                                    return(
                                        <Form>
                                            <Form.Group controlId="formBasicContent">
                                                <Form.Label>Describe tu tarea</Form.Label>
                                                <Form.Control type="rext" placeholder="Realizar la tarea de Mates" value={values.contenido} onChange={handleChange("contenido")} onBlur={handleBlur("contenido")} />
                                            </Form.Group>
                                            
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Que tan urgente es?</Form.Label>
                                                <Form.Control as="select" value = {values.prioridad} onChange={handleChange("prioridad")} onBlur={handleBlur("prioridad")}>
                                                <option value="" selected disabled >Escoge tu prioridad</option>
                                                <option value="alta"> !!Muy urgente¡¡</option>
                                                <option value="media">Mas o menos</option>
                                                <option value="baja">Puede esperar</option>
                                                {watchUserChanges((user)=>{
                                                    if(user){
                                                        values.usuario = user.id;
                                                        
                                                    }
                                                })}
                                                </Form.Control>
                                            </Form.Group>
                                            <Row >
                                                <Col className="botoneraForm">
                                                <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting || !isValid}>
                                                    Agregar
                                                </Button>
                                                    <Button onClick={onClose}>Cerrar</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    
                                    );

                                }}>
                                </Formik>
                            </Col>
                        </Row>
                        
                    </Col>
            </Row>
        );
            return ReactDOM.createPortal(node, document.getElementById('modal-root'));
    }
}
export default Page;