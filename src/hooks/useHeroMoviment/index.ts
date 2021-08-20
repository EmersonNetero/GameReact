import { useState} from 'react';
import useEventListener from '@use-it/event-listener';
import { Edirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';


function useHeroMoviment() {
    const [heroState, setheroState] = useState({
        x: 5,
        y: 3,
    });
    
    const [direction, setDirection] = useState(Edirection.RIGHT)
    
    useEventListener('keydown', (event:KeyboardEvent) => {
        const direction:Edirection = event.key as Edirection; // tipagem do typescript...
        const nextPosition = handleNextPosition(direction, heroState);
        if (direction.includes("Arrow")) {
            setheroState(nextPosition);
            setDirection(direction);
        }
    })

    return {
        hero: heroState,
        direction: direction
    }
}

export default useHeroMoviment;
