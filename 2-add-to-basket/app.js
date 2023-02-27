const app = Vue.createApp({
    data(){
        return {
            products: [
                {id: 1, name: "product 1", price: 1.99},
                {id: 2, name: "product 2", price: 2.99},
                {id: 3, name: "product 3", price: 3.99},
                {id: 4, name: "product 4", price: 4.99}
            ],
            basket: []
        }
    },
    methods: {
        addToBasket(id){
            let product = this.basket.find((basket_product) => basket_product.id === id)
            if(product){
                product.qty++
            } else {
                product = this.products.find((product) => product.id === id)
                product.qty = 1
                this.basket.push(product)
            }
            return product
        },
        removeFromBasket(id){
            this.basket = this.basket.filter((basket_product) => basket_product.id !== id)
        }
    }
}).mount("#app")