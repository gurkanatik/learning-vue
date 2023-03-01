<template>
  <h1>Products</h1>
  <ul>
    <AppProduct v-for="product in providedData.products" :key="product" :product="product" />
  </ul>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";
export default {
  components: {
    AppProduct
  },
  inject: ["providedData"]
}
</script>