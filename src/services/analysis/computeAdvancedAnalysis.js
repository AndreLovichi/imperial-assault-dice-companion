import { computeAdvancedDistribution } from "./computeAdvancedDistribution"
import { computeAdvancedStats } from "./computeAdvancedStats"

export function computeAdvancedAnalysis({ cases, minAccuracy }) {
    const {
        damageValues,
        distribution,
        dodgeCount,
        insufficientAccuracyCount,
        surgeValues
    } = computeAdvancedDistribution({ cases, minAccuracy });

    const { damageAndSurgeDistribution, dodgeRatio, hitRatio, insufficientAccuracyRatio } = computeAdvancedStats({
        casesCount: cases.length,
        damageValues,
        distribution,
        dodgeCount,
        insufficientAccuracyCount,
        surgeValues
    });

    return {
        damageAndSurgeDistribution,
        damageValues,
        dodgeRatio,
        hitRatio,
        insufficientAccuracyRatio,
        surgeValues
    }
}