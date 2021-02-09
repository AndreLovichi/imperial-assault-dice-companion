<template>
    <Section title="Defense dices">
        <v-row>
            <DiceCounter color="black" />
            <DiceCounter color="white" />
        </v-row>
    </Section>
</template>

<script>
    import DiceCounter from "./DiceCounter.vue";
    import Section from "./Section.vue";

    export default {
        components: {
            DiceCounter,
            Section
        },
        computed: {
            defenseDice() {
                return {
                    blackDiceCount: this.blackDiceCount,
                    whiteDiceCount: this.whiteDiceCount
                }
            }
        },
        data() {
            return {
                blackDiceCount: 0,
                whiteDiceCount: 0,
            };    
        },
        methods: {
            updateDiceCounts() {
                this.$emit("dice-counts-updated", this.defenseDice);
            }
        }
    }
</script>
