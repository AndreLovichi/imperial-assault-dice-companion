<template>
    <Section
        title="Analysis"
        class="analysis-section"
    >
        <StartAnalysisButton
            v-if="! showResults"
            @click="runAnalysis"
        />
        <template v-else>
            <NormalAnalysis
                :distributions="results.distributions"
            />
            <SwitchModeButton 
                :mode.sync="mode"
            />
        </template>
    </Section>
</template>

<script>
    import { mapGetters } from "vuex";

    import NormalAnalysis from "./NormalAnalysis.vue"
    import Section from "./Section.vue";
    import StartAnalysisButton from "./StartAnalysisButton";
    import SwitchModeButton from "./SwitchModeButton";
    import analysisService from "../services/analysis";

    export default {
        components: {
            NormalAnalysis,
            Section,
            StartAnalysisButton,
            SwitchModeButton
        },
        computed: {
            ...mapGetters("dice", [
                "diceCounts"
            ]),
            showResults() {
                return !! this.results;
            }
        },
        data() {
            return {
                mode: "normal",
                results: null,
            }
        },
        watch: {
            diceCounts: {
                immediate: true,
                handler(){
                    this.resetResults();
                }
            }
        },
        methods: {
            resetResults() {
                this.results = null;
            },
            runAnalysis() {
                this.results = analysisService.runAnalysis(this.diceCounts);
                this.$vuetify.goTo(".analysis-section");
            }
        }
    }
</script>

<style lang="scss" scoped>
    @media only screen and (max-width : 600px) {
        .analysis-section {
            text-align: center;
        }
    }
</style>