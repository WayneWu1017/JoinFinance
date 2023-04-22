const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const { Spot } = require('@binance/connector')

const API_KEY = 'ZZaue2WP36pT9ozYNqDVrlpH1DTKBbs5vJsOUCUAS2hVeQcx4oHithLwjT9s9R3t';
const API_SECRET = 'pblw8jf95M2kv94RnpdwxC96uCq9ZygrK48uTyRwvqQAKj4t7h8ezsYKmTjOXskt';

const client = new Spot(API_KEY, API_SECRET);

// client.account().then(response => client.logger.log(response.data))

const axios = require('axios');

const test_list = ["BTCUSDT","BNBUSDT"]
get_price_by_symbols(test_list).then((price_list)=>{
    console.log(price_list)
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    console.log(req.query['symbols'])
    for(const trading_pair of msg){
        if(trading_pair['symbol'] == req.query['symbol']){
            res.send(trading_pair['price']);
            break
        }
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

function list_to_string_with_bracket(origin_list){
    return `["${origin_list.join('","')}"]`
}

function get_price_by_symbols(symbols){
    return new Promise((res, rej) => {
        axios.get(`https://api.binance.us/api/v3/ticker/price?symbols=${list_to_string_with_bracket(symbols)}`).then(response => {
            const data_list = response.data
            const price_list = data_list.map(x => x['price'])
            res(price_list)
        }).catch(err => {
            rej(err.response.data.msg)
        })
    })
}