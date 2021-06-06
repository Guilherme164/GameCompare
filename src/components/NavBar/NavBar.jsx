import React, { useContext, Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import ModalCadastroLogin from "../ModalCadastroLogin";
import { Nav, Form, Navbar, Button } from "react-bootstrap";
import { LoginContext } from '../../contexts/LoginContext';

function NavBar() {

    const { usuario, unsetUser, setLoginModal } = useContext(LoginContext);

    return (
        <header>
            <Navbar className="topnav">
                <Nav className="mr-auto">
                    <Link className="linknav " to="/">Home</Link>
                    {usuario.username === '' ?
                        (<Link className="linknav" onClick={() => setLoginModal(true)}>Lista de desejos</Link>) :
                        (<Link className="linknav" to="/WishList">Lista de desejos</Link>)}
                </Nav>
                <Form inline>                    
                    {usuario.username === '' ?
                        (<Fragment>
                            <ModalCadastroLogin />
                            <div>
                                <Button className="login-btn" variant="light" onClick={() => setLoginModal(true)}>
                                    Login
                                </Button>
                                <ModalLogin />
                            </div>
                        </Fragment>) :
                        (<div>
                            <Button className="login-btn" variant="light" onClick={() => unsetUser()}>
                                Sair
                            </Button>
                            <ModalLogin />
                        </div>)}
                </Form>
            </Navbar>
        </header>
    );

}
export default NavBar;