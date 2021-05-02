import { useState, useEffect } from "react";
import connect from '../connect';

const carregajogo = async setJogo => {
  const results = await connect.get();  
  setJogo(results.data); 
  console.log(results.data);
  // const [jogoAtual, setJogo] = useState([results.data]);
  //console.log(jogoAtual);
  
  // return results.data;
};

export function useJogos() {
  const [jogoAtual, setJogo] = useState([]);
   useEffect(() => {
     carregajogo(setJogo);
   }, []);
   
  return jogoAtual;
}

