import React from "react";
import "./style.css";
import {
    Link
} from "react-router-dom";
import ModalLogin from "../ModalLogin";
import ModalCadastroLogin from "../ModalCadastroLogin";
import { Nav, Form, Navbar } from "react-bootstrap";


function NavBar() {
    return (
        <header>
            <Navbar className="topnav" variant="dark">                
                <Nav className="mr-auto">
                    <Link className="nav-link" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></Link>
                    <Link className="nav-link"to="/">Home</Link>
                    <Link className="nav-link"to="/WishList">Lista de desejos</Link>                    
                </Nav>
                <Form inline>
                    <ModalCadastroLogin/>
                    <ModalLogin />                    
                </Form>
            </Navbar>
        </header>

    );

}
export default NavBar;