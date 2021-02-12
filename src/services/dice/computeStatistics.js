import { DICE_VALUES } from "./diceValues";

export function computeDiceList({ blackDiceCount, blueDiceCount, greenDiceCount, redDiceCount, whiteDiceCount, yellowDiceCount }) {
    let dices = [];
    for(let i = 0; i < blackDiceCount; i++) { dices.push("black"); }
    for(let i = 0; i < blueDiceCount; i++) { dices.push("blue"); }
    for(let i = 0; i < greenDiceCount; i++) { dices.push("green"); }
    for(let i = 0; i < redDiceCount; i++) { dices.push("red"); }
    for(let i = 0; i < whiteDiceCount; i++) { dices.push("white"); }
    for(let i = 0; i < yellowDiceCount; i++) { dices.push("yellow"); }
    return dices;
}

export function computeAllCases(diceList) {
    const initialValues = {
        damageCount: 0,
        surgeCount: 0,
        accuracy: 0,
        blockCount: 0,
        evadeCount: 0,
        dodge: false
    };
    const results = [];
    doComputeAllCases(initialValues, diceList, results);
    return results;

    function doComputeAllCases({ damageCount, surgeCount, accuracy, blockCount, evadeCount, dodge }, remainingDice, results) {
        if (remainingDice.length === 0) {
            results.push({ damageCount, surgeCount, accuracy, blockCount, evadeCount, dodge });
        } else {
            const currentDiceColor = remainingDice[0];
            const newRemainingDice = remainingDice.slice(1);
    
            for (let i = 0; i < 6; i++) {
                const currentDiceValues = DICE_VALUES[currentDiceColor][i];
                const newValues = {
                    damageCount: damageCount + (currentDiceValues.damageCount || 0),
                    surgeCount: surgeCount + (currentDiceValues.surgeCount || 0),
                    accuracy: accuracy + (currentDiceValues.accuracy || 0),
                    blockCount: blockCount + (currentDiceValues.blockCount || 0),
                    evadeCount: evadeCount + (currentDiceValues.evadeCount || 0),
                    dodge: !! (dodge || currentDiceValues.dodge)
                };
                doComputeAllCases(newValues, newRemainingDice, results);
            }
        }
    }
}