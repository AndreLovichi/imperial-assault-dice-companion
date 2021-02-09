<template>
    <div>
        <v-row class="mt-8 mb-3">
            <Subtitle :text="title"/>
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
