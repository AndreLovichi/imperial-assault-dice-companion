<template>
    <div>
        <table class="result-table">
            <thead>
                <tr>
                    <th class="table-title first-column">
                        <i
                            class="zmdi"
                            :class="icon"
                        />
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

<style lang="scss" scoped>
    $border-radius: 20px;

    .result-table {
        border-spacing: 0;
        font-size: 1.4em;
        text-align: center;

        th {
            font-family: "STARWARS", "Roboto" !important;
            text-transform: uppercase;
            font-weight: normal;
            background-color: #cce0f5;
            padding: 9px 5px 4px;
        }

        td {
            padding: 5px;
        }

        th, td {
            border: 1px solid lightgrey;
        }

        th.first-column , td.first-column {
            padding-left: 30px;
            padding-right: 30px;
        }

        th:not(.first-column), td:not(.first-column) {
            width: 60px;
        }

        .table-title i {
            font-size: 1.1rem;
        }

        tr:first-child th:first-child {
            border-top-left-radius: $border-radius;
        }

        tr:first-child th:last-child {
            border-top-right-radius: $border-radius;
        }

        tr:last-child td:first-child {
            border-bottom-left-radius: $border-radius;
        }

        tr:last-child td:last-child {
            border-bottom-right-radius: $border-radius;
        }
    }
</style>