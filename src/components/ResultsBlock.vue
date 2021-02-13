<template>
    <div>
        <HorizontalResultTable
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
    import JsonViewer from "./JsonViewer.vue";
    import HorizontalResultTable from "./HorizontalResultTable.vue";

    export default {
        components: {
            HorizontalResultTable,
            JsonViewer,
        },
        props: {
            debug: {
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
            jsonData() {
                return {
                    results: this.results
                };
            }
        }
    }
</script>