import React from "react";
import "./style.css";
import JogosGerais from "../../components/JogosGerais";

function WishList(props) {
  return(
    <JogosGerais log={props.log} rota="wishlist"/>
  );
}
export default WishList;