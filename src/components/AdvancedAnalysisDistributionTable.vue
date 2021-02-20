<template>
    <div>
        <table class="advanced-analysis-main-table">
            <tbody>
                <tr>
                    <td class="title-cell">
                        <i class="zmdi icon-damage"></i>
                        <i class="zmdi icon-surge"></i>
                        <div class="diagonal-line"></div>
                    </td>
                    <td
                        v-for="damageCount in damageValues"
                        :key=damageCount
                    >
                        {{ getCellLabel(damageCount) }}
                    </td>
                </tr>

                <tr
                    v-for="surgeCount in surgeValues"
                    :key="surgeCount"
                >
                    <td>{{ getCellLabel(surgeCount) }}</td>                    
                    <td
                        v-for="damageCount in damageValues"
                        :key=damageCount
                        :class="{ 'irrelevant-value': ! containsRelevantValue(damageCount, surgeCount) }"
                    >
                        {{ getCellValue(damageCount, surgeCount) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        damageAndSurgeDistribution: {
            type: Object,
            required: true,
        },
        damageValues: {
            type: Array,
            required: true,
        },
        surgeValues: {
            type: Array,
            required: true,
        }
    },
    methods: {
        getCellLabel(rawLabel) {
            return (rawLabel === "Total") ? "Σ" : rawLabel;
        },
        getCellValue(damageCount, surgeCount) {
            if (! this.damageAndSurgeDistribution || ! this.damageAndSurgeDistribution[damageCount] || ! this.damageAndSurgeDistribution[damageCount][surgeCount]) {
                return 0;
            } else {
                return this.damageAndSurgeDistribution[damageCount][surgeCount];
            }
        },
        containsRelevantValue(damageCount, surgeCount) {
            return this.getCellValue(damageCount, surgeCount) >= 1;
        }
    }
}
</script>

<style lang="scss" scoped>
    $border-radius: 20px;

    .advanced-analysis-main-table {
        border-spacing: 0;
        font-size: 1.4em;
        text-align: center;

        padding-right: 20px;

        .title-cell {
            position: relative;
            
            i {
                font-size: 0.8em;
                position: absolute;
            }

            .icon-damage {
                right: 6px;
                top: 6px;
            }
            
            .icon-surge {
                left: 6px;
                bottom: 6px;
            }

            .diagonal-line {
                border-top: 1px solid black;
                transform: rotate(45deg);
            }
        }

        tr:first-child td,
        tr td:first-child {
            font-family: "STARWARS", "Roboto" !important;
            text-transform: uppercase;
            font-weight: normal;
            background-color: #cce0f5;
            padding: 9px 5px 4px;
        }

        tr td:last-child,
        tr:last-child td {
            font-weight: bold;
        }

        td {
            padding: 5px;
            border: 1px solid lightgrey;
            min-width: 60px;
        }

        td.irrelevant-value {
            color: lightgrey;
        }

        tr:first-child td:first-child {
            border-top-left-radius: $border-radius;
        }

        tr:first-child td:last-child {
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