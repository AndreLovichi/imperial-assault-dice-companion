<template>
    <div>
        <table class="result-table">
            <thead>
                <tr>
                    <th class="table-title first-column">
                        {{ title }}
                    </th>
                    <th
                        v-for="item in results"
                        :key="item.value"
                    >
                        {{ item.value }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="first-column">
                        % (exact)
                    </td>
                    <td
                        v-for="item in results"
                        :key="item.value"
                    >
                        {{ item.percentage }}
                    </td>
                </tr>
                <tr>
                    <td class="first-column">
                        % (at least)
                    </td>
                    <td
                        v-for="item in results"
                        :key="item.value"
                    >
                        {{ item.runningPercentage }}
                    </td>

                </tr>
            </tbody>
        </table>
        <JsonViewer
            v-if="false"
            :jsonData="jsonData"
        />
    </div>
</template>

<script>
    import JsonViewer from "./JsonViewer.vue";

    export default {
        components: {
            JsonViewer,
        },
        props: {
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

<style lang="scss" scoped>
    .result-table {
        border-collapse: collapse;
        font-size: 1.4em;
        text-align: center;

        th {
            font-family: "STARWARS", "Roboto" !important;
            text-transform: uppercase;
            font-weight: normal;
        }

        th, td {
            padding: 5px;
            border: 1px solid lightgrey;
        }

        th.first-column , td.first-column {
            padding: 5px 30px;
        }

        th:not(.first-column), td:not(.first-column) {
            width: 60px;
        }

    }
</style>