export function computeAdvancedStats({
    casesCount,
    damageValues,
    distribution,
    dodgeCount,
    insufficientAccuracyCount,
    surgeValues
}) {
    const dodgeRatio = Math.round(dodgeCount * 100 / casesCount);
    const insufficientAccuracyRatio = Math.round(insufficientAccuracyCount * 100 / casesCount);
    const hitRatio = 100 - (dodgeRatio + insufficientAccuracyRatio);

    const damageAndSurgeDistribution = {};
    for (let i = 0; i < damageValues.length; i++) {
        const damageCount = damageValues[i];
        damageAndSurgeDistribution[i] = {};

        for (let j = 0; j < surgeValues.length; j++) {
            const surgeCount = surgeValues[j];
            const currentCaseCount = (distribution[damageCount] && distribution[damageCount][surgeCount]) || 0;
            damageAndSurgeDistribution[i][j] = Math.round(currentCaseCount * 100 / casesCount);
        }
    }

    return {
        damageAndSurgeDistribution,
        dodgeRatio,
        hitRatio,
        insufficientAccuracyRatio,
    }
}