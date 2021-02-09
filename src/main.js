import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store"
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import "./assets/css/styles.css";


new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
