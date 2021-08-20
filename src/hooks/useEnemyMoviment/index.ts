import useInterval from "@use-it/interval";
import { useState } from "react";
import { handleNextPosition } from "../../contexts/canvas/helpers";
import { Edirection } from "../../settings/constants";


function useEnemyMoviment(initialPosition) {
    const [enemyState, setEnemyState] = useState(initialPosition);
    
    const [direction, setDirection] = useState(Edirection.RIGHT)
    
    useInterval(() => {
        const random = Math.floor(Math.random() * 4);
        const directions = Object.values(Edirection);
        const randomDirection = directions[random];

        const nextMoviment = handleNextPosition(randomDirection, enemyState);

        setDirection(randomDirection);
        setEnemyState(nextMoviment);
    }, 1000)

    return {
        enemy: enemyState,
        direction: direction
    }
}

export default useEnemyMoviment