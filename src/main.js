import Vue from 'vue'
import App from './App.vue'
import JsonViewer from 'vue-json-viewer'
import store from "./vuex/store"
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(JsonViewer)

import "./assets/css/styles.css";
import 'vue-json-viewer/style.css'

new Vue({
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
