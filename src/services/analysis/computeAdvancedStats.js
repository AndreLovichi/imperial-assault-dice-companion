export function computeAdvancedStats({
    casesCount,
    damageValues,
    distribution,
    dodgeCount,
    insufficientAccuracyCount,
    surgeValues
}) {
    const dodgeRatio = computeRoundedValue(dodgeCount / casesCount);
    const insufficientAccuracyRatio = computeRoundedValue(insufficientAccuracyCount / casesCount);
    const hitRatio = 100 - (dodgeRatio + insufficientAccuracyRatio);

    const damageAndSurgeDistribution = {};
    for (let i = 0; i < damageValues.length; i++) {
        const damageCount = damageValues[i];
        damageAndSurgeDistribution[damageCount] = {};

        for (let j = 0; j < surgeValues.length; j++) {
            const surgeCount = surgeValues[j];
            const currentCaseCount = (distribution[damageCount] && distribution[damageCount][surgeCount]) || 0;
            damageAndSurgeDistribution[damageCount][surgeCount] = computeRoundedValue(currentCaseCount / casesCount);
        }
    }

    return {
        damageAndSurgeDistribution,
        dodgeRatio,
        hitRatio,
        insufficientAccuracyRatio,
    }

    function computeRoundedValue(rawValue) {
        let roundedValue = Math.round(rawValue * 1000) / 10;
        if (roundedValue >= 10) {
            roundedValue = Math.round(roundedValue);
        }
        return roundedValue;
    }
}