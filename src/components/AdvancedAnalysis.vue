<template>
    <div>
        <MinAccuracyCounter
            v-model="minAccuracy"
            @input="runAdvancedAnalysis"
        />

        <JsonViewer
            :jsonData="jsonData"
        />
    </div>
</template>

<script>
import MinAccuracyCounter from "./MinAccuracyCounter.vue"
import JsonViewer from './JsonViewer.vue'
import analysisService from "../services/analysis"

export default {
    components: {
        MinAccuracyCounter,
        JsonViewer
    },
    props: {
        allCases: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            jsonData: {},
            minAccuracy: 0
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
            this.jsonData = advancedAnalysis;
        }
    }
}
</script>