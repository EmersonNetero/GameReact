import React from 'react';
import CanvasProvider from '../../contexts/canvas';
import ChestProvider from '../../contexts/Chest';
import Board from '../Board';
import Debugger from '../Debugger';

function Game() {

    return (
        <CanvasProvider>
            <ChestProvider>
                <Debugger />
                <Board />
            </ChestProvider>
        </CanvasProvider>
    )
}

export default Game