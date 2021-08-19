import React from 'react';
import './style.css'
import { TILE_SIZE } from '../../settings/constants';


function Trap() {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: 100, 
                bottom: TILE_SIZE * 2,
                left: TILE_SIZE * 9,
                backgroundImage:"url(./assets/TRAP.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'trap-animation 1s steps(8) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Trap;