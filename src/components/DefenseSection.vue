<template>
    <Section title="Defense">
        <v-row>
            <p>Select defense dices</p>
        </v-row>

        <v-row>
            <DiceCounter
                v-model="blackDiceCount"
                color="black"
                title="Black"
                textColor="white"
                @input="updateDiceCounts"
            />

            <DiceCounter
                v-model="whiteDiceCount"
                color="white"
                title="White"
                textColor="black"
                @input="updateDiceCounts"
            />
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
