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

    const { damageAndSurgeMatrix, dodgeRatio, insufficientAccuracyRatio } = computeAdvancedStats({
        casesCount: cases.length,
        damageValues,
        distribution,
        dodgeCount,
        insufficientAccuracyCount,
        surgeValues
    });

    return {
        damageAndSurgeMatrix,
        damageValues,
        dodgeRatio,
        insufficientAccuracyRatio,
        surgeValues
    }
}