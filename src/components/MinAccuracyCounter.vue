<template>
    <v-row class="min-accuracy-counter mt-4">
        <v-col
            class="subtitle pb-0"            
            :cols="12"
        >
            <i class="zmdi icon-ranged"></i>
            Mininmum accuracy
        </v-col>

        <v-col
            :cols="6"
            :sm="3"
        >
            <StepCounter
                :value="minAccuracy"
                @decrease="decreaseMinAccuracy"
                @increase="increaseMinAccuracy"
            />
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations, mapState } from "vuex"

import StepCounter from "./StepCounter.vue"

export default {
    components: {
        StepCounter
    },
    computed: {
        ...mapState("accuracy", ["minAccuracy"])
    },
    methods: {
        ...mapMutations("accuracy", ["setMinAccuracy"]),
        decreaseMinAccuracy() {
            if (this.minAccuracy == 0) { return; }

            this.updateMinAccuracy(this.minAccuracy - 1);
        },
        increaseMinAccuracy() {
            if (this.innerValue == 10) { return; }

            this.updateMinAccuracy(this.minAccuracy + 1);
        },
        updateMinAccuracy(newMinAccuracy) {
            this.setMinAccuracy(newMinAccuracy);
            this.$emit("min-accuracy-changed");
        }

    }
}
</script>

<style lang="scss">
    .min-accuracy-counter {
        max-width: 800px;

        .subtitle {
            font-family: "STARWARS", "Roboto" !important;
            text-transform: uppercase;
            font-size: 1.3rem;
        }
    }
</style>