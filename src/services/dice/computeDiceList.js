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