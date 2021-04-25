import React, { Fragment } from "react";
import CardJogos from '../components/CardJogos';
import { useJogos } from '../hooks/hooksJogos';
function Home() {
  const jogos = useJogos();   
  if (jogos.length > 0) {
    return <CardJogos jogo={jogos}></CardJogos>
  } else {
    return <Fragment></Fragment>
  }
}

export default Home;