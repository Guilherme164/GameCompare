import React, {useState } from "react";
import "./style.scss";
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalLogin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Form className="formulario">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Button>Entrar</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

        </div>
    );

}
export default ModalLogin;