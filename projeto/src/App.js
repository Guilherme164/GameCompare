import './assets/App.css';
import NavBar from "./components/NavBar";
import CardJogos from "./components/CardJogos";
import React, { Component } from 'react';
// import Home from "./Pages/Home";

class App extends Component
{
  render(){
  return(
   <main>
   <NavBar></NavBar>
   <CardJogos></CardJogos>
   <CardJogos></CardJogos>
   <CardJogos></CardJogos>
   <CardJogos></CardJogos>
   {/* <Home></Home> */}
   </main >
  );
  }
}

export default App;
