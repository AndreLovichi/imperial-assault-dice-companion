import Vue from "vue"
import Vuex from "vuex"

import dice from "./modules/dice"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        dice
    }
})

export default store;