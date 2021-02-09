import { COLOR_SETTINGS } from "./data";

export function getColorSettings(color) {
    const colorSettings = COLOR_SETTINGS[color];
    if (! colorSettings) { throw new Error(`Invalid color "${color}"`); }
    return colorSettings;
}