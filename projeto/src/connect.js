import axios from 'axios';
export const connect = axios.create({    
     // baseURL: 'http://game-oferta-api.herokuapp.com/game/doom'
     baseURL: 'https://game-oferta-api.herokuapp.com/games_deals?limit=15&order=desc'
});
