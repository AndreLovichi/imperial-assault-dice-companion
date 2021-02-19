<template>
    <v-btn
        rounded
    >
        {{ label }}
    </v-btn>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: true,
            validator: (m) => ["normal", "advanced"].includes(m)
        }
    },
    computed: {
        label() {
            return this.mode === "normal" ? "Advanced mode" : "Normal mode"
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-btn {
        font-family: "STARWARS", "Roboto" !important;
        font-size: 1em;

        &.v-btn:not(.v-btn--round) {
            padding: 20px;
        }
    }

    @media only screen and (max-width : 600px) {
        .subtitle {
            margin: 0 auto !important;
        }
    }

    @media only screen and (max-width : 350px) {
    .v-btn {
        font-size: 0.9em;

        &.v-btn:not(.v-btn--round) {
            padding: 15px;
        }
    }
    }
</style>