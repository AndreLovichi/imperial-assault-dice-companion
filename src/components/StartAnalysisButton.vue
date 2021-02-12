<template>
    <v-btn
        rounded
        color="primary"
        :disabled="isDisabled"
        dark
        x-large
        @click.prevent="$emit('click')"
    >
        Start analysis
    </v-btn>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("dice", ["isValidDiceCount"]),
        isDisabled() {
            return !this.isValidDiceCount;
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-btn {
        font-family: "STARWARS", "Roboto" !important;
        font-size: 1.5em;

        &.v-btn:not(.v-btn--round).v-size--x-large {
            padding: 30px;
        }
    }
</style>