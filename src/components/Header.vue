<template>
    <v-app-bar
        app
        class="header"
        color="primary"
        dark
        scroll-off-screen
    >
        <div class="d-flex align-center header-content">
            <v-img
                alt="IADC Logo"
                class="shrink mr-2"
                contain
                :src="require('@/assets/images/site-logo.png')"
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
    .header {
        height: 64px !important;
    }

    .v-application .title {
        font-family: "STARWARS", "Roboto" !important;
        font-weight: normal;
        font-size: 1.75rem !important;
        text-transform: uppercase;

        margin: 4px 0 0 10px;
    }

    @media only screen and (max-width : 600px) {
        .header {
            height: 70px !important;
        }

        .header-content {
            padding-top: 12px;
        }

        .v-application .title {
            font-size: 1.5rem !important;
        }
    }
    
    @media only screen and (max-width : 600px) {
        .v-application .title {
            font-size: 1.3rem !important;
        }
    }
</style>