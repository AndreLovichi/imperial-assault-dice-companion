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

    @media only screen and (max-width : 600px) {
        .subtitle {
            margin: 0 auto !important;
        }
    }

    @media only screen and (max-width : 350px) {
    .v-btn {
        font-family: "STARWARS", "Roboto" !important;
        font-size: 1.3em;

        &.v-btn:not(.v-btn--round).v-size--x-large {
            padding: 20px;
        }
    }
    }
</style>