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
                :value="innerValue"
                @decrease="decreaseMinAccuracy"
                @increase="increaseMinAccuracy"
            />
        </v-col>
    </v-row>
</template>

<script>
import StepCounter from "./StepCounter.vue"

export default {
    components: {
        StepCounter
    },
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            innerValue: this.value
        }
    },
    methods: {
        decreaseMinAccuracy() {
            if (this.innerValue == 0) { return; }

            this.innerValue--;
            this.updateMinAccuracy();
        },
        increaseMinAccuracy() {
            if (this.innerValue == 10) { return; }

            this.innerValue++;
            this.updateMinAccuracy();
        },
        updateMinAccuracy() {
            this.$emit("input", this.innerValue);
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