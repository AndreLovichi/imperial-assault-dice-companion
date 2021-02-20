import diceService from "../../services/dice";

const state = {
    blackDiceCount: 0,
    blueDiceCount: 0,
    greenDiceCount: 0,
    redDiceCount: 0,
    whiteDiceCount: 0,
    yellowDiceCount: 0,
}

const getters = {
    attackDiceCount: (state) => {
        return state.blueDiceCount + state.greenDiceCount + state.yellowDiceCount + state.redDiceCount;
    },
    defenseDiceCount: (state) => {
        return state.blackDiceCount + state.whiteDiceCount;
    },
    diceCounts: (state) => {
        return {
            blackDiceCount: state.blackDiceCount,
            blueDiceCount: state.blueDiceCount,
            greenDiceCount: state.greenDiceCount,
            redDiceCount: state.redDiceCount,
            whiteDiceCount: state.whiteDiceCount,
            yellowDiceCount: state.yellowDiceCount,
        }
    },
    getDiceCount: (state) => (color) => {
        switch(color) {
            case "black":
                return state.blackDiceCount;
            case "blue":
                return state.blueDiceCount;
            case "green":
                return state.greenDiceCount;
            case "red":
                return state.redDiceCount;
            case "white":
                return state.whiteDiceCount;
            case "yellow":
                return state.yellowDiceCount;
            default:
                throw Error("Invalid color");
        }
    },
    isValidDiceCount: (state, getters) => {
        return !getters.noAttackDice && !getters.tooManyAttackDice && !getters.tooManyDefenseDice;
    },
    noAttackDice: (state, getters) => {
        return getters.attackDiceCount === 0;
    },
    tooManyAttackDice: (state, getters) => {
        return getters.attackDiceCount > diceService.MAX_ATTACK_DICE_COUNT;
    },
    tooManyDefenseDice: (state, getters) => {
        return getters.defenseDiceCount > diceService.MAX_DEFENSE_DICE_COUNT;
    }

}

const mutations = {
    setDiceCount(state, { color, diceCount }) {
        switch(color) {
            case "black":
                state.blackDiceCount = diceCount;
                return;
            case "blue":
                state.blueDiceCount = diceCount;
                return;
            case "green":
                state.greenDiceCount = diceCount;
                return;
            case "red":
                state.redDiceCount = diceCount;
                return;
            case "white":
                state.whiteDiceCount = diceCount;
                return;
            case "yellow":
                state.yellowDiceCount = diceCount;
                return;
            default:
                throw Error("Invalid color");
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}