<template>
    <Section title="Analysis">
        <StartAnalysisButton @click="startAnalysis" />
        <JsonViewer :jsonData="jsonData" />
    </Section>
</template>

<script>
    import { mapGetters } from "vuex";

    import JsonViewer from "./JsonViewer.vue";
    import Section from "./Section.vue";
    import StartAnalysisButton from "./StartAnalysisButton";
    import analysisService from "../services/analysis";

    export default {
        components: {
            JsonViewer,
            Section,
            StartAnalysisButton
        },
        computed: {
            ...mapGetters("dice", [
                "diceCounts"
            ])
        },
        data() {
            return {
                jsonData: {}
            }
        },
        methods: {
            startAnalysis() {
                console.log("Start analysis");
                const allCases = analysisService.runAnalysis(this.diceCounts);
                this.jsonData = { 'allCases': allCases };
            }
        }
    }
</script>
