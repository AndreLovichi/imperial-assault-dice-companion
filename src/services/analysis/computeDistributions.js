export function computeDistributions(cases) {
    const damageDistribution = {};
    const surgeDistribution = {};
    const accuracyDistribution = {};
    const dodgeDistribution = {};

    for (let i = 0; i < cases.length; i++) {
        const currentCase = cases[i];

        const damageCount = currentCase.dodge ? 0 : Math.max(0, (currentCase.damageCount - currentCase.blockCount));
        damageDistribution[damageCount] = 1 + (damageDistribution[damageCount] || 0);

        const surgeCount = Math.max(0, currentCase.surgeCount - currentCase.evadeCount);
        surgeDistribution[surgeCount] = 1 + (surgeDistribution[surgeCount] || 0);

        const accuracy = currentCase.accuracy;
        accuracyDistribution[accuracy] = 1 + (accuracyDistribution[accuracy] || 0);

        const dodge = currentCase.dodge ? 1 : 0;
        dodgeDistribution[dodge] = 1 + (dodgeDistribution[dodge] || 0);
    }

    return {
        accuracyDistribution,
        damageDistribution,
        dodgeDistribution,
        surgeDistribution
    };
}