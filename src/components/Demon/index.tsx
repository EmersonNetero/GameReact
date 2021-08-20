import React from 'react';
import './style.css'
import { TILE_SIZE, DEMON_TILE_SIZE, Edirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';


function Demon() {

    const {enemy, direction } = useEnemyMoviment({x: 12, y: 5});
    return (
        <div 
            style={{
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE, 
                bottom: TILE_SIZE * enemy.y,
                left: TILE_SIZE * enemy.x,
                backgroundImage:"url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                position: 'absolute',
                transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
                }} >
        </div>
    )
}

export default Demon;