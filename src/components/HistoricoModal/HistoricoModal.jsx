import React, { useEffect, useState } from "react";
import "./style.scss";
import { Modal, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { teste, connect } from '../../connect';
import { ReactComponent as Pacman } from '../../assets/img/pacman.svg';

function HistoricoModal({ plain, show, handleShow, handleClose, storeFilter }) {

    const [jogos, setJogos] = useState(false);
    const [lojas, setLojas] = useState([]);
    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const nomeLojas = [];
    nomeLojas['3'] = 'Amazon';
    nomeLojas['5'] = 'Blizzard';
    nomeLojas['11'] = 'Epic Store';
    nomeLojas['14'] = 'GOG';
    nomeLojas['26'] = 'GMG';
    nomeLojas['27'] = 'Humble';
    nomeLojas['29'] = 'IndieGala';
    nomeLojas['30'] = 'Itch.io';
    nomeLojas['35'] = 'Nuuvem';
    nomeLojas['37'] = 'Origin';
    nomeLojas['42'] = 'Steam';
    nomeLojas['43'] = 'Uplay';
    var game = plain;
    var all_deals = true;
    var group_stores = false;

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    useEffect(() => {
        setLoading(true);
        let store_filter = storeFilter;
        storeFilter ? setLojas(storeFilter.split(',')) : setLojas([]);
        teste.get('games_deals?', { params: { game, all_deals, group_stores, store_filter } }).then((results) => {
            setJogos(results.data);
            setDeals(results.data.deals);
            setLoading(false);
        });
    }, [game, all_deals, group_stores, storeFilter]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{loading ? "Carregando Histórico de Preços..." : (
                    <><div class="game-title"><strong>{jogos.name}</strong></div><div>Histórico de Preços </div> </>
                )}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {lojas.length > 0 && (
                    <div>
                        <span>Filtro de Lojas: </span>
                        {lojas.map(loja => ((<span class="store-name"><strong>{nomeLojas[loja]}</strong></span>)))}
                    </div>
                )}
                {loading ? (<Pacman />) : (
                    <Table>
                        <thead>
                            <tr>
                                <th>Loja</th>
                                <th>Data</th>
                                <th>Preço (R$)</th>
                                <th>Desconto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deals.length > 0 ?
                                deals.map(deals => (
                                    (<tr key={deals.id_deals}>
                                        <td>{deals.store_name}</td>
                                        <td>{deals.date.split(' ')[0]}</td>
                                        <td>{deals.price_new.replace('.', ',')}</td>
                                        {deals.price_cut == 0 ? (<td>-</td>) : (
                                            <td className="price-cut"><strong>{deals.price_cut}%</strong></td>
                                        )}
                                    </tr>))) :
                            (<tr><td>Não há ofertas para esse jogo</td></tr>)}
                        </tbody>
                    </Table>
                )}
            </Modal.Body>
        </Modal>
    );
}
export default HistoricoModal;