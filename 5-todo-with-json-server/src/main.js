import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "./assets/style.css"

/**
 * Bootstrap
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/**
 * FontAwesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faCheck, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add({
    faPlus, faCheck, faSpinner, faTrash
})

/**
 * SweetAlert
 */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(VueSweetalert2);
app.mount('#app')