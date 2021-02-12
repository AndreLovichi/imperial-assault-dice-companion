import diceService from "../dice";

export function runAnalysis(diceCounts) {
    console.log(diceCounts);
    const diceList = diceService.computeDiceList(diceCounts);
    const allCases = diceService.computeAllCases(diceList);
    return allCases;
}