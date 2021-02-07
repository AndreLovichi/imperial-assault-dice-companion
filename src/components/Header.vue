<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
        <div class="d-flex align-center">
            <v-img
                alt="IADC Logo"
                class="shrink mr-2"
                contain
                src="/images/site-logo.png"
                transition="scale-transition"
                width="32"
                heigth="32"
            />

            <h1 class="title">
                Imperial Assault Dice Companion
            </h1>
        </div>
    </v-app-bar>
</template>

<style lang="scss" scoped>
    .v-application .title {
        font-family: "STARWARS", "Roboto" !important;
        font-weight: normal;
        font-size: 1.75rem !important;
        text-transform: uppercase;

        margin: 4px 0 0 10px;
    }
</style>