<template>
    <div>
        <VerticalResultTable
            v-if="isMobile"
            :hideRunningPercentage="hideRunningPercentage"
            :icon="icon"
            :results="results"
            :title="title"
        />
        <HorizontalResultTable
            v-else
            :hideRunningPercentage="hideRunningPercentage"
            :icon="icon"
            :results="results"
            :title="title"
        />
        <JsonViewer
            v-if="debug"
            :jsonData="jsonData"
        />
    </div>
</template>

<script>
    import HorizontalResultTable from "./HorizontalResultTable.vue";
    import JsonViewer from "./JsonViewer.vue";
    import VerticalResultTable from "./VerticalResultTable.vue";

    export default {
        components: {
            HorizontalResultTable,
            JsonViewer,
            VerticalResultTable
        },
        props: {
            debug: {
                type: Boolean,
                default: false
            },
            hideRunningPercentage: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                required: true,
            },
            results: {
                type: Array,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
        computed: {
            isMobile() {
                return this.$vuetify.breakpoint.xsOnly;
            },
            jsonData() {
                return {
                    results: this.results
                };
            }
        }
    }
</script>