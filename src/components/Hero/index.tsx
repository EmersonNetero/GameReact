import useEventListener from '@use-it/event-listener';
import React from 'react';
import './style.css'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import { useState } from 'react';


function Hero() {

    const [heroState, setheroState] = useState({
        x: 5,
        y: 3,
    });

    const [direction, setDirection] = useState('RIGHT')

    useEventListener('keydown', (event:KeyboardEvent) => {
        if(event.key === "ArrowLeft") {
            setheroState({x: heroState.x - 1, y: heroState.y})
            setDirection('LEFT');
        }else if(event.key === "ArrowRight") {
            setheroState({x: heroState.x + 1, y: heroState.y})
            setDirection('RIGHT')
        }else if(event.key === "ArrowUp") {
            setheroState({x: heroState.x, y: heroState.y + 1})
        }else if(event.key === "ArrowDown") {
            setheroState({x: heroState.x, y: heroState.y - 1})
        }
    })

    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET, 
                bottom: TILE_SIZE * heroState.y,
                left: TILE_SIZE * heroState.x,
                backgroundImage:"url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: 'hero-animation 1s steps(4) infinite',
                position: 'absolute',
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`,
                }} >
        </div>
    )
}

export default Hero;