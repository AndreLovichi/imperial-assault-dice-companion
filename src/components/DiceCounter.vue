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

        <v-text-field
            v-model="diceCount"
            append-outer-icon="mdi-plus-circle"
            dense
            outlined
            prepend-icon="mdi-minus-circle"
            readonly
            rounded
            @click:prepend="decreaseDiceCount"
            @click:append-outer="increaseDiceCount"
        />
    </v-col>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import colorService from "../services/colors";
import diceService from "../services/dice";

export default {
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

        .v-input.v-text-field {
            width: 150px;
            margin: 0 auto;
        }

        &.v-input.primary--text .v-icon {
            color: rgba(0, 0, 0, 0.54) !important;
        }

        .v-input__prepend-outer button,
        .v-input__append-outer button {
            font-size: 40px;
        }

        .v-input__slot input {
            font-size: 32px;
            text-align: center;
        }

        .v-icon:hover,
        &.v-input.primary--text .v-icon:hover {
            color: rgb(83, 167, 235);
        }
    }

    
    @media only screen and (max-width : 600px) {
        .dice-counter .v-input__slot input {
            font-size: 24px;
        }
    }
</style>