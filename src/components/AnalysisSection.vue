<template>
    <Section title="Analysis">
        <StartAnalysisButton
            v-if="! showResults"
            @click="runAnalysis"
        />
        <template v-else>
            <ResultBlock
                class="mb-8"
                icon="icon-damage"
                :results="results.damage"
                title="Damage"
            />
            <ResultBlock
                class="mb-8"
                icon="icon-surge"
                :results="results.surge"
                title="Surge"
            />
            <ResultBlock
                class="mb-8"
                icon="icon-ranged"
                :results="results.accuracy"
                title="Accuracy"
            />
            <ResultBlock
                class="mb-8"
                hideRunningPercentage
                icon="icon-dodge"
                :results="results.dodge"
                title="Dodge"
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
