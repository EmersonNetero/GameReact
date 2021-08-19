import React from 'react';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { GAME_SIZE } from '../../settings/constants';

function Board() {
    return (
        <div>
            <Hero/>
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
            <MiniDemon />
            <Demon />
            <Chest />
            <Trap />
        </div>
    )
}

export default Board;