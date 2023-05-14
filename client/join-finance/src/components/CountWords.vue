<template>
  <div>{{ price }}</div>
</template>

<script type="module">
  import axios from 'axios';
 export default({
    data() {
      return {
        price: 0
      }
    },
    async created() {
      const response = await axios.get(`<http://localhost:3000>/?symbols=ETHUSDT`);
      this.price = response.data;
    }
  })

</script>