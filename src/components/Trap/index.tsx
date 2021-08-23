import React from 'react';
import './style.css'
import { TILE_SIZE } from '../../settings/constants';


function Trap({initialPosition}) {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: 100, 
                top: TILE_SIZE * initialPosition.y,
                left: TILE_SIZE * initialPosition.x,
                backgroundImage:"url(./assets/TRAP.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'trap-animation 1s steps(8) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Trap;