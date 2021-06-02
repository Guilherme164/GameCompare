import React, { Fragment, useState, useEffect } from "react";
import Buscador from "../Buscador";
import ListaJogos from "../ListaJogos";
import Paginacao from "../Paginacao";
import { connect, connectWish } from '../../connect';
import { ReactComponent as Pacman } from '../../assets/img/pacman.svg';

import "./style.scss";

function JogosGerais({ rota, usuario }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState([]);
  const [storeFilter, setStoreFilter] = useState(false);
  const [discountFilter, setDiscountFilter] = useState(0);
  const [jogo, setJogo] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  function coletarDados(term, storeIDs, discountFilter) {
    setTerm(term);
    setStoreFilter(storeIDs);
    setDiscountFilter(discountFilter);
  }

  useEffect(() => {
    setLoading(true);
    let username = usuario ? usuario.username : '';
    let store_filter = storeFilter;
    let min_discount = discountFilter;
    var storeIDs = null;
    if (rota === "home") {
      connect.get('', { params: { username, term, store_filter, min_discount } }).then((results) => {
        if (storeFilter) {
          storeIDs = storeFilter.split(',');
          results.data.map((game) => {
            let includeDeals = [];
            for (var i = 0; i < game.deals.length; i++) {
              if (storeIDs.includes(game.deals[i].id_store))
                includeDeals.push(game.deals[i]);
            }
            game.deals = includeDeals;
          });
        }
        setJogo(results.data);
        setTotalPages(Math.ceil(results.data.length / 8));
        setLoading(false);
      });
    } else {
      connectWish.get('wishlists?deals=true', { params: { username, term } }).then((results) => {
        var gameList = [];
        if (discountFilter > 0) {
          for (var i = 0; i < results.data.length; i++) {
            let hasDiscount = false;
            results.data[i].deals.map((deal) => {
              if (deal.price_cut >= discountFilter) hasDiscount = true;
            });
            if (hasDiscount) gameList.push(results.data[i]);
          }
        } else gameList = results.data;

        if (storeFilter) {
          storeIDs = storeFilter.split(',');
          var includeGames = [];
          for (var i = 0; i < gameList.length; i++) {
            let gameDeals = [];
            gameList[i].deals.map((deal) => {
              if (storeIDs.includes(deal.id_store))
                gameDeals.push(deal);
            });
            if (gameDeals.length > 0) {
              gameList[i].deals = gameDeals;
              includeGames.push(gameList[i]);
            }
          }
          setJogo(includeGames);
        } else setJogo(gameList);

        setTotalPages(Math.ceil(gameList.length / 8));
        setLoading(false);
      });
    }
  }, [rota, usuario, term, storeFilter, discountFilter]);


  const handleClick = num => {
    setPage(num);
  }

  return (
    <div className="content">
      <Buscador buscar={coletarDados} />
      {loading ? (<Pacman className="centered" />) :
        (jogo.length > 0 ? (<div className="lista"><ListaJogos usuario={usuario} jogo={jogo} pagina={page} rota={rota} /></div>
          /* <div className="paginacao"><Paginacao totalPages={totalPages} handleClick={handleClick} /></div> */
        ) : (<h1 className="centered">Nenhum jogo encontrado.</h1>))}
    </div>);
}


export default JogosGerais;