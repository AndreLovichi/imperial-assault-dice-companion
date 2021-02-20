const state = {
    minAccuracy: 0,
}

const mutations = {
    setMinAccuracy(state, minAccuracy) {
        state.minAccuracy = minAccuracy;
    }
}

export default {
    namespaced: true,
    state,
    mutations
}