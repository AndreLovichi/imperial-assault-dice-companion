<template>
    <v-container class="main-container">
        <AttackSection />
        <DefenceSection />
        <AnalysisSection />
    </v-container>
</template>

<script>
    import AnalysisSection from "./AnalysisSection.vue";
    import AttackSection from "./AttackSection.vue";
    import DefenceSection from "./DefenseSection.vue";

    export default {
        components: {
            AnalysisSection,
            AttackSection,
            DefenceSection
        }
    }
</script>

<style lang="scss" scoped>
    .main-container {
        margin: 0;
        padding: 20px;
    }
</style>