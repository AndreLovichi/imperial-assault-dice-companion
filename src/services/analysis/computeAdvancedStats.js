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

    const damageCaseCounts = {};
    const surgeCaseCounts = {};

    const damageAndSurgeDistribution = {};
    for (let i = 0; i < damageValues.length; i++) {
        const damageCount = damageValues[i];
        damageAndSurgeDistribution[damageCount] = {};
        damageCaseCounts[damageCount] = 0;

        for (let j = 0; j < surgeValues.length; j++) {
            const surgeCount = surgeValues[j];
            surgeCaseCounts[surgeCount] = surgeCaseCounts[surgeCount] || 0;

            const currentCaseCount = (distribution[damageCount] && distribution[damageCount][surgeCount]) || 0;
            damageAndSurgeDistribution[damageCount][surgeCount] = computeRoundedValue(currentCaseCount / casesCount);
            
            damageCaseCounts[damageCount] += currentCaseCount;
            surgeCaseCounts[surgeCount] += currentCaseCount;
        }
    }

    console.log(surgeCaseCounts);

    for (let i = 0; i < damageValues.length; i++) {
        const damageCount = damageValues[i];
        damageAndSurgeDistribution[damageCount]["Total"] = computeRoundedValue(damageCaseCounts[damageCount] / casesCount);
    }

    damageAndSurgeDistribution["Total"] = {};
    for (let j = 0; j < surgeValues.length; j++) {
        const surgeCount = surgeValues[j];
        damageAndSurgeDistribution["Total"][surgeCount] = computeRoundedValue(surgeCaseCounts[surgeCount] / casesCount);
    }
    damageAndSurgeDistribution["Total"]["Total"] = 100;


    return {
        damageAndSurgeDistribution,
        dodgeRatio,
        hitRatio,
        insufficientAccuracyRatio,
    }

    function computeRoundedValue(rawValue) {
        let roundedValue = Math.round(rawValue * 1000) / 10;
        if (roundedValue >= 1) {
            roundedValue = Math.round(roundedValue);
        }
        return roundedValue;
    }
}