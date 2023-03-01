<template>
  <li>
    {{ product.name }} - ${{ product.price }}
    <button @click="inc(product.id)">Add 2 Basket</button>
  </li>
</template>
<script>
export default {
  props: ["product"],
  inject: ["inc"]
}
</script>