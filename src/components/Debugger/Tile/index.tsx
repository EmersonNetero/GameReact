import React from 'react';
import { ECanvas } from '../../../contexts/canvas/helpers';
import { TILE_SIZE } from '../../../settings/constants';


interface IProps {
    position: {x: number, y: number},
    text: number;
}

function Tile(props: IProps) {

    function getTileColor() {
        switch(props.text) {
            case ECanvas.FLOOR:
                return "darkgray";

            case ECanvas.WALL:
                return "yellow";

            case ECanvas.DOOR:
                return 'white';

            case ECanvas.TRAP:
                return 'chartreuse';

            case ECanvas.MNI_DEMON:
            case ECanvas.DEMON:
                return 'red';

            case ECanvas.CHEST:
                return 'cyan';

            case ECanvas.HERO:
                return "magenta";

        }
    }

    const color = getTileColor()
    return (
        <div style=
        {
            {
                width: TILE_SIZE,
                height: TILE_SIZE,
                border: `2px solid ${color}`,
                position: 'absolute',
                left: TILE_SIZE * props.position.x,
                top: TILE_SIZE * props.position.y,
                color: color,
                fontSize: 32,
                zIndex: 2,
            }
        }>
            {props.text}
        </div>
    )
}


export default Tile;