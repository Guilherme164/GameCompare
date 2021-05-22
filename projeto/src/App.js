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
function App() 
{
  return(
    <main>
   <Router>         
    <NavBar>
    </NavBar>   
    <Switch>
                <Route path="/WishList">
                    <WishList/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>                
            </Switch>               
    </Router>
    </main >   
  );
  
}

export default App;
