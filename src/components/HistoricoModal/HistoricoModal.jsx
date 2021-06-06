import React, { useEffect, useState } from "react";
import "./style.scss";
import { Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { teste, connect } from '../../connect';

function HistoricoModal({ plain, show, handleShow, handleClose }) {

    const [jogos, setJogos] = useState(false);
    const [deals, setDeals] = useState(false);
    var game = plain;
    var all_deals = true;
    var group_stores = true;

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    useEffect(() => {
        teste.get('games_deals?', { params: { game, all_deals, group_stores } }).then((results) => {
            setJogos(results.data);
            const Arraydeals = Object.values(results.data.deals);
            setDeals(Arraydeals);
            console.log(Arraydeals);
        });
    }, [game, all_deals, group_stores]);

    return (
        <Modal show={show} onHide={handleClose}>         
            <Modal.Header closeButton>
                <Modal.Title>Histórico do Jogo: {jogos.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Loja</th>
                            <th>Data de Oferta</th>
                            <th>Preço</th>
                            <th>% desconto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(deals.length > 0 ?
                            deals.map(deals => (
                                deals.map(deals => (
                                    (<tr key={deals.id_deals}>
                                        <td>{deals.store_name}</td>
                                        <td>{deals.date}</td>
                                        <td>{deals.price_new.replace('.', ',')}</td>
                                        <td>{deals.price_cut}%</td>
                                    </tr>))))) :
                            (<tr><td>Não há ofertas para esse jogo</td><td></td><td></td><td></td></tr>))
                        }
                    </tbody>
                </Table>
            </Modal.Body>       
        </Modal>

    );
}
export default HistoricoModal;