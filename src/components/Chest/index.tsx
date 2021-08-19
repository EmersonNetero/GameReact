import React from 'react';
import './style.css'
import { TILE_SIZE } from '../../settings/constants';


function Chest() {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: 100, 
                bottom: TILE_SIZE * 3,
                left: TILE_SIZE * 9,
                backgroundImage:"url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'chest-animation 1s steps(3) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Chest;