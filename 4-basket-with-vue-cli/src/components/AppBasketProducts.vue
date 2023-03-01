<template>
  <h1>Basket</h1>
  <ul v-if="providedData.basketProducts.length > 0">
    <AppBasketProduct v-for="product in providedData.basketProducts" :key="product.id" :product="product" />
  </ul>
  <div v-else>No item</div>
</template>

<script>
import AppBasketProduct from "@/components/AppBasketProduct.vue";
import appBasketProduct from "@/components/AppBasketProduct.vue";
export default {
  computed: {
    appBasketProduct() {
      return appBasketProduct
    }
  },
  components: {
    AppBasketProduct,
  },
  inject: ["providedData"]
}
</script>