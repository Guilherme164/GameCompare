import React from "react";
import "./style.css";
import {
    Link
} from "react-router-dom";
import ModalLogin from "../ModalLogin";
import ModalCadastroLogin from "../ModalCadastroLogin";
import { Nav, Form, Navbar } from "react-bootstrap";


function NavBar(props) {
    
    return (
        <header>
            <Navbar className="topnav">                
                <Nav className="mr-auto">
                    {/* <Link className="linknavnav-link " rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></Link> */}
                    <Link className="linknav "to="/">Home</Link>
                    <Link className="linknav"to="/WishList">Lista de desejos</Link>                    
                </Nav>
                <Form inline>
                    <ModalCadastroLogin setUser={props.setUser}/>
                    <ModalLogin setUser={props.setUser}/>                    
                </Form>
            </Navbar>
        </header>

    );

}
export default NavBar;