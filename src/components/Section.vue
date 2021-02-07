<template>
    <div>
        <v-row class="text-center mt-8">
            <Subtitle :text="title"/>
        </v-row>
        <v-row class="text-center mt-8">
            <slot></slot>
        </v-row>
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
