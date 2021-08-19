import React from 'react';
import './style.css'
import { TILE_SIZE, DEMON_TILE_SIZE } from '../../settings/constants';


function Demon() {
    return (
        <div 
            style={{
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE, 
                bottom: TILE_SIZE * 6,
                left: TILE_SIZE * 9,
                backgroundImage:"url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Demon;