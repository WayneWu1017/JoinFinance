<template>
    <div>This is Home page.</div>
    <CryptoPrice/>
</template>

<script>
import CryptoPrice from '@/components/CryptoPrice.vue'
export default {
  name: 'App',
  components: {
    CryptoPrice,
  }
}
</script>