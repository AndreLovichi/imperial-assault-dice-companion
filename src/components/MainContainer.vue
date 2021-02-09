<template>
    <v-container>
        <AttackSection
            @dice-counts-updated="updateAttackDice"
        />

        <DefenceSection
            @dice-counts-updated="updateDefenseDice"
        />

        <Section title="Results">
            <p>Loader</p>
            <p>Results</p>
        </Section>
    </v-container>
</template>

<script>
    import AttackSection from "./AttackSection.vue";
    import DefenceSection from "./DefenseSection.vue";
    import Section from "./Section.vue";

    export default {
        components: {
            AttackSection,
            DefenceSection,
            Section
        },
        data() {
            return {
                attackDice: {
                    blueDiceCount: 0,
                    greenDiceCount: 0,
                    redDiceCount: 0,
                    yellowDiceCount: 0
                },

                defenseDice: {
                    blackDiceCount: 0,
                    whiteDiceCount: 0
                }
            }
        },
        methods: {
            updateAttackDice(dices) {
                this.attackDice = dices;
            },
            updateDefenseDice(dices) {
                this.defenseDice = dices;
            }
        }
    }
</script>
