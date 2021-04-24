import React, { Component } from "react";
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
import Logo from '../../assets/img/skyrim_logo.jpg';
class CardJogos extends Component {

       render() {
        return (
            <CardJogo>                      
                    <Jogo>                        
                        <Imglink>
                        <Img src={Logo}></Img>
                        <LinkTrailer href="https://www.google.com">Ver Trailer
                        </LinkTrailer>                       
                        </Imglink>                     
                        <InfoJogo>
                        <CabecalhoInfoJogo>                           
                            <TituloInfoJogo>Skyrim</TituloInfoJogo>
                        </CabecalhoInfoJogo>                        
                        <ul>
                            <li>         
                            Steam: R$20000,00
                            </li>
                            <li>         
                            Epic: R$20,00
                            </li>
                            <li>
                            Origin R$25,00    
                            </li>
                        </ul>                        
                        <BtnDiv>
                            <Btn>Adicionar Wishlist</Btn>
                        </BtnDiv>
                        </InfoJogo>                     
                    </Jogo>      
            </CardJogo>                
        );
    }
}
export default CardJogos;