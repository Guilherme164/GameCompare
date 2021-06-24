import React from "react";
import "./style.scss";
import { Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalVerMais({ name, deals, verMais, setVerMais }) {
    return (
        <Modal show={verMais} onHide={() => setVerMais(false)} className="modal-ver-mais">
            <Modal.Header closeButton>
                <Modal.Title>
                    <><div class="game-title"><strong>{name}</strong></div><div>Lista de Preços </div> </>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Loja</th>
                            <th>Preço (R$)</th>
                            <th>Desconto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deals.map(deal => (
                            (<tr key={deal.id_deals}>
                                <td><a href={deal.url} target="_blank">{deal.store_name}</a></td>
                                <td><a href={deal.url} target="_blank">{deal.price_new.replace('.', ',')}</a></td>
                                {deal.price_cut == 0 ? (<td>-</td>) : (
                                    <td className="price-cut"><a href={deal.url} target="_blank"><strong>{deal.price_cut}%</strong></a></td>
                                )}
                            </tr>)))}
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    );
}
export default ModalVerMais;