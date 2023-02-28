const app = Vue.createApp({
    data(){
        return {
            navbar: false,
        }
    },
    computed: {
        navClasses(){
            return { "active" : this.navbar }
        }
    }
}).mount("#app")