import React, { Fragment, useState, useEffect, useContext } from "react";
import Buscador from "../Buscador";
import ListaJogos from "../ListaJogos";
import { connect, connectWish, connectHomePage } from '../../connect';
import { ReactComponent as Pacman } from '../../assets/img/pacman.svg';
import { LoginContext } from '../../contexts/LoginContext';
import { useMediaQuery } from 'react-responsive'

import "./style.scss";

function JogosGerais({ rota }) {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState([]);
  const [storeFilter, setStoreFilter] = useState(false);
  const [discountFilter, setDiscountFilter] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(299);
  const [jogo, setJogo] = useState([]);
  const [lineSize, setLineSize] = useState(false);
  const [resultados, setResultados] = useState(false);
  const [topGames, setTopGames] = useState([]);
  const [topFree, setTopFree] = useState([]);
  const [topNew, setTopNew] = useState([]);
  const [topF2P, setTopF2P] = useState([]);

  const { usuario } = useContext(LoginContext);

  function coletarDados(term, storeIDs, discountFilter, minPrice, maxPrice) {
    setTerm(term);
    setStoreFilter(storeIDs);
    setDiscountFilter(discountFilter);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  }

  useEffect(() => {
    setLoading(true);
    let username = usuario ? usuario.username : '';
    let store_filter = storeFilter;
    let min_discount = discountFilter;
    if (minPrice === "" || minPrice === null) setMinPrice(0);
    if (maxPrice === "" || maxPrice === null) setMaxPrice(299);
    let price_range = minPrice + "," + maxPrice;
    var storeIDs = null;
    if (rota === "home" && resultados) {
      connect.get('', { params: { username, term, store_filter, min_discount, price_range } }).then((results) => {
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
        setLoading(false);
      });
    } else if (rota === "wishlist") {
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
          let includeGames = [];
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
          gameList = includeGames;
        }
        let finalGameArray = [];
        for (var i = 0; i < gameList.length; i++) {
          let include = false;
          gameList[i].deals.map((deal) => {
            if (deal.price_new >= parseInt(minPrice) && deal.price_new <= parseInt(maxPrice))
              include = true;
          });
          if (include) finalGameArray.push(gameList[i]);
        }
        setJogo(finalGameArray);
        setLoading(false);
      });
    } else if (rota === "home") {
      connectHomePage.get('', { params: { username } }).then((results) => {
        setTopGames(results.data.top_games);
        setTopFree(results.data.top_free);
        setTopNew(results.data.top_recent);
        setTopF2P(results.data.top_f2p);
        setLoading(false);
      });
    }
  }, [rota, usuario, term, storeFilter, discountFilter, minPrice, maxPrice]);

  const displayTwo = useMediaQuery({
    query: '(min-width: 690px)'
  });
  const displaySix = useMediaQuery({
    query: '(min-width: 1000px)'
  });
  const displayFour = useMediaQuery({
    query: '(min-width: 1334px)'
  });
  const displayFive = useMediaQuery({
    query: '(min-width: 1640px)'
  });

  function SectionHeader(props){
    return <div className="section-title"><span>{props.titulo}</span><div className="section-hr"></div></div>
  }


  useEffect(() => {
    if (displayFive) setLineSize(5);
    else if (displayFour) setLineSize(4);
    else if (displaySix) setLineSize(6);
    else if (displayTwo) setLineSize(4);
    else setLineSize(3);
  }, [displayTwo, displaySix, displayFour, displayFive]);

  if (rota === 'home' && !resultados) {
    return (
      <div className="content">
        <Buscador buscar={coletarDados} rota={rota} setResultados={setResultados} />
        {loading ? (<Pacman className="centered" />) : (
          <Fragment>
            <div className="lista">
              <SectionHeader titulo="Ofertas em Destaque"/>
              <ListaJogos jogo={topGames} rota={rota} storeFilter={storeFilter} lineSize={lineSize} />
            </div>
            <div className="lista">
              <SectionHeader titulo="Temporariamente Gratuitos"/>
              <ListaJogos jogo={topFree} rota={rota} storeFilter={storeFilter} lineSize={lineSize} />
            </div>
            <div className="lista">
              <SectionHeader titulo="Adicionados Recentemente"/>
              <ListaJogos jogo={topNew} rota={rota} storeFilter={storeFilter} lineSize={lineSize} />
            </div>
            <div className="lista">
              <SectionHeader titulo="Free To Play"/>
              <ListaJogos jogo={topF2P} rota={rota} storeFilter={storeFilter} lineSize={lineSize} />
            </div>
          </Fragment>
        )}
      </div>
    );
  } else {
    return (
      <div className="content">
        <Buscador buscar={coletarDados} rota={rota} setResultados={setResultados} />
        {(rota === 'wishlist' && usuario.username === '') ?
          (<h1 className="centered">Faça login para ver a sua Wishlist.</h1>) :
          (<>{loading ? (<Pacman className="centered" />) :
            (jogo.length > 0 ? (<div className="lista">
              {rota == "wishlist" ? (<>{resultados ? (<SectionHeader titulo="Resultados da Pesquisa (Lista de Desejos)"/>) : (<SectionHeader titulo="Lista de Desejos"/>)}</>) : (<SectionHeader titulo="Resultados da Pesquisa"/>)}
              <ListaJogos jogo={jogo} rota={rota} storeFilter={storeFilter} lineSize={false} />
              </div>
            ) : (<h1 className="centered">Nenhum jogo encontrado.</h1>))}</>)}
      </div>);
  }

}


export default JogosGerais;