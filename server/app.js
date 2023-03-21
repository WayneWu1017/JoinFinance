const express = require('express');
const app = express();

const { Spot } = require('@binance/connector')

const API_KEY = 'ZZaue2WP36pT9ozYNqDVrlpH1DTKBbs5vJsOUCUAS2hVeQcx4oHithLwjT9s9R3t';
const API_SECRET = 'pblw8jf95M2kv94RnpdwxC96uCq9ZygrK48uTyRwvqQAKj4t7h8ezsYKmTjOXskt';

const client = new Spot(API_KEY, API_SECRET);

// client.account().then(response => client.logger.log(response.data))

const axios = require('axios');

var body = {}
axios.get('https://api.binance.us/api/v3/trades?symbol=ETHUSDT').then(response => {
    console.log(response.data)
    // for(const value of response.data){
    //     if(value['Name'].includes('0') || value['Name'].includes('1') || value['Name'].includes('2')){
    //         continue
    //     }
    //     console.log(value['Name'], value['ClosingPrice']);
    //     body[value['Name']] = value['ClosingPrice']
    // }
});

app.get('/', (req, res) => {
    res.send(body);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})