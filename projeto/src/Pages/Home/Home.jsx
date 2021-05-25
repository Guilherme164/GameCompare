import React from "react";
import JogosGerais from "../../components/JogosGerais";
import "./style.css";

function Home(props) {
  return (<JogosGerais log={props.log} rota="home" />);
}
export default Home;