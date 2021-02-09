<template>
    <Section title="Attack dices">
        <v-row>
            <DiceCounter color="blue" />
            <DiceCounter color="green" />
            <DiceCounter color="yellow" />
            <DiceCounter color="red" />
        </v-row>
        <v-row class="error-messages">
            <p v-if="areTooManyDice">
                {{ tooManyDiceMessage }}
            </p>
        </v-row>
    </Section>
</template>

<script>
    import { mapGetters } from "vuex";

    import DiceCounter from "./DiceCounter.vue";
    import Section from "./Section.vue";
    import diceService from "../services/dice";

    export default {
        components: {
            DiceCounter,
            Section
        },
        computed: {
            ...mapGetters("dice", ["getAttackDiceCount"]),
            areTooManyDice() {
                return this.getAttackDiceCount > diceService.MAX_ATTACK_DICE_COUNT;
            },
            tooManyDiceMessage() {
                return `Please select ${diceService.MAX_ATTACK_DICE_COUNT} attack dices or less.`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .error-messages {
        color: red;
    }
</style>