import axios from 'axios';
export const connect = axios.create({         
     baseURL: 'https://game-oferta-api.herokuapp.com/games_deals'
});