import Vue from "vue"
import Vuex from "vuex"

import accuracy from "./modules/accuracy"
import dice from "./modules/dice"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        accuracy,
        dice
    }
})

export default store;