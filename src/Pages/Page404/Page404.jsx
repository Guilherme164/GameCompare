import React from 'react';
import { Container, Card } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

function Page404() {
    return (
        <Container>
            <div className="card_fora">
                <Card className="text-center">
                    <Card.Header>Ops...</Card.Header>
                    <Card.Body>
                        <Card.Title>Página não encontrada</Card.Title>
                        <Card.Text>
                            Por favor, verfique o link de acesso, esta página pode ter sido removida, volte para a página principal.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Link className="nav-link" to="/">Voltar para o inicio</Link>
                    </Card.Footer>
                </Card>
            </div>
        </Container>
    );
}
export default Page404;