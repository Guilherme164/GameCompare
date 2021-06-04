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
import { LoginContext } from './contexts/LoginContext';

function App() {
  const [usuario, setUsuario] = useState({ username: '', email: '' });
  const [loginModal, setLoginModal] = useState(false);

  function setUser(username, email) {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    setUsuario({ username: username, email: email });
  }

  function unsetUser() {
    localStorage.clear();
    setUsuario({ username: '', email: '' });
  }

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    if (username && email)
      setUsuario({ username: username, email: email });
  }, []);

  return (
    <main>
      <LoginContext.Provider value={{ usuario, setUser, unsetUser, loginModal, setLoginModal }}>
        <Router>
          <NavBar>
          </NavBar>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/WishList">
              <WishList />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Router>
      </LoginContext.Provider>
    </main >
  );
}

export default App;
