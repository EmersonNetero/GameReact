import React from 'react';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { GAME_SIZE } from '../../settings/constants';
import {canvas, ECanvas} from '../../contexts/canvas/helpers'


function getCanvasMap() {
    const array = [];
    
    for ( let y = 0; y < canvas.length; y++) {
        const canvasY = canvas[y];

        for ( let x = 0; x < canvasY.length; x++) {
            const canvasX = canvasY[x];

            const position = {x: x, y: y}
            const text = canvas[y][x] || canvasX
            const key = `${x}-${y}`;
            
            if (text === ECanvas.TRAP) {
                array.push(<Trap key={key} initialPosition={position} />)
            }
            if (text === ECanvas.MNI_DEMON) {
                array.push(<MiniDemon key={key} initialPosition={position} />)
            }
            if (text === ECanvas.DEMON) {
                array.push(<Demon key={key} initialPosition={position} />)
            }
            if (text === ECanvas.CHEST) {
                array.push(<Chest key={key} initialPosition={position} />)
            }
            if (text === ECanvas.HERO) {
                array.push(<Hero key={key} initialPosition={position}/>)
            }

            //tilesArray.push(<Tile key={key} position={position} text={text}/>);
        }
    }

    return array;
}


const elements = getCanvasMap();
function Board() {
    return (
        <div>
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
            {elements}
        </div>
    )
}

export default Board;