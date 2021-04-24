import './assets/App.css';
import NavBar from "./components/NavBar";
import CardJogos from "./components/CardJogos";
import React, { Component } from 'react';

class App extends Component
{
  render(){
  return(
   <main>
   <NavBar></NavBar>
   <CardJogos></CardJogos>
   </main >
  );
  }
}

export default App;
