import './assets/App.css';
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import WishList from './Pages/WishList';
import Page404 from './Pages/Page404';
import { connectUser } from './connect';

function App() {
  const [usuario, setUsuario] = useState([]);
  const [senha, setSenha] = useState([]);
  const [log, setLog] = useState([]);

  function login(){
    if(usuario.length > 0 && senha.length > 0) {
      connectUser.post('', { email: usuario, password: senha })
        .then((results) => {
          setLog(results.data);
          console.log('oi')        
        });
    }
  }  
  return (
    <main>
      <Router>
        <NavBar busca={busca}>
        </NavBar>
       
        <Switch>
          <Route exact path='/'>
            <Home  log={log}/>
          </Route>
          <Route path="/WishList">
            <WishList log={log}/>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </main >
  );
  function busca(user, password) {
    setUsuario(user);
    setSenha(password);
    login();
  }


}

export default App;
