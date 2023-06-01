const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

const { Spot } = require('@binance/connector')

const API_KEY = 'ZZaue2WP36pT9ozYNqDVrlpH1DTKBbs5vJsOUCUAS2hVeQcx4oHithLwjT9s9R3t';
const API_SECRET = 'pblw8jf95M2kv94RnpdwxC96uCq9ZygrK48uTyRwvqQAKj4t7h8ezsYKmTjOXskt';

const client = new Spot(API_KEY, API_SECRET);

// client.account().then(response => client.logger.log(response.data))

const axios = require('axios');

app.get('/', (req, res) => {
    console.log(req.query['symbols'])
    get_price_by_symbols(req.query['symbols']).then((data_list) => {
        res.send(data_list)
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

function list_to_string_with_bracket(origin_list){
    return `["${origin_list.join('","')}"]`
}

function get_price_by_symbols(symbols){
    return new Promise((res, rej) => {
        axios.get(`https://api.binance.us/api/v3/ticker/price?symbols=${symbols}`).then(response => {
            const data_list = response.data
            const price_list = data_list.map(x => x['price'])
            res(data_list)
        }).catch(err => {
            rej(err.response.data.msg)
        })
    })
}