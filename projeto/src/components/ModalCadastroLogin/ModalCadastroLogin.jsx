import React, {useState } from "react";
import "./style.scss";
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalCadastroLogin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="mod">
            <Button className="btn"variant="dark" onClick={handleShow}>
                Cadastrar
            </Button>

            <Modal styles={{ overlay: { background: 'black' } }} className="modal_fundo" show={show} onHide={handleClose} >
                <div className="modal_body">
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastre-se</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="formulario">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Button>Salvar</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

        </div>
    );

}
export default ModalCadastroLogin;