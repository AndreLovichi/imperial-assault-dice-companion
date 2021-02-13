<template>
    <Section
        class="mb-12"
        title="Attack dices"
    >
        <v-row class="dice-counters">
            <DiceCounter color="blue"/>
            <DiceCounter color="green" />
            <DiceCounter color="yellow" />
            <DiceCounter color="red" />
        </v-row>
        <v-row class="messages">
            <p
                class="floating-message"
                v-if="noAttackDice"
            >
                {{ noAttackDiceMessage }}
            </p>
            <p
                class="floating-message error-message"
                v-if="tooManyAttackDice"
            >
                {{ tooManyAttackDiceMessage }}
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
            ...mapGetters("dice", [
                "noAttackDice",
                "tooManyAttackDice"
            ]),
            noAttackDiceMessage() {
                return "Please select at least 1 attack dice.";
            },
            tooManyAttackDiceMessage() {
                return `Please select ${diceService.MAX_ATTACK_DICE_COUNT} attack dice or less.`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dice-counters {
        max-width: 800px;
    }

    .messages {
        position: relative;

        .floating-message {
            position: absolute;
            top: -10px;
        }

        .error-message {
            color: red;
        }
    }

    @media only screen and (max-width : 600px) {
        .dice-counters, .messages {
            justify-content: center;
        }
    }
</style>