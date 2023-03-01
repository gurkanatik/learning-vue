<template>
  <li>
    {{ product.name }} - ${{ product.price }} - {{ product.qty }}
    <button @click="inc(product.id)">+</button>
    <button @click="dec(product.id)">-</button>
    <button @click="removeFromBasket(product.id)">Remove From Basket</button>
  </li>
</template>
<script>
export default {
  props: ["product"],
  inject: ["inc","dec","removeFromBasket"]
}
</script>