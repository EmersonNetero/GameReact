import React from "react";
import Tile from "./Tile";
import { CanvasContext } from "../../contexts/canvas";


function Debugger() {

    
    function getCanvasMap(canvas) {
        const tilesArray = [];
        
        for ( let y = 0; y < canvas.length; y++) {
            const canvasY = canvas[y];
    
            for ( let x = 0; x < canvasY.length; x++) {
                const canvasX = canvasY[x];
    
                const position = {x: x, y: y}
                const text = canvas[y][x] || canvasX

                const key = `${x}-${y}`;

                tilesArray.push(<Tile key={key} position={position} text={text}/>);
            }
        }

        return tilesArray;
    }
    const canvasContext = React.useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas)

    return (
        <div>
            {tiles}
        </div>
    )
}

export default Debugger;