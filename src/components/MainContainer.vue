<template>
    <v-container>
        <AttackSection />

        <DefenceSection />

        <Section title="Analysis">
            <StartAnalysisButton />
        </Section>
    </v-container>
</template>

<script>
    import AttackSection from "./AttackSection.vue";
    import DefenceSection from "./DefenseSection.vue";
    import Section from "./Section.vue";
    import StartAnalysisButton from "./StartAnalysisButton";

    export default {
        components: {
            AttackSection,
            DefenceSection,
            Section,
            StartAnalysisButton
        }
    }
</script>
