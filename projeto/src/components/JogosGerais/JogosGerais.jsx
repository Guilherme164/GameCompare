import React, { Fragment, useState, useEffect } from "react";
import Buscador from "../Buscador";
import ListaJogos from "../ListaJogos";
import Paginacao from "../Paginacao";
import { connect, connectWish } from '../../connect';

import "./style.scss";

function JogosGerais({ rota, log }) {

  const [page, setPage] = useState(1);
  const [pesquisa, setPesquisa] = useState([]);
  const [jogo, setJogo] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
 

  var term = pesquisa.pesquisa;
  
  console.log(log);
  var username = log.username;

  // useEffect(() => {
  //   if(rota === "home"){connect.get('', { params: { term } }).then((results) => {
  //     setJogo(results.data);
  //     setTotalPages(Math.ceil(results.data.length / 8));
  //   });}else{
  //     connectWish.get('', { params: { term } }).then((results) => {
  //       setJogo(results.data);
  //       setTotalPages(Math.ceil(results.data.length / 8));
  //     });
  //   }
  // }, [rota,term]);
  useEffect(() => {
      if(rota === "home"){connect.get('', { params: { username,term } }).then((results) => {
        setJogo(results.data);
        setTotalPages(Math.ceil(results.data.length / 8));
      });}else{
        connectWish.get('wishlists?deals=true', { params: { username,term } }).then((results) => {
          setJogo(results.data);
          setTotalPages(Math.ceil(results.data.length / 8));
        });
      }
    }, [rota,username,term]);


  const handleClick = num => {
    setPage(num);
  }
  
  

  // console.log(jogo);
  if (jogo.length > 0) {

    return (
      <div className="content">
        <Buscador buscar={coletarDados} />
        <div className="lista"><ListaJogos log={log} jogo={jogo} pagina={page} /></div>
        {/* <div className="paginacao"><Paginacao totalPages={totalPages} handleClick={handleClick} /></div> */}
      </div>);
  } else {
    return (<Fragment><h1>Carregando</h1></Fragment>);
  }

  function coletarDados(dados) {
    setPesquisa({ ...pesquisa, ...dados });
  }
  
}

export default JogosGerais;