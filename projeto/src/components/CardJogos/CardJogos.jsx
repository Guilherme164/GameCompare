import React from "react";
// import "./style.css";
import { Jogo } from './style';
import { CardJogo } from './style';
import { Imglink } from './style';
import { LinkTrailer } from './style';
import { Img } from './style';
import { InfoJogo } from './style';
import { CabecalhoInfoJogo } from './style';
import { TituloInfoJogo } from './style';
import { BtnDiv } from './style';
import { Btn } from './style';
// import Logo from '../../assets/img/skyrim_logo.jpg';

function CardJogos({jogo}) {   
    const Logo  = jogo[1].game_cover;    
    return (
        <CardJogo>
            <Jogo>
                <Imglink>
                    <Img src={Logo}></Img>
                    <LinkTrailer href={"https://www.google.com"}>Ver Trailer
                    </LinkTrailer>
                </Imglink>
                <InfoJogo>
                    <CabecalhoInfoJogo>
                        <TituloInfoJogo>{jogo[1].game_name}</TituloInfoJogo>
                    </CabecalhoInfoJogo>
                    <ul>                        
                        {/* <li>
                            {jogo[1].store_name}: R${jogo[1].price_new}
                        </li> */}
                        {jogo.map(function(jogo, i){                        
                        return <li key={jogo.id_store}>{jogo.store_name}: R${jogo.price_new}</li>
                        })}                        
                    </ul>
                    <BtnDiv>
                        <Btn>Adicionar Wishlist</Btn>
                    </BtnDiv>
                </InfoJogo>
            </Jogo>
        </CardJogo>
    );
}
export default CardJogos;