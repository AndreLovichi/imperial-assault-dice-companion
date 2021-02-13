<template>
    <Section title="Analysis">
        <StartAnalysisButton
            v-if="! showResults"
            @click="runAnalysis"
        />
        <template v-else>
            <ResultBlock
                class="mb-8"
                title="Damage"
                :results="results.damage"
            />
            <ResultBlock
                class="mb-8"
                title="Surge"
                :results="results.surge"
            />
            <ResultBlock
                class="mb-8"
                title="Accuracy"
                :results="results.accuracy"
            />
        </template>
    </Section>
</template>

<script>
    import { mapGetters } from "vuex";

    import ResultBlock from "./ResultsBlock.vue"
    import Section from "./Section.vue";
    import StartAnalysisButton from "./StartAnalysisButton";
    import analysisService from "../services/analysis";

    export default {
        components: {
            ResultBlock,
            Section,
            StartAnalysisButton
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
                results: null
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
            }
        }
    }
</script>
