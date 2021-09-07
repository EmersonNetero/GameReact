import React from 'react';
import './style.css'
import { TILE_SIZE } from '../../settings/constants';
import { ChestContext } from '../../contexts/Chest';


function Chest({initialPosition}) {
    const chestContext = React.useContext(ChestContext)

    const shouldAnimate = chestContext.openedChests.positions.find((position) => {
        const match = initialPosition.y === position.y && initialPosition.x === position.x 

        return match
    })

    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: 100, 
                top: TILE_SIZE * initialPosition.y,
                left: TILE_SIZE * initialPosition.x,
                backgroundImage:"url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: shouldAnimate && 'chest-animation 1s steps(2) forwards',
                position: 'absolute',
                }} >
        </div>
    )
}

export default Chest;