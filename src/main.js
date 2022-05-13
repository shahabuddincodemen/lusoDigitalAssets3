import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/assets/css/bootstrap.min.css"
import "../src/assets/css/responsive.css"
import "../src/assets/css/style.css"
import "../src/assets/icon/css/all.min.css"
import "../src/assets/icon/css/fontawesome.min.css"

// import "../src/assets/js/index.js"

createApp(App).use(store).use(router).mount('#app')
