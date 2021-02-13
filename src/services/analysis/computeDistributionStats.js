export function computeDistributionStats(distribution, totalCount) {
    let currentTotal = 0;
    let stats = [];

    const values = Object.keys(distribution).map(x => parseInt(x));
    const sortedValues = values.sort((a, b) => b - a);

    for (let i = 0; i < sortedValues.length; i++) {
        const value = sortedValues[i];
        const occurrences = distribution[value];
        currentTotal += occurrences;

        stats.push({
            value,
            occurrences,
            percentage: Math.round(occurrences * 100 / totalCount),
            runningPercentage: Math.round(currentTotal * 100 / totalCount)
        });
    }

    return stats.reverse();
}