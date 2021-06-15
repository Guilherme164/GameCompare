import React from "react";
import CardJogos from '../CardJogos/CardJogos';

function ListaJogos({jogo,pagina,rota,storeFilter}) {    
      
    //var pagina = 1; 
    /*const startIndex = ( pagina - 1 ) * 8;
    const selectedUsers = jogo.slice(startIndex, startIndex + 8);*/
    return jogo.map(jogo => (
        <CardJogos key={jogo.id} jogo={jogo} rota={rota} storeFilter={storeFilter}/>
    ))
  }
  
  export default ListaJogos;