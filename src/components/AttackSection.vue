<template>
    <Section title="Attack">
        <v-row>
            <p>Select attack dices</p>
        </v-row>

        <v-row>
            <DiceCounter
                v-model="blueDiceCount"
                color="#203f9a"
                title="Blue"
                textColor="white"
                @input="updateDiceCounts"
            />

            <DiceCounter
                v-model="greenDiceCount"
                color="#008600"
                title="Green"
                textColor="white"
                @input="updateDiceCounts"
            />

            <DiceCounter
                v-model="yellowDiceCount"
                color="#cbc200"
                title="Yellow"
                textColor="white"
                @input="updateDiceCounts"
            />

            <DiceCounter
                v-model="redDiceCount"
                color="#b80f16"
                title="Red"
                textColor="white"
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
            attackDice() {
                return {
                    blueDiceCount: this.blueDiceCount,
                    greenDiceCount: this.greenDiceCount,
                    redDiceCount: this.redDiceCount,
                    yellowDiceCount: this.yellowDiceCount
                }
            }
        },
        data() {
            return {
                blueDiceCount: 0,
                greenDiceCount: 0,
                redDiceCount: 0,
                yellowDiceCount: 0
            };    
        },
        methods: {
            updateDiceCounts() {
                this.$emit("dice-counts-updated", this.attackDice);
            }
        }

    }
</script>
