<template>
    <div>
        <h3 class="result-block-title">{{ title }}</h3>
        <table class="result-table">
            <thead>
                <tr>
                    <th class="table-title first-column">
                        <i
                            class="zmdi"
                            :class="icon"
                        />
                    </th>
                    <th>
                        %<sub>exact</sub>
                    </th>
                    <th>
                        %<sub>at least</sub>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in results"
                    :key="item.value"
                >
                    <td class="first-column">
                        {{ item.value }}
                    </td>
                    <td>
                        {{ item.percentage }}
                    </td>
                    <td>
                        {{ item.runningPercentage }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
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
        }
    }
</script>

<style lang="scss" scoped>
    $border-radius: 20px;

    .result-block-title {
        font-family: "STARWARS", "Roboto" !important;
        text-transform: uppercase;
        font-weight: normal;
        font-size: 1.5rem;
    }

    .result-table {
        margin: 0 auto;
        border-spacing: 0;
        font-size: 1.4em;
        text-align: center;

        .first-column {
            font-family: "STARWARS", "Roboto" !important;
            text-transform: uppercase;
            font-weight: normal;
            background-color: #cce0f5;
            padding: 9px 5px 4px;
            width: 80px;
        }

        td {
            padding: 5px;
        }

        th, td {
            border: 1px solid lightgrey;
        }

        th:not(.first-column), td:not(.first-column) {
            width: 120px;
        }

        .table-title {
            white-space: nowrap;
            padding-top: 12px;
        }

        .table-title i {
            font-size: 1.3rem;
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