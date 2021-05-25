import React, {useState } from "react";
import "./style.scss";
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalLogin(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const buscarInput = () =>{
        props.busca(email, password);
        
       
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
   
    return (
        <div className="mod">
            <Button className="btn"variant="dark" onClick={handleShow}>
                Login
            </Button>

            <Modal styles={{ overlay: { background: 'black' } }} className="modal_fundo" show={show} onHide={handleClose} >
                <div className="modal_body">
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="formulario" 
                        onSubmit={(event) => {
                            event.preventDefault();
                            buscarInput(email, password);
                        }}>                       
                        
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  autoFocus value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  autoFocus type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Button disabled={!validateForm()} onClick={buscarInput}>Entrar</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

        </div>
    );

}
export default ModalLogin;