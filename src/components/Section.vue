<template>
    <div>
        <v-row class="mt-8 mb-3">
            <Subtitle
                class="subtitle"
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
            padding-left: 20px;
        }
    }
</style>
