export function computeAdvancedDistribution({ cases, minAccuracy }) {
    const distribution = {};
    const damageSet = new Set();
    const surgeSet = new Set();
    let dodgeCount = 0;
    let insufficientAccuracyCount = 0;

    for (let i = 0; i < cases.length; i++) {
        const currentCase = cases[i];

        if (currentCase.dodge) {
            dodgeCount++;
            continue;
        }

        if (currentCase.accuracy < minAccuracy) {
            insufficientAccuracyCount++;
            continue;
        }

        const damageCount = currentCase.damageCount - currentCase.blockCount;
        damageSet.add(damageCount);

        const surgeCount = currentCase.surgeCount - currentCase.evadeCount;
        surgeSet.add(surgeCount);

        if (distribution[damageCount] === undefined) { distribution[damageCount] = {}; }
        if (distribution[damageCount][surgeCount] === undefined) { distribution[damageCount][surgeCount] = 0; }
        distribution[damageCount][surgeCount] += 1;
    }

    const damageValues = Array.from(damageSet).sort((a, b) => a - b);
    const surgeValues = Array.from(surgeSet).sort((a, b) => a - b);

    return {
        damageValues,
        distribution,
        dodgeCount,
        insufficientAccuracyCount,
        surgeValues
    };
}