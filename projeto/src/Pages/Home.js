import React, { Fragment, useState, useEffect } from "react";
import CardJogos from '../components/CardJogos';
import Paginacao from "../components/Paginacao";
import {connect} from '../connect';

function Home() {    
  const [jogo, setJogo] = useState([]); 

  async function carregajogosini(){    
    const results = await connect.get();       
    setJogo(results.data);       
  };

    useEffect(() => {
    carregajogosini();
  }, []); 

  if (jogo.length>0) {
    return(
      <Fragment>
    {jogo.map(function(jogo, i){                        
            return <CardJogos key={jogo.id} jogo={jogo}></CardJogos>
    })} ´
    <Paginacao />
    </Fragment>);              
    } else {
    return (<Fragment><h1>Carregando</h1></Fragment>);
  }
}

export default Home;