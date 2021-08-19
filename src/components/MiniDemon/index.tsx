import React from 'react';
import './style.css'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';


function MiniDemon() {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET, 
                bottom: TILE_SIZE * 8,
                left: TILE_SIZE * 2,
                backgroundImage:"url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: 'mini-demon-animation 1s steps(4) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default MiniDemon;