import './assets/App.css';
import NavBar from "./components/NavBar";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import WishList from './Pages/WishList';
import Page404 from './Pages/Page404';
function App() {
  return (
    <main>
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
    </main >
  );

}

export default App;
