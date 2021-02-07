<template>
    <v-app>
        <Header />
        <v-main>
            <MainContainer/>
        </v-main>
    </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import MainContainer from "./components/MainContainer.vue";

export default {
    components: {
        Header,
        MainContainer,
    },
};
</script>
