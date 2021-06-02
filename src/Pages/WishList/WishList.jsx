import React from "react";
import "./style.css";
import JogosGerais from "../../components/JogosGerais";

function WishList(props) {
  return(
    <JogosGerais usuario={props.usuario} rota="wishlist"/>
  );
}
export default WishList;