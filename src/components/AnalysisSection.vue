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
                v-if="isNormalMode"
                :distributions="results.distributions"
            />
            <AdvancedAnalysis
                v-else
                :allCases="results.allCases"
            />

            <SwitchModeButton 
                :mode="mode"
                @click.native="toggleMode"
            />
        </template>
    </Section>
</template>

<script>
    import { mapGetters } from "vuex";

    import AdvancedAnalysis from "./AdvancedAnalysis.vue"
    import NormalAnalysis from "./NormalAnalysis.vue"
    import Section from "./Section.vue";
    import StartAnalysisButton from "./StartAnalysisButton";
    import SwitchModeButton from "./SwitchModeButton";
    import analysisService from "../services/analysis";

    export default {
        components: {
            AdvancedAnalysis,
            NormalAnalysis,
            Section,
            StartAnalysisButton,
            SwitchModeButton
        },
        computed: {
            ...mapGetters("dice", [
                "diceCounts"
            ]),
            isNormalMode() {
                return this.mode === "normal"
            },
            showResults() {
                return !! this.results;
            }
        },
        data() {
            return {
                mode: "advanced",
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
            },
            toggleMode() {
                this.mode = this.mode === "normal" ? "advanced" : "normal";
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