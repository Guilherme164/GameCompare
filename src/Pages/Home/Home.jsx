import React from "react";
import JogosGerais from "../../components/JogosGerais";
import "./style.css";

function Home(props) {
  return (<JogosGerais usuario={props.usuario} rota="home" />);
}
export default Home;