import './assets/App.css';
import NavBar from "./components/NavBar";
import React from 'react';
import Home from '../src/Pages/Home';

function App() 
{
  return(
   <main>
   <NavBar></NavBar>   
   <Home/>
   </main >
  );
  
}

export default App;
