import { Edirection } from "../../settings/constants";

export function handleNextPosition(direction, enemyState) {
    switch(direction){
        case Edirection.LEFT:
            return {x: enemyState.x - 1, y: enemyState.y};
        case Edirection.RIGHT:
            return {x: enemyState.x + 1, y: enemyState.y};
        case Edirection.UP:
            return {x: enemyState.x, y: enemyState.y + 1};
        case Edirection.DOWN:
            return {x: enemyState.x, y: enemyState.y - 1};
    }
}