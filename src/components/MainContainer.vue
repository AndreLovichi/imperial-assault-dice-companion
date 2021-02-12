<template>
    <v-container>
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
