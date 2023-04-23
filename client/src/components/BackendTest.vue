/* eslint-disable no-console */
<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <h1>{{ item.symbol }}</h1>
      <h2>{{ item.price }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BackendTest',
  data () {
    return {
      items: [
        {symbol: 'ETHUSDT', price: ''},
        {symbol: 'SANDUSDT', price: ''}
      ]
    }
  },
  created () {
    // Fetch data from server every 2 seconds
    this.fetchData()
    setInterval(this.fetchData, 5000)
  },
  methods: {
    async fetchData () {
      // Perform API request to fetch data from server
      // and update the 'items' data property with the fetched data
      // For example, using Axios library
      var serializedData = `symbols=${this.items.map(x => x.symbol).join('&symbols=')}`
      const response = await axios.get(`/?${serializedData}`)
      console.log(response.data)
      this.items = response.data
    }
  }
}
</script>
