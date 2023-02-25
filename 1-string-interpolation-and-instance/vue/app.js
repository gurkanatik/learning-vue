const app = Vue.createApp({
    data(){
        return {
            caption: "Caption",
            text: "Text",
            url: "https://gurkanatik.com.tr",
            linkText: "Gurkan Atik"
        }
    },
    methods: {
        changeTitle(title){
            this.caption = title
        }
    }
}).mount("#app")