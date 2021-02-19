<template>
    <v-col
        class="dice-counter"
        :cols="6"
        :sm="3"
    >
        <div
            class="dice-type"
            :style="style"
            @click="increaseDiceCount"
        >
            {{ colorSettings.label }}
        </div>

        <StepCounter
            v-model="diceCount"
            @decrease="decreaseDiceCount"
            @increase="increaseDiceCount"
        />
    </v-col>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import StepCounter from "./StepCounter.vue"
import colorService from "../services/colors";
import diceService from "../services/dice";

export default {
    components: {
        StepCounter
    },
    props: {
        color: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters("dice", ["getDiceCount"]),
        style() {
            return {
                'background-color': this.colorSettings.backgroundColor,
                'border': this.colorSettings.border,
                'color': this.colorSettings.textColor
            }
        }
    },
    data() {
        return {
            colorSettings: colorService.getColorSettings(this.color),
            diceCount: 0
        }
    },
    created() {
        this.diceCount = this.getDiceCount(this.color);
    },
    methods: {
        ...mapMutations("dice", ["setDiceCount"]),
        decreaseDiceCount() {
            if (this.diceCount == 0) { return; }

            this.diceCount--;
            this.updateDiceCount();
        },
        increaseDiceCount() {
            if (this.diceCount == diceService.MAX_DICE_COUNT) { return; }

            this.diceCount++;
            this.updateDiceCount();
        },
        updateDiceCount() {
            this.setDiceCount({ color: this.color, diceCount: this.diceCount });
        }
    }
}
</script>

<style lang="scss">
    .dice-counter {

        .dice-type {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px auto;

            font-size: 24px;

            border-radius: 24px;
            text-align: center;
            line-height: 80px;

            cursor: pointer;

            &:hover {
                box-shadow: 0px 0px 15px grey;                
            }
        }
    }
</style>