<template>
  <hr>
  <AppProducts />
  <hr>
  <AppBasketProducts />
  <hr>
  <AppNotifications />
</template>

<script>
import AppProducts from "@/components/AppProducts.vue";
import AppBasketProducts from "@/components/AppBasketProducts.vue";
import AppNotifications from "@/components/AppNotifications.vue";
export default {
  data(){
    return {
      providedData: {
        products: [
          {id: 1, name: "product 1", price: 1.99},
          {id: 2, name: "product 2", price: 2.99},
          {id: 3, name: "product 3", price: 3.99},
          {id: 4, name: "product 4", price: 4.99}
        ],
        basketProducts: [],
        notifications: []
      }
    }
  },
  components: {
    AppProducts,
    AppBasketProducts,
    AppNotifications
  },
  methods: {
    inc(id){
      let product = this.providedData.basketProducts.find((basket_product) => basket_product.id === id)
      if(product){
        product.qty++
      } else {
        product = this.providedData.products.find((product) => product.id === id)
        product.qty = 1
        this.providedData.basketProducts.push(product)
      }
      this.createNotification(1)
      return product
    },
    dec(id){
      let product = this.providedData.basketProducts.find((basket_product) => basket_product.id === id)
      if (product.qty > 1) {
        product.qty--;
      } else {
        this.removeFromBasket(product.id)
      }
      this.createNotification(0)
      return product
    },
    removeFromBasket(id){
      this.providedData.basketProducts = this.providedData.basketProducts.filter((basket_product) => basket_product.id !== id)
      this.createNotification(0)
    },
    /**
     * type = 0 is dec
     * type = 1 is inc
     * @param type
     */
    createNotification(type = 0){
      let notification = {}
      switch (type){
        case 0:
          notification = {class_name: "success", message: "Successfully deleted from cart"}
          break
        case 1:
          notification = {class_name: "success", message: "Basket successfully updated"}
          break
        default:
          notification = {class_name: "danger", message: "An error has occurred"}
          break
      }
      this.providedData.notifications.push(notification)
      this.clearNotifications();
    },
    clearNotifications(ms = 800){
      if (this.providedData.notifications.length > 0) {
        setTimeout(() => this.providedData.notifications.shift(), ms)
      }
    }
  },
  provide() {
    return {
      providedData: this.providedData,
      inc: this.inc,
      dec: this.dec,
      removeFromBasket: this.removeFromBasket,
    }
  },
}
</script>