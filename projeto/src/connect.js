import axios from 'axios';
const connect = axios.create({    
     baseURL: 'http://game-oferta-api.herokuapp.com/game/doom'
});
export default connect;