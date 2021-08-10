import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';

function Board() {
    return (
        <div>
            <Hero/>
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    )
}

export default Board;