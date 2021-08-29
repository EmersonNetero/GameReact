import useInterval from "@use-it/interval";
import React, { useState } from "react";
import { CanvasContext } from "../../contexts/canvas";
import { Edirection, EWalker } from "../../settings/constants";


function useEnemyMoviment(initialPosition) {
    const [enemyState, setEnemyState] = useState(initialPosition);
    
    const [direction, setDirection] = useState(Edirection.RIGHT)
    const canvasContext = React.useContext(CanvasContext)
    
    useInterval(() => {
        const random = Math.floor(Math.random() * 4);
        const directions = Object.values(Edirection);
        const randomDirection = directions[random];

        const moviment = canvasContext.updateCanvas(randomDirection, enemyState, EWalker.ENEMY)

        if(moviment.nextMove.valid) {
            setDirection(randomDirection);
            setEnemyState(moviment.nextPosition);

        }
    }, 1000)

    return {
        enemy: enemyState,
        direction: direction
    }
}

export default useEnemyMoviment