import React, { useState } from "react";
import axios from 'axios';
import "./style.scss";
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalLogin(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        axios.post('https://game-oferta-api.herokuapp.com/login',
            { email: email, password: password })
            .then(res => {
                alert('Login realizado com sucesso!');
                props.setUser(res.data.username, res.data.email);
                handleClose();
            }).catch(e => {
                if (e.response.status === 400) alert('Usuário ou senha não informado(s)!');
                else if (e.response.status === 401) alert('Usuário ou senha inválido(s)!')
            });
    }

    return (
        <div className="mod">
            <Button className="btn" variant="dark" onClick={handleShow}>
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
                                login();
                            }}>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control autoFocus value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control autoFocus type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Button onClick={login}>Entrar</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

        </div>
    );

}
export default ModalLogin;