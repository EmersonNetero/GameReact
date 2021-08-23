import React from 'react';
import './style.css'
import { TILE_SIZE } from '../../settings/constants';


function Chest({initialPosition}) {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: 100, 
                top: TILE_SIZE * initialPosition.y,
                left: TILE_SIZE * initialPosition.x,
                backgroundImage:"url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'chest-animation 1s steps(3) infinite',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Chest;