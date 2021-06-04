import React, { useState, useContext } from "react";
import "./style.scss";
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUser } from '../../connect';
import { LoginContext } from '../../contexts/LoginContext';

function ModalCadastroLogin(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const { setUser } = useContext(LoginContext);

    function cadastrar(usename, email, password, password2) {
        console.log(email + "     " + password + "   " + password2 + "   ")
        if (password === password2) {
            createUser.post('',
                { username: username, email: email, password: password })
                .then(res => {
                    alert('Cadastro realizado com sucesso!');
                    setUser(res.data.username, res.data.email);
                    handleClose();
                }).catch(e => {
                    alert("ops, parece que algo deu errado!");
                });
        } else if (password !== password2) {
            alert("as senhas não conferem, tente preencher novamente");
            setPassword("");
            setPassword("");
        }
    }

    return (
        <div className="mod">
            <Button className="btn" variant="light" onClick={handleShow}>
                Cadastrar
            </Button>

            <Modal styles={{ overlay: { background: 'black' } }} className="modal_fundo" show={show} onHide={handleClose} >
                <div className="modal_body">
                    <Modal.Header closeButton>
                        <Modal.Title>Cadastre-se</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="formulario"
                            onSubmit={(event) => {
                                event.preventDefault();
                                cadastrar(username, email, password, password2);
                            }}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control required autoFocus value={username} type="text"
                                    onChange={(e) => setUsername(e.target.value)} placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required autoFocus value={email} type="email"
                                    onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control required autoFocus type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control required autoFocus type="password" value={password2}
                                    onChange={(e) => setPassword2(e.target.value)} placeholder="Senha" />
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">Salvar</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

        </div>
    );

}
export default ModalCadastroLogin;