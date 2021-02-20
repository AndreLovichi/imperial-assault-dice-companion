<template>
    <div>
        <MinAccuracyCounter
            @min-accuracy-changed="runAdvancedAnalysis"
        />

        <template v-if="results">
            <AdvancedAnalysisMainTable
                class="mb-8"
                :dodgeRatio="results.dodgeRatio"
                :hitRatio="results.hitRatio"
                :insufficientAccuracyRatio="results.insufficientAccuracyRatio"
            />

            <AdvancedAnalysisDistributionTable
                v-if="canHit"
                class="mb-8"
                :damageAndSurgeDistribution="results.damageAndSurgeDistribution"
                :damageValues="results.damageValues"
                :surgeValues="results.surgeValues"
            />

        </template>

        <JsonViewer
            v-if="debug"
            :jsonData="jsonData"
        />
    </div>
</template>

<script>
import { mapState } from "vuex"

import AdvancedAnalysisDistributionTable from "./AdvancedAnalysisDistributionTable.vue"
import AdvancedAnalysisMainTable from "./AdvancedAnalysisMainTable.vue"
import MinAccuracyCounter from "./MinAccuracyCounter.vue"
import JsonViewer from './JsonViewer.vue'
import analysisService from "../services/analysis"

export default {
    components: {
        AdvancedAnalysisDistributionTable,
        AdvancedAnalysisMainTable,
        MinAccuracyCounter,
        JsonViewer
    },
    props: {
        allCases: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapState("accuracy", ["minAccuracy"]),
        canHit() {
            return this.results && (this.results.hitRatio > 0);
        },
        jsonData() {
            if (! this.results) { return {}; }
            return this.results;
        },        
    },
    data() {
        return {
            debug: false,
            results: null
        }
    },
    mounted() {
        this.runAdvancedAnalysis();
    },
    methods: {
        runAdvancedAnalysis() {
            const advancedAnalysis = analysisService.computeAdvancedAnalysis({
                cases: this.allCases,
                minAccuracy: this.minAccuracy
            })
            advancedAnalysis.damageValues.push("Total");
            advancedAnalysis.surgeValues.push("Total");
            this.results = advancedAnalysis;
        }
    }
}
</script>