import diceService from "../dice";
import { computeDistributions } from "./computeDistributions";
import { computeDistributionStats} from "./computeDistributionStats";

export function runAnalysis(diceCounts) {
    const diceList = diceService.computeDiceList(diceCounts);
    const allCases = diceService.computeAllCases(diceList);
    const totalCount = allCases.length;
    const { accuracyDistribution, damageDistribution, dodgeDistribution, surgeDistribution } = computeDistributions(allCases);
    return {
        accuracy: computeDistributionStats(accuracyDistribution, totalCount),
        damage: computeDistributionStats(damageDistribution, totalCount),
        dodge: computeDistributionStats(dodgeDistribution, totalCount).map(renameDodgeResults),
        surge: computeDistributionStats(surgeDistribution, totalCount),
    };

    function renameDodgeResults(dodgeResults) {
        console.log(dodgeResults);
        return {
            ...dodgeResults,
            value: dodgeResults.value ? "Yes" : "No"
        };
    }
}
