import React, { useState} from 'react';
import useEventListener from '@use-it/event-listener';
import { Edirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestContext } from '../../contexts/Chest';


function useHeroMoviment(initialPosition) {
    const [heroState, setheroState] = useState(initialPosition);
    const [direction, setDirection] = useState(Edirection.RIGHT)
    const canvasContext = React.useContext(CanvasContext)
    const chestContext = React.useContext(ChestContext)


    
    useEventListener('keydown', (event:KeyboardEvent) => {
        const direction:Edirection = event.key as Edirection; // tipagem do typescript...
        
        const moviment = canvasContext.updateCanvas(direction, heroState, EWalker.HERO);

        if (direction.includes("Arrow")) {
            if (moviment.nextMove.valid) {
                setheroState(moviment.nextPosition);
                setDirection(direction);
            }
            
            if (moviment.nextMove.dead) {
                alert('Você morreu!')
            }

            if (moviment.nextMove.chest) {
                chestContext.updateOpenedChests();
            }
        }
    })

    return {
        hero: heroState,
        direction: direction
    }
}

export default useHeroMoviment;
