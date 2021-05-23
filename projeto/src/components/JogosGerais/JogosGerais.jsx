import React, { Fragment, useState, useEffect } from "react";
import Buscador from "../Buscador";
import ListaJogos from "../ListaJogos";
import Paginacao from "../Paginacao";
import { connect, connectWish } from '../../connect';

import "./style.scss";

function JogosGerais({ rota }) {

  const [page, setPage] = useState(1);
  const [pesquisa, setPesquisa] = useState([]);
  const [jogoHome, setJogoHome] = useState([]);
  const [totalPagesHome, setTotalPagesHome] = useState(0);
  const [jogoWish, setJogoWish] = useState([]);
  const [totalPagesWish, setTotalPagesWish] = useState(0);

  var term = pesquisa.pesquisa;
  var jogo = '';
  var totalPages = '';

  useEffect(() => {
    connect.get('', { params: { term } }).then((results) => {
      setJogoHome(results.data);
      setTotalPagesHome(Math.ceil(results.data.length / 8));
    });
  }, [term]);

  useEffect(() => {
    connectWish.get('', { params: { term } }).then((results) => {
      setJogoWish(results.data);
      setTotalPagesWish(Math.ceil(results.data.length / 8));
    });
  }, [term]);

  const handleClick = num => {
    setPage(num);
  }
  
  if (rota === "home") {
    jogo = jogoHome;
    totalPages = totalPagesHome;
  } else {
    jogo = jogoWish;
    totalPages = totalPagesWish;
  }

  console.log(jogo);
  if (jogo.length > 0) {

    return (
      <div className="content">
        <Buscador buscar={coletarDados} />
        <div className="lista"><ListaJogos jogo={jogo} pagina={page} /></div>
        <div className="paginacao"><Paginacao totalPages={totalPages} handleClick={handleClick} /></div>
      </div>);
  } else {
    return (<Fragment><h1>Carregando</h1></Fragment>);
  }

  function coletarDados(dados) {
    setPesquisa({ ...pesquisa, ...dados });
  }

}

export default JogosGerais;