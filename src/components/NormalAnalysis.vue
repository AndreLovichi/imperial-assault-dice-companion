<template>
    <div>
        <ResultBlock
            class="mb-8"
            icon="icon-damage"
            :results="distributions.damage"
            title="Damage"
        />
        <ResultBlock
            class="mb-8"
            icon="icon-surge"
            :results="distributions.surge"
            title="Surge"
        />
        <ResultBlock
            class="mb-8"
            icon="icon-ranged"
            :results="distributions.accuracy"
            title="Accuracy"
        />
        <ResultBlock
            class="mb-8"
            hideRunningPercentage
            icon="icon-dodge"
            :results="distributions.dodge"
            title="Dodge"
        />
    </div>
</template>

<script>
    import ResultBlock from "./ResultsBlock.vue"

    export default {
        components: {
            ResultBlock
        },
        props: {
            distributions: {
                type: Object,
                required: true
            }
        }
    }
</script>