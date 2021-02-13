import diceService from "../dice";
import { computeDistributions } from "./computeDistributions";
import { computeDistributionStats} from "./computeDistributionStats";

export function runAnalysis(diceCounts) {
    const diceList = diceService.computeDiceList(diceCounts);
    const allCases = diceService.computeAllCases(diceList);
    const totalCount = allCases.length;
    const { accuracyDistribution, damageDistribution, surgeDistribution } = computeDistributions(allCases);
    return {
        accuracy: computeDistributionStats(accuracyDistribution, totalCount),
        damage: computeDistributionStats(damageDistribution, totalCount),
        surge: computeDistributionStats(surgeDistribution, totalCount),
    };
}
