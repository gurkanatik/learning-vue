const app = Vue.createApp({
    data(){
        return {
            products: [
                {id: 1, name: "product 1", price: 1.99},
                {id: 2, name: "product 2", price: 2.99},
                {id: 3, name: "product 3", price: 3.99},
                {id: 4, name: "product 4", price: 4.99}
            ],
            basket: [],
            notifications: [],
            search: ""
        }
    },
    methods: {
        inc(id){
            let product = this.basket.find((basket_product) => basket_product.id === id)
            if(product){
                product.qty++
            } else {
                product = this.products.find((product) => product.id === id)
                product.qty = 1
                this.basket.push(product)
            }
            this.createNotification(1)
            return product
        },
        dec(id){
            let product = this.basket.find((basket_product) => basket_product.id === id)
            if (product.qty > 1) {
                product.qty--;
            } else {
                this.removeFromBasket(product.id)
            }
            this.createNotification(0)
            return product
        },
        removeFromBasket(id){
            this.basket = this.basket.filter((basket_product) => basket_product.id !== id)
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
            this.notifications.push(notification)
            this.clearNotifications();
        },
        clearNotifications(ms = 800){
            if (this.notifications.length > 0) {
                setTimeout(() => this.notifications.shift(), ms)
            }
            this.notifications
        }
    },
    computed: {
        filteredProducts(){
            return this.products.filter((product) => product.name.includes(this.search))
        }
    }
}).mount("#app")