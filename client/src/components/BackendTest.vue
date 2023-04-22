/* eslint-disable */
<template>
    <div v-for="item in items">
        <h1>{{ item['symbol'] }}</h1>
        <p>{{ item['price'] }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BackendTest',
  data () {
      items: [
        {"symbol": "ETHUSDT", "price":""},
        {"symbol": "NEARUSDT", "price": ""}
      ]
  },
  async created () {
    serialized_data = `symbols=${items.map(x => x['symbol']).join('&symbols=')}`
    const response = await axios.get(`/?${serialized_data}`)
    this.items = response.data
  }
}
</script>
