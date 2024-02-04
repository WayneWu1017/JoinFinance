<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.symbol">
        {{ item.symbol }} : {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script type="module">
import axios from "axios";
export default {
  data() {
    return {
      items: [
        {
          symbol: "BTCUSDT",
          price: "",
        },
        {
          symbol: "ETHUSDT",
          price: "",
        },
      ],
    };
  },
  async created() {
    let symbols = this.items.map((x) => x.symbol);
    symbols = `["${symbols.join('","')}"]`;
    setInterval(async () => {
      // console.log(symbols);
      const response = await axios.get(`/?symbols=${symbols}`);
      // console.log(response.data);
      this.items = response.data;
    }, 5000);
  },
};
</script>
