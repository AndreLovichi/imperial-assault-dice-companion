<template>
    <v-text-field
        v-model="innerValue"
        append-outer-icon="mdi-plus-circle"
        class="step-counter"
        dense
        outlined
        prepend-icon="mdi-minus-circle"
        readonly
        rounded
        @click:prepend="$emit('decrease')"
        @click:append-outer="$emit('increase')"
    />
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            innerValue: this.value
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(newVal){
                this.innerValue = newVal;
            }
        }
    }
}
</script>

<style lang="scss">
    .step-counter {
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
        .step-counter .v-input__slot input {
            font-size: 24px;
        }
    }
</style>