<template>
    <Section
        class="mb-12"
        title="Defense dices"
    >
        <v-row class="dice-counters">
            <DiceCounter color="black" />
            <DiceCounter color="white" />
        </v-row>
        <v-row class="messages">
            <p
                class="floating-message error-message"
                v-if="tooManyDefenseDice"
            >
                {{ tooManyDefenseDiceMessage }}
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
                "tooManyDefenseDice"
            ]),
            tooManyDefenseDiceMessage() {
                return `Please select ${diceService.MAX_DEFENSE_DICE_COUNT} defense dice or less.`;
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
