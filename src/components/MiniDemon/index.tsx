import React from 'react';
import './style.css'
import { Edirection, HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';


function MiniDemon({initialPosition}) {

    const {enemy, direction} = useEnemyMoviment(initialPosition);
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET, 
                top: TILE_SIZE* enemy.y - HEAD_OFFSET,
                left: TILE_SIZE* enemy.x,
                backgroundImage:"url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: 'mini-demon-animation 1s steps(4) infinite',
                position: 'absolute',
                transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
                }} >
        </div>
    )
}

export default MiniDemon;