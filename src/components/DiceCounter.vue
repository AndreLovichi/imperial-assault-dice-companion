<template>
    <div>
        <v-text-field
            v-model="innerValue"
            append-outer-icon="mdi-plus-circle"
            class="dice-counter"
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