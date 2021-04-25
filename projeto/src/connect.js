import axios from 'axios';


// var requestOptions = {
//     headers: {
//         'Access-Control-Allow-Origin': '*'
//     }
// };

// const connect = axios.get('https://game-oferta.herokuapp.com/stores', requestOptions)
// .then(function(response){
//     console.log(response);
// })

const connect = axios.create({
    // baseURL: 'https://game-oferta.herokuapp.com/stores',    
     baseURL: 'https://game-oferta-api.herokuapp.com/stores'
    //  headers: {        
    //     'Content-Type': 'application/json',
    //     // 'Access-Control-Allow-Origin': '*',
    //     // 'Access-Control-Allow-Headers': '*',
    //     // 'Access-Control-Allow-Methods': '*',
    //     // 'Access-Control-Allow-Credentials': true,
    //      'Access-Control-Allow-Origin': 'https://game-oferta.herokuapp.com/stores'

    //   }
});






export default connect;