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

function CardJogos({jogo, page}) {   
       const Logo  = jogo.cover;  
    const lojas = jogo.deals;    
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
                        <TituloInfoJogo>{jogo.name}</TituloInfoJogo>
                    </CabecalhoInfoJogo>
                    <ul>             
                        {lojas.map(function(lojas, i){                        
                        return <li key={lojas.id_deal}>{lojas.store_name}: R${lojas.price_new}</li>
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