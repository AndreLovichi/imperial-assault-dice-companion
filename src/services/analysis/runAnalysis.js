import diceService from "../dice";
import { computeDistributions } from "./computeDistributions";
import { computeDistributionStats} from "./computeDistributionStats";

export function runAnalysis(diceCounts) {
    const diceList = diceService.computeDiceList(diceCounts);
    const allCases = diceService.computeAllCases(diceList);
    return {
        allCases,
        distributions: computeAllDistributions(allCases)
    };

    function computeAllDistributions(cases) {
        const totalCount = cases.length;
        const { accuracyDistribution, damageDistribution, dodgeDistribution, surgeDistribution } = computeDistributions(cases);
        return {
            accuracy: computeDistributionStats(accuracyDistribution, totalCount),
            damage: computeDistributionStats(damageDistribution, totalCount),
            dodge: computeDistributionStats(dodgeDistribution, totalCount).map(renameDodgeResults),
            surge: computeDistributionStats(surgeDistribution, totalCount),
        };    
    }

    function renameDodgeResults(dodgeResults) {
        return {
            ...dodgeResults,
            value: dodgeResults.value ? "Yes" : "No"
        };
    }
}
