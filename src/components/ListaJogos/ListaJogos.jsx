import React from "react";
import CardJogos from '../CardJogos/CardJogos';

function ListaJogos({ jogo, rota, storeFilter, lineSize }) {

    if (lineSize) {
        return jogo.slice(0, lineSize).map(jogo => (
            <CardJogos key={jogo.id} jogo={jogo} rota={rota} storeFilter={storeFilter} />
        ))
    } else {
        return jogo.map(jogo => (
            <CardJogos key={jogo.id} jogo={jogo} rota={rota} storeFilter={storeFilter} />
        ))
    }

}

export default ListaJogos;