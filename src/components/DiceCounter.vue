<template>
    <div class="dice-counter">
        <div
            class="dice-type"
            :style="{'background-color': color, 'color': textColor}"
        >
            {{ title }}
        </div>

        <v-text-field
            v-model="innerValue"
            append-outer-icon="mdi-plus-circle"
            dense
            outlined
            prepend-icon="mdi-minus-circle"
            rounded
            @click:prepend="decreaseDiceCount"
            @click:append-outer="increaseDiceCount"
        />
    </div>
</template>

<script>
const MAX_DICE_COUNT = 5;

export default {
    props: {
        color: {
            type: String,
            default: "#203f9a"
        },
        textColor: {
            type: String,
            default: "white"
        },
        title: {
            type: String,
            default: "Blue"
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            innerValue: this.value            
        }
    },
    watch: {
        value: {
            handler(newVal) {
                this.innerValue = newVal;
            }
        }
    },
    methods: {
        decreaseDiceCount() {
            if (this.innerValue == 0) { return; }

            this.innerValue--;
            this.$emit("input", this.innerValue);
        },
        increaseDiceCount() {
            if (this.innerValue == MAX_DICE_COUNT) { return; }

            this.innerValue++;
            this.$emit("input", this.innerValue);
        }
    }
}
</script>

<style lang="scss">
    .dice-counter {
        width: 150px;

        .dice-type {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px auto;

            font-size: 24px;

            border-radius: 24px;
            text-align: center;
            line-height: 80px;
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
</style>