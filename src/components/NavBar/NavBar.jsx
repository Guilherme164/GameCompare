import React, { useContext, Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import ModalCadastroLogin from "../ModalCadastroLogin";
import { Nav, Form, Navbar, Button } from "react-bootstrap";
import { LoginContext } from '../../contexts/LoginContext';
import logo  from '../../assets/img/logo.png';

function NavBar() {

    const { usuario, unsetUser, setLoginModal } = useContext(LoginContext);

    return (
        <header>
            <Navbar className="topnav">
                <Nav className="mr-auto">
                    <Link className="linknav " to="/"><img alt="logo" src={logo} className="logo"></img></Link>
                    <Link className="linknav " to="/"><div>Home</div></Link>
                    {usuario.username === '' ?
                        (<Link className="linknav" onClick={() => setLoginModal(true)}><div>Lista de desejos</div></Link>) :
                        (<Link className="linknav" to="/WishList"><div>Lista de desejos</div></Link>)}
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