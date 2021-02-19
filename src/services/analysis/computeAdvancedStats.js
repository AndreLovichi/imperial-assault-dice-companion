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

    const damageAndSurgeMatrix = [];
    for (let i = 0; i < damageValues.length; i++) {
        const damageCount = damageValues[i];
        damageAndSurgeMatrix[i] = [];

        for (let j = 0; j < surgeValues.length; j++) {
            const surgeCount = surgeValues[j];
            const currentCaseCount = (distribution[damageCount] && distribution[damageCount][surgeCount]) || 0;
            damageAndSurgeMatrix[i][j] = Math.round(currentCaseCount * 100 / casesCount);
        }
    }

    return {
        damageAndSurgeMatrix,
        dodgeRatio,
        insufficientAccuracyRatio,
    }
}