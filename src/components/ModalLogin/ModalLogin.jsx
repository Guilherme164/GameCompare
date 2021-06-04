import React, { useState, useContext } from "react";
import "./style.scss";
import { Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connectUser } from '../../connect';
import { ReactComponent as Spinner } from '../../assets/img/spinner_btn.svg';
import { LoginContext } from '../../contexts/LoginContext';


function ModalLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const { setUser, loginModal, setLoginModal } = useContext(LoginContext);

    function login() {
        setError("");
        setLoading(true);
        connectUser.post('',
            { email: email, password: password })
            .then(res => {
                alert('Login realizado com sucesso!');
                setUser(res.data.username, res.data.email);
                setLoginModal(false);
                setLoading(false);
            }).catch(e => {
                if (e.response !== undefined) {
                    if (e.response.status === 400) setError('Usuário ou senha não informado(s)!');
                    else if (e.response.status === 401) setError('Usuário ou senha inválido(s)!')
                } else {
                    console.log(e);
                }
                setLoading(false);
            });
    }

    return (
            <Modal styles={{ overlay: { background: 'black' } }} className="modal_fundo" show={loginModal} onHide={() => setLoginModal(false)} >
                <div className="modal_body">
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="formulario" show={!loading}
                            onSubmit={(event) => {
                                event.preventDefault();
                                login();
                            }}>
                            {error && (<div className="login-error">{error}</div>)}
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control required disabled={loading} autoFocus value={email} type="email"
                                    onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control required disabled={loading} autoFocus type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                            </Form.Group>
                            <Form.Group>
                                {loading ? (<Button disabled><Spinner /></Button>) : (<Button type="submit">Entrar</Button>)}
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
    );

}
export default ModalLogin;