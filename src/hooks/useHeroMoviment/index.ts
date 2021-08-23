import { useState} from 'react';
import useEventListener from '@use-it/event-listener';
import { Edirection } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment } from '../../contexts/canvas/helpers';


function useHeroMoviment(initialPosition) {
    const [heroState, setheroState] = useState(initialPosition);
    
    const [direction, setDirection] = useState(Edirection.RIGHT)
    
    useEventListener('keydown', (event:KeyboardEvent) => {
        const direction:Edirection = event.key as Edirection; // tipagem do typescript...
        const nextPosition = handleNextPosition(direction, heroState);


        const isValidMoviment = checkValidMoviment(nextPosition)

        if (direction.includes("Arrow")) {
            if (isValidMoviment) {
                setheroState(nextPosition);
                setDirection(direction);
            }
        }
    })

    return {
        hero: heroState,
        direction: direction
    }
}

export default useHeroMoviment;
