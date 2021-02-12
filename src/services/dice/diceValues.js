const BLACK_DICE = [
    { blockCount: 1, evadeCount: 0, dodge: false },
    { blockCount: 1, evadeCount: 0, dodge: false },
    { blockCount: 2, evadeCount: 0, dodge: false },
    { blockCount: 2, evadeCount: 0, dodge: false },
    { blockCount: 3, evadeCount: 0, dodge: false },
    { blockCount: 0, evadeCount: 1, dodge: false }
];

const BLUE_DICE = [
    { damageCount: 0, surgeCount: 1, accuracy: 2 },
    { damageCount: 1, surgeCount: 0, accuracy: 2 },
    { damageCount: 2, surgeCount: 0, accuracy: 3 },
    { damageCount: 1, surgeCount: 1, accuracy: 3 },
    { damageCount: 2, surgeCount: 0, accuracy: 4 },
    { damageCount: 1, surgeCount: 0, accuracy: 5 }
];

const GREEN_DICE = [
    { damageCount: 0, surgeCount: 1, accuracy: 1 },
    { damageCount: 1, surgeCount: 1, accuracy: 1 },
    { damageCount: 2, surgeCount: 0, accuracy: 1 },
    { damageCount: 1, surgeCount: 1, accuracy: 2 },
    { damageCount: 2, surgeCount: 0, accuracy: 2 },
    { damageCount: 2, surgeCount: 0, accuracy: 3 }
];

const RED_DICE = [
    { damageCount: 1, surgeCount: 0, accuracy: 0 },
    { damageCount: 2, surgeCount: 0, accuracy: 0 },
    { damageCount: 2, surgeCount: 0, accuracy: 0 },
    { damageCount: 2, surgeCount: 1, accuracy: 0 },
    { damageCount: 3, surgeCount: 0, accuracy: 0 },
    { damageCount: 3, surgeCount: 0, accuracy: 0 }
]

const YELLOW_DICE = [
    { damageCount: 0, surgeCount: 1, accuracy: 0 },
    { damageCount: 1, surgeCount: 2, accuracy: 0 },
    { damageCount: 2, surgeCount: 0, accuracy: 1 },
    { damageCount: 1, surgeCount: 1, accuracy: 1 },
    { damageCount: 0, surgeCount: 1, accuracy: 2 },
    { damageCount: 1, surgeCount: 0, accuracy: 2 }
];

const WHITE_DICE = [
    { blockCount: 0, evadeCount: 0, dodge: false },
    { blockCount: 1, evadeCount: 0, dodge: false },
    { blockCount: 0, evadeCount: 1, dodge: false },
    { blockCount: 1, evadeCount: 1, dodge: false },
    { blockCount: 1, evadeCount: 1, dodge: false },
    { blockCount: 0, evadeCount: 0, dodge: true }
];

export const DICE_VALUES = {
    "black": BLACK_DICE,
    "blue": BLUE_DICE,
    "green": GREEN_DICE,
    "red": RED_DICE,
    "white": WHITE_DICE,
    "yellow": YELLOW_DICE
}