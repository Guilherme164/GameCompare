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
  const [usuario, setUsuario] = useState({username:'',email:''});

  function setUser(username, email) {
    setUsuario({ username: username, email: email });
  }

  return (
    <main>
      <Router>
        <NavBar setUser={setUser}>
        </NavBar>

        <Switch>
          <Route exact path='/'>
            <Home usuario={usuario} />
          </Route>
          <Route path="/WishList">
            <WishList usuario={usuario} />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </main >
  );

}

export default App;
