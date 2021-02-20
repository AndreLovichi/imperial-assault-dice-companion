<template>
    <div>
        <table class="advanced-analysis-main-table">
            <tbody>
                <tr>
                    <td class="first-column">
                        <i class="zmdi icon-ranged-hit"></i>
                        Hit
                    </td>
                    <td>
                        {{ hitRatio }}
                    </td>
                </tr>
                <tr>
                    <td class="first-column">
                        <i class="zmdi icon-ranged-miss"></i>
                        Miss
                    </td>
                    <td>
                        {{ insufficientAccuracyRatio }}
                    </td>
                </tr>
                <tr>
                    <td class="first-column">
                        <i class="zmdi icon-dodge"></i>
                        Dodge
                    </td>
                    <td>
                        {{ dodgeRatio }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        dodgeRatio: {
            type: Number,
            required: true
        },
        hitRatio: {
            type: Number,
            required: true
        },
        insufficientAccuracyRatio: {
            type: Number,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
    $border-radius: 20px;

    .advanced-analysis-main-table {
        border-spacing: 0;
        font-size: 1.4em;
        text-align: center;

        .first-column {
            font-family: "STARWARS", "Roboto" !important;
            text-transform: uppercase;
            font-weight: normal;
            background-color: #cce0f5;
            padding: 9px 5px 4px;
            width: 150px;
        }

        td {
            padding: 5px;
            border: 1px solid lightgrey;
        }

        td:not(.first-column) {
            width: 80px;
        }

        .table-title {
            white-space: nowrap;
            padding-top: 12px;
        }

        .table-title i {
            font-size: 1.3rem;
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