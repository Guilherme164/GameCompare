import React, { Fragment, useState, useEffect } from "react";
import Buscador from "../components/Buscador";
import ListaJogos from "../components/ListaJogos/ListaJogos";
import Paginacao from "../components/Paginacao";
import { connect} from '../connect';

import "./style.css";

function Home() {
  const [jogo, setJogo] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pesquisa, setPesquisa] = useState([]);

  var term = pesquisa.pesquisa; 
  
  console.log(term);

  useEffect(() => {
    connect.get('',{params:{term}}).then((results) =>{
      setJogo(results.data);
      setTotalPages(Math.ceil(results.data.length / 5));  
    });    
  }, [term]);
  const handleClick = num => {
    setPage(num);
  }
  if (jogo.length > 0) {
    
    return (
      <Fragment>
          <Buscador buscar={coletarDados}/>
          <div className="lista"><ListaJogos jogo={jogo} pagina={page} /></div>
          <div className="paginacao"><Paginacao totalPages={totalPages} handleClick={handleClick} /></div>
      </Fragment>);
  } else {
    return (<Fragment><h1>Carregando</h1></Fragment>);
  }

  function coletarDados(dados){
    setPesquisa({...pesquisa, ...dados});    
  }

}

export default Home;