<template>
    <div>
        <v-row class="mt-2 mb-2">
            <Subtitle
                class="subtitle ml-4"
                :text="title"
            />
        </v-row>
        <slot></slot>
    </div>
</template>

<script>
import Subtitle from "./Subtitle.vue";

export default {
    components: {
        Subtitle
    },
    props: {
        title: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
    @media only screen and (max-width : 600px) {
        .subtitle {
            margin: 0 auto !important;
        }
    }
</style>
