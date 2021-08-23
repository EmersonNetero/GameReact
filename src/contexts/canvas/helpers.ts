import { Edirection } from "../../settings/constants";

export function handleNextPosition(direction, enemyState) {
    switch(direction){
        case Edirection.LEFT:
            return {x: enemyState.x - 1, y: enemyState.y};
        case Edirection.RIGHT:
            return {x: enemyState.x + 1, y: enemyState.y};
        case Edirection.DOWN:
            return {x: enemyState.x, y: enemyState.y + 1};
        case Edirection.UP:
            return {x: enemyState.x, y: enemyState.y - 1};
    }
}

/**
 * TODO VALOR 1 É IGUAL A PAREDE
 */

export enum ECanvas {
    FLOOR = 0,
    WALL = 1,
    DOOR = 2,
    TRAP = 3,
    MNI_DEMON = 4,
    DEMON = 5,
    CHEST = 6,
    HERO = 7
};

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR =  ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MNI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HE = ECanvas.HERO;


export const canvas = [
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
    [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, WL],
    [WL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
]


export function checkValidMoviment(nextPosition) {
    const canvasValue = canvas[nextPosition.y][nextPosition.x];
    if (canvasValue === ECanvas.WALL) {
        return false;
    }
    if (canvasValue === ECanvas.TRAP) {
        console.log('Pisou na TRAP')
    }
    if (canvasValue === ECanvas.CHEST) {
        console.log('Pisou no BAÚ')
    }

    return true;
}