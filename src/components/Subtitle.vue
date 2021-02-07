<template>
    <h2 class="subtitle">
        {{text}}
    </h2>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
    .subtitle {
        font-family: "STARWARS", "Roboto" !important;
        text-transform: uppercase;
        font-weight: normal;
        font-size: 2rem;
    }
</style>